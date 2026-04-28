# Nginx Node Redis PostgreSQL

A containerized three-tier application with a static frontend, Express backend, Redis cache, PostgreSQL database, and Nginx reverse proxy.

---

## Overview

This repository contains a Docker Compose stack for:

- nginx reverse proxy
- frontend static app served via Nginx
- backend API with Express
- PostgreSQL database initialization using `db/schema.sql`
- Redis caching

---

## Project Layout

```
nginx-node-redis-postgres/
├─ compose.yaml          # Docker Compose service definitions
├─ .env                  # runtime environment variables
├─ backend/              # Express API + PostgreSQL + Redis
│  ├─ Dockerfile
│  ├─ index.js
│  └─ package.json
├─ frontend/             # Static frontend + Nginx config
│  ├─ Dockerfile
│  ├─ index.html
│  ├─ nginx.conf
│  └─ package.json
├─ db/                   # PostgreSQL init SQL
│  └─ schema.sql
└─ nginx/                # Reverse proxy configuration
   └─ nginx.conf
```

---

## Requirements

- Docker
- Docker Compose
- Git
- 2GB RAM minimum

---

## Setup

1. Clone the repository.

```bash
git clone https://github.com/yourusername/nginx-node-redis-postgres.git
```

2. Enter the project directory.

```bash
cd nginx-node-redis-postgres
```

3. Create or update `.env`.

```bash
cat > .env << 'EOVAR'
DB_HOST=db_container
DB_USER=root
DB_PASSWORD=Ani12mal
DB_NAME=project_5_db
PORT=5000
EOVAR
```

> Note: `compose.yaml` currently maps `POSTGRES_USER` from the host `USER` variable. If you want `DB_USER` to be used, update `compose.yaml` to use `${DB_USER}` in the `db` service.

4. Build the Docker images.

```bash
docker compose build
```

5. Start the stack.

```bash
docker compose up -d
```

---

## Services

- `nginx`: reverse proxy on `http://localhost`
- `web`: frontend static site
- `backend`: Express API on port `5000`
- `db`: PostgreSQL container
- `redis`: Redis cache container

---

## Service Endpoints

- Frontend: `http://localhost`
- Backend API: `http://localhost/api`
- Health: `http://localhost/api/health`

---

## API Endpoints

- `GET /api/visits` — returns visit total from Redis cache
- `GET /api/items` — returns items from PostgreSQL, cached in Redis
- `POST /api/items` — inserts a new item
- `POST /api/visit` — increments the Redis visit counter

---

## Useful Commands

```bash
docker compose ps
```

```bash
docker compose logs -f backend_container
```

```bash
docker compose down
```

```bash
docker compose down -v
```

---

## Notes

- Frontend requests under `/api/` are proxied to `backend_container:5000`.
- PostgreSQL is initialized from `db/schema.sql`.
- Redis is used for caching the item list and counting visits.
- The backend reads `DB_HOST`, `DB_PASSWORD`, `DB_NAME`, `REDIS_HOST`, and `REDIS_PORT` from environment variables.
