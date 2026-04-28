# 🐳 Docker Project Collection
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Compose](https://img.shields.io/badge/docker--compose-%2315AABF.svg?style=for-the-badge&logo=docker&logoColor=white)
![Containerization](https://img.shields.io/badge/Containerization-Modern-green?style=for-the-badge&logo=containers)

A practical Docker workspace with multiple containerized application examples and supporting architecture documentation.

---

## 📌 What this repository contains
This repository is organized into sample Docker projects and learning assets:

- `nginx-node-mariadb/` — Three-tier stack: Nginx reverse proxy, Node.js backend, MariaDB database.
- `nginx-node-express/` — Two-tier stack: Nginx proxy and Node.js Express app.
- `nginx-node-redis-postgres/` — Extended stack with Redis cache and PostgreSQL data store.
- `flask-redis/` — Flask application integrated with Redis.
- `Lamp-Stack-project/` — LAMP stack example.
- `my-dijengo-project/` — Django-based application project.
- PDF learning guides covering Docker architecture, lifecycle, networking, storage, security, and image optimization.

---

## 🚧 Why this repo is useful
This root README provides a quick access point for:

- Reviewing containerization patterns.
- Running practical multi-service examples.
- Inspecting Docker Compose orchestration.
- Learning Docker architecture through companion PDFs.

---

## 📁 Folder overview
```text
Docker/
├── flask-redis/                # Flask + Redis containerized example
├── Lamp-Stack-project/         # LAMP stack sample
├── my-dijengo-project/         # Django sample project
├── nginx-node-express/         # Nginx + Node.js Express stack
├── nginx-node-mariadb/         # Nginx + Node.js + MariaDB stack
├── nginx-node-redis-postgres/  # Nginx + Node.js + Redis + PostgreSQL stack
├── Docker Architecture & Core.pdf
├── Docker Container Lifecycle & Networking.pdf
├── Docker Image Management & Optimization.pdf
├── Docker Orchestration & Composition.pdf
├── Docker Security & Registry.pdf
├── Docker Storage & Data Persistence.pdf
└── README.md
```

---

## ▶️ Quick start
Choose the stack you want to run, then use Docker Compose from that folder.

Example for `nginx-node-mariadb`:
```bash
cd nginx-node-mariadb
sudo docker-compose up -d --build
sudo docker-compose ps
```

For `nginx-node-express`:
```bash
cd nginx-node-express
sudo docker-compose up -d --build
```

Then open:
```text
http://localhost
```

---

## 🧭 Notes
- Ensure Docker Engine and Docker Compose are installed.
- Use `.env` files where provided to keep credentials out of version control.
- Inspect service definitions in each `docker-compose.yml` for ports, networks, and volumes.

---

## 📘 Learn more
Open the PDF files in this repository to explore:

- Docker architecture and core runtime components
- Container lifecycle and networking
- Image build optimization and multi-stage builds
- Orchestration patterns and Compose best practices
- Security hardening and registry management
- Storage persistence and volume usage
