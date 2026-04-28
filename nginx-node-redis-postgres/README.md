# Nginx Node Redis PostgreSQL

> Production-Grade Containerized Microservices Platform

[![Docker](https://img.shields.io/badge/Docker-20.10+-blue?logo=docker&logoColor=white&style=flat-square)](https://www.docker.com/)
[![Docker Compose](https://img.shields.io/badge/Docker%20Compose-2.0+-blue?logo=docker&logoColor=white&style=flat-square)](https://docs.docker.com/compose/)
[![Node.js](https://img.shields.io/badge/Node.js-Express%204.18-green?logo=node.js&logoColor=white&style=flat-square)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Alpine-336791?logo=postgresql&logoColor=white&style=flat-square)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-Latest-DC382D?logo=redis&logoColor=white&style=flat-square)](https://redis.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

---

## Overview

```
┌──────────────────────────────────────────────────┐
│  Production-ready containerized microservices   │
│  with Docker, Redis caching, PostgreSQL, Nginx  │
└──────────────────────────────────────────────────┘
```

- Docker containerization with compose orchestration
- Microservices with independent service scaling
- Redis in-memory caching layer
- PostgreSQL relational database
- Nginx reverse proxy with load balancing
- Environment-based configuration

---

## Technology Stack

```
┌────────────────────────────────────────────────────┐
│ Component              Technology      Version    │
├────────────────────────────────────────────────────┤
│ Container Runtime      Docker          20.10+     │
│ Orchestration          Docker Compose  2.0+       │
│ Frontend               Node.js / HTML  Latest     │
│ Backend API            Express.js      4.18.2     │
│ Database               PostgreSQL      Alpine     │
│ Cache Layer            Redis           Latest     │
│ Load Balancer          Nginx           Latest     │
└────────────────────────────────────────────────────┘
```

---

## System Architecture

```
┌──────────────────────────────────────────────────┐
│         HTTP Client Requests (Port 80)           │
│                      │                           │
│        Nginx Reverse Proxy / Load Balancer       │
│                      │                           │
│      ┌───────────────┼───────────────┐           │
│      │               │               │           │
│   Frontend       Backend API      Services       │
│   (Port 3000)    (Port 5000)      Handler        │
│      │               │               │           │
│      │      ┌────────┼────────┐      │           │
│      │      │        │        │      │           │
│      │      ▼        ▼        ▼      │           │
│      │   PostgreSQL Redis  Monitoring │          │
│      │   (5432)    (6379)   (Grafana)│           │
│      │   Database  Cache    Dashboard │          │
│                                                 │
└──────────────────────────────────────────────────┘
```

---

## Project Structure

```
┌────────────────────────────────────────────────┐
│ nginx-node-redis-postgres/                    │
│ compose.yaml              Config file          │
│ .env                      Variables             │
│                                                 │
│ backend/                  Express API          │
│ ├─ Dockerfile, index.js, package.json         │
│                                                 │
│ frontend/                 Static site         │
│ ├─ Dockerfile, index.html, package.json       │
│ └─ nginx.conf            Routing              │
│                                                 │
│ db/  schema.sql           PostgreSQL init     │
│ nginx/ nginx.conf         Reverse proxy       │
│                                                 │
└────────────────────────────────────────────────┘
```

---

## Requirements

```
┌────────────────────────────────┐
│ PREREQUISITES                  │
├────────────────────────────────┤
│ Docker              20.10+      │
│ Docker Compose      2.0+        │
│ System RAM          2GB min     │
│ Disk Space          500MB min   │
│ OS                  Any         │
│                                 │
│ Verify: docker --version        │
└────────────────────────────────┘
```

---

## Installation

### Step 1: Clone Repository
```bash
git clone https://github.com/yourusername/nginx-node-redis-postgres.git
cd nginx-node-redis-postgres
```

### Step 2: Environment Setup
```bash
cat > .env << EOF
DB_HOST=db
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=secure_password
DB_NAME=appdb
PORT=5000:5000
NODE_ENV=development
REDIS_HOST=redis
REDIS_PORT=6379
EOF
```

### Step 3: Build & Start
```bash
docker-compose build
docker-compose up -d
```

---

## Operations

```
┌────────────────────────────────────┐
│ COMMON COMMANDS                    │
├────────────────────────────────────┤
│ docker-compose up -d               │
│ Start all services                 │
│                                    │
│ docker-compose down                │
│ Stop all services                  │
│                                    │
│ docker-compose ps                  │
│ View service status                │
│                                    │
│ docker-compose logs -f backend     │
│ View backend logs                  │
│                                    │
│ docker-compose build --no-cache    │
│ Rebuild containers                 │
│                                    │
│ docker-compose down -v             │
│ Reset everything                   │
└────────────────────────────────────┘
```

---

## Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| DB_HOST | db | PostgreSQL hostname |
| DB_PORT | 5432 | Database port |
| DB_USER | postgres | Database user |
| DB_PASSWORD | REQUIRED | Database password |
| DB_NAME | appdb | Database name |
| PORT | 5000:5000 | Backend port mapping |
| NODE_ENV | development | Environment mode |
| REDIS_HOST | redis | Redis hostname |
| REDIS_PORT | 6379 | Redis port |

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/visits | Get visit count |
| POST | /api/items | Create item |
| GET | / | Frontend page |

---

## Database Schema

Tables: visits (page analytics), items (application data), categories (classification)
- Optimized indexes for query performance
- Foreign key relationships and constraints
- Timezone-aware timestamps
- Materialized views for analytics

---

## Troubleshooting

```
┌──────────────────────────────────┐
│ Issue              Solution      │
├──────────────────────────────────┤
│ Port in use        docker-compose│
│                    down && up -d  │
│                                  │
│ DB connection      Check DB_HOST │
│ failed             in .env        │
│                                  │
│ Build errors       build --no-   │
│                    cache         │
│                                  │
│ Data loss          Verify volume │
│                    exists        │
└──────────────────────────────────┘
```

---


