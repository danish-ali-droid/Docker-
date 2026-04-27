# 🐳 Containerized Nginx & Node-Express Architecture
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white)

This project showcases the containerization of a professional **Two-Tier Architecture**. By leveraging **Docker Compose**, I have orchestrated a high-performance **Nginx** Reverse Proxy sitting in front of a scalable **Node.js Express** application, ensuring secure and efficient traffic routing.

---

## 🏗️ Architectural Pattern: The Reverse Proxy
In this deployment, Nginx serves as the entry point for all incoming HTTP requests. It acts as a shield for the Node.js application, providing an additional layer of abstraction and security.



- **Frontend/Proxy Layer:** Nginx container listening on Port 80.
- **Application Layer:** Node.js Express container running the business logic.
- **Inter-Container Communication:** Nginx communicates with the Express app over a dedicated Docker bridge network using the service name.

---

## 📂 Technical Directory Structure
```text
nginx-node-express/
├── nginx/                  # Web Server Configuration
│   ├── default.conf        # Proxy pass & upstream rules
│   └── Dockerfile          # Nginx container definition
├── node-app/               # Express Application Source
│   ├── index.js            # Server entry point
│   ├── package.json        # Node.js dependencies
│   └── Dockerfile          # Optimized Node.js environment build
├── docker-compose.yml      # Service Orchestration manifest
└── README.md               # Project Documentation
```
---
## 🚀 Deployment & Execution Guide
### 1. Environment Readiness
Ensure your host machine has Docker and Docker Compose installed.
### 2. Launching the Stack
Navigate to the project root and execute the build command. This will pull images, build custom Dockerfiles, and link the services:
```bash 
# Spin up the containers in detached mode
sudo docker-compose up -d --build
```
### 3. Monitoring & Troubleshooting
To ensure the services are healthy and communicating correctly:
```bash 
# Check container status
sudo docker-compose ps

# View real-time logs from the Node-app
sudo docker-compose logs -f node-app
```
### 4. Application Access
The application is accessible through Nginx's default port:
```text
URL: http://localhost/
```
---
## 🛠️ Core DevOps Competencies Demonstrated

- **Service Orchestration:** Defining and running multi-container Docker applications.

- **Networking:** Utilizing Docker's internal DNS for service-to-service communication.

- **Build Optimization:** Creating lightweight and efficient Dockerfiles for Node.js environments.

- **Reverse Proxy Implementation:** Configuring Nginx to forward requests while maintaining header integrity.
---
