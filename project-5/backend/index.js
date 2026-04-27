// backend/index.js
const express = require('express');
const { Pool } = require('pg');
const redis = require('redis');

const app = express();
const PORT = process.env.PORT || 5000;

// PostgreSQL connection
const pool = new Pool({
    host: process.env.DB_HOST || 'postgres',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'appdb',
    options: "-c search_path=app,public"
});

// Redis connection
const redisClient = redis.createClient({
    url: `redis://${process.env.REDIS_HOST || 'redis'}:${process.env.REDIS_PORT || 6379}`
});
redisClient.on('error', err => console.error('Redis error:', err));
redisClient.connect();

app.use(express.json());

// Middleware to log visit (with Redis caching for counter)
app.use(async (req, res, next) => {
    try {
        // Increment visit counter in Redis
  //`   await redisClient.incr('total_visits');
        // Optionally store in PostgreSQL asynchronously (non-blocking)
        pool.query('INSERT INTO visits (user_agent) VALUES ($1)', [req.headers['user-agent'] || 'unknown'])
            .catch(err => console.error('Failed to log visit:', err));
    } catch (err) {
        console.error('Redis error in middleware:', err);
    }
    next();
});

// API endpoint: get total visits (from Redis cache)
app.get('/api/visits', async (req, res) => {
    try {
        const visits = await redisClient.get('total_visits');
        res.json({ total: visits ? parseInt(visits) : 0 });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// API endpoint: get all items (with Redis caching)
app.get('/api/items', async (req, res) => {
    try {
        const cachedItems = await redisClient.get('items');
        if (cachedItems) {
            return res.json({ source: 'cache', data: JSON.parse(cachedItems) });
        }
        const result = await pool.query('SELECT * FROM items ORDER BY id');
        await redisClient.set('items', JSON.stringify(result.rows), { EX: 60 }); // cache for 60 sec
        res.json({ source: 'database', data: result.rows });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// API endpoint: add new item (invalidate cache)
app.post('/api/items', async (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'Name required' });
    try {
        const result = await pool.query('INSERT INTO items (name) VALUES ($1) RETURNING *', [name]);
        await redisClient.del('items'); // invalidate cache
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// API endpoint: add new visits (invalidate cache)
app.post('/api/visit', async (req, res) => {
    try {
        const count = await redisClient.incr('total_visits');
        res.json({ success: true, total: count });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Health check
app.get('/health', (req, res) => res.send('OK'));

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
