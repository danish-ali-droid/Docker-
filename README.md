# 🐳 Docker: From Core Architecture to Cloud Orchestration
![Docker Banner](https://img.shields.io/badge/Docker-Infrastructure-blue?style=for-the-badge&logo=docker&logoColor=white)
![Orchestration](https://img.shields.io/badge/Orchestration-Compose-orange?style=for-the-badge&logo=docker)
![Security](https://img.shields.io/badge/Security-Hardening-red?style=for-the-badge&logo=docker)

Welcome to my comprehensive Docker repository. This project is a fusion of deep theoretical research and hands-on industrial implementation. It documents the complete lifecycle of containerized applications—from kernel-level isolation to multi-service orchestration.

---

## 🏛️ Deep-Dive: Docker Engine & Architecture
Understanding how Docker interacts with the Linux Kernel is fundamental to my DevOps workflow.



* **Kernel Isolation:** Implementation of **Namespaces** (PID, Net, Mount) for complete process isolation.
* **Resource Management:** Utilizing **Cgroups** to enforce hardware limits (CPU, Memory, I/O).
* **Runtime Components:** Exploring the interaction between `dockerd`, `containerd`, and `runc`.
* **Storage Strategy:** Implementing **Volumes** for production persistence and **Bind Mounts** for rapid development.

---

## 🚀 Orchestrated Projects (Three-Tier Stacks)
I have built several real-world environments to demonstrate microservices communication:

### 🔹 [Nginx-Node-MariaDB Stack](./nginx-node-mariadb)
A robust **Production-Grade Architecture**.
* **Nginx:** Functions as a Reverse Proxy and Edge Gateway.
* **Node.js:** Handles backend business logic and API routing.
* **MariaDB:** Relational database with volume-backed persistence for student data.

### 🔹 [Nginx-Node-Express Setup](./nginx-node-express)
An optimized **Two-Tier Architecture**.
* Focuses on **Inter-container networking** and minimized image sizing using **Alpine-based** base images.

---

## 📂 Technical Directory Structure
```text
Docker/
├── nginx-node-mariadb/      # 3-Tier Enterprise Microservices
├── nginx-node-express/      # 2-Tier High-Performance Proxy-App
├── Architecture_Core.pdf    # Engine internals & Namespaces
├── Architecture_Core.pdf    # Engine internals & Namespaces
├── Container_Lifecycle.pdf  # Networking & State Management
├── Image_Optimization.pdf   # Multi-stage builds & .dockerignore
│── Security_Registry.pdf    # Non-root users & Vulnerability scans
└── README.md                # Master Documentation
```
---
## 🛠️ Advanced DevOps Competencies

- **Image Hardening:** Writing multi-stage Dockerfiles to reduce the attack surface and image footprint.
- **Service Discovery:** Utilizing Docker's internal DNS and user-defined bridge networks.
- **Resource Limiting:** Enforcing memory reservations and CPU quotas to prevent "noisy neighbor" issues.
- **Non-Root Execution:** Configuring containers to run as specific UID/GIDs for enhanced security.
---

## 🚀 Deployment Command Center
Launch any of the managed stacks with a single command:
```bash
# Clone the repository
git clone [https://github.com/danish-ali-droid/DevOps.git](https://github.com/danish-ali-droid/DevOps.git)

# Navigate to the target project
cd Docker/nginx-node-mariadb

# Deploy the infrastructure
sudo docker-compose up -d --build

# Inspect running services
sudo docker-compose ps
```
---
