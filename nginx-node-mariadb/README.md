# 🐳 Nginx-Node-MariaDB Stack (Docker Containerization)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)

This repository demonstrates a complete, containerized **Three-Tier Architecture** using Docker and Docker Compose. It orchestrates three independent microservices—Nginx (Reverse Proxy), Node.js (Backend Application), and MariaDB (Relational Database)—into a single unified deployment stack.

---

## 🏛️ Comprehensive Architectural Patterns

### 1. 🛡️ Reverse Proxy Layer (Nginx)
**Focus:** Infrastructure Edge, Security, and Traffic Routing
- **Nginx** handles incoming traffic on Port 80.
- It acts as the **Gateway**, terminating external requests and proxying them to the internal Node.js backend.
- **Key Directives:** `proxy_pass`, `proxy_set_header`, `listen 80`.

### 2. 🚀 Backend Application Layer (Node.js)
**Focus:** Business Logic, API Management, and Database Interaction
- The backend application is built with **Node.js/Express.js**.
- It communicates with the internal MariaDB database to fetch or store data.
- Masked behind Nginx, it receives traffic only through the specified `app` service network.

### 3. 💾 Data Persistence Layer (MariaDB)
**Focus:** Data Relational Integrity and Persistence
- **MariaDB** serves as the Relational Database Management System (RDBMS).
- Docker Volumes (`db_data`) are implemented to ensure **Data Persistence**, preventing data loss even if the container is removed or restarted.
- Initialized with critical SQL scripts to set up user tables.

---

## 📂 Technical Directory Structure
```text
Docker/nginx-node-mariadb/
├── nginx/
│   ├── default.conf         # Nginx configuration for Proxy
│   └── Dockerfile           # Dockerfile for Nginx (if any)
├── app/                     # Node.js Source Code
│   ├── index.js / server.js # Backend Entry point
│   ├── views/               # Frontend (EJS/HTML)
│   ├── public/              # Static Assets (CSS/JS)
│   ├── package.json         # Node Dependencies
│   └── Dockerfile           # Dockerfile for the App
├── docker-compose.yml       # The Orchestrator
└── .env                     # Database Credentials
```
## 🛠️ Step-by-Step Deployment 

### 1. Prerequisites
Ensure you have the following installed on your host system:
 
- Docker Engine
- Docker Compose
### 2. Configuration (.env)
Create a .env file in the root directory to manage database credentials securely:
```bash
DB_USER=admin
DB_PASSWORD=your_secure_password
DB_NAME=studentmanagement
MARIADB_ROOT_PASSWORD=your_root_password
```
### 3. Build & Run the Stack
To orchestrate and launch all three services, simply execute:
```bash
# Build images and start containers in the background
sudo docker-compose up -d --build
```
### 4. Verification & Validation
Check the status of your newly created container stack:
```bash
# Verify running containers
sudo docker-compose ps

# Monitor service logs for troubleshooting
sudo docker-compose logs -f
```
### 5. Accessing the Application
Open your web browser and navigate to:
```bash
http://localhost  # Requests are proxied by Nginx to Node.js
```
## 🛠️ Core DevOps Competencies Demonstrated
- **Microservices Orchestration:** Managing dependencies and communication between multiple containerized services.
- **Data Persistence:** Leveraging Docker Volumes (db_data) for robust data management.
- **Environment Management:** Hardening configurations by separating credentials into .env files.
- **Network Isolation:** Implementing distinct bridge networks (db_net, app_net) to ensure service isolation.
- **Reverse Proxying:** Configuring Nginx to act as the unified application gateway.

