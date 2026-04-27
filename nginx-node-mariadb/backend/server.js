const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/students', studentRoutes);

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({ message: 'Server is running' });
});

// Start server
app.listen(PORT,'0.0.0.0', () => {
    console.log(`Backend server running on port ${PORT}`);
    db.connect((err) => {
        if (err) {
            console.error('Database connection failed:', err);
        } else {
            console.log('Connected to MySQL database');
        }
    });
});
