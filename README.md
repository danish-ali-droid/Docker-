# 🐳 Docker 
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Compose](https://img.shields.io/badge/docker--compose-%2315AABF.svg?style=for-the-badge&logo=docker&logoColor=white)
![Containers](https://img.shields.io/badge/containers-%23000000.svg?style=for-the-badge&logo=containers&logoColor=white)

A practical Docker workspace covering the fundamentals of containers, Docker architecture, installation, and example project stacks.

---

## 🧠 What is Docker?
Docker is a platform for building, shipping, and running applications inside lightweight containers.

- It packages an application and its dependencies together.
- It isolates the application from the host environment.
- It makes deployment predictable across different machines.

---

## 🧱 What is a Docker image?
A Docker image is a read-only template containing the application code, runtime, libraries, and settings needed to create a container.

- Images are built from `Dockerfile` instructions.
- Images are stored in registries like Docker Hub.
- Containers are launched from images.

---

## 📦 What is containerization?
Containerization is the process of running applications in isolated user-space instances called containers.

- Containers share the host OS kernel.
- Containers bundle application dependencies in a portable package.
- Containers start faster and use fewer resources than virtual machines.

---

## 🆚 Virtual Machines vs Containers
### Virtual Machines
- Run a full guest OS inside a hypervisor.
- Include a full kernel, system libraries, and user space.
- Use more CPU, memory, and storage.
- Common for fully isolated OS environments.

### Containers
- Share the host kernel.
- Include only the application and its dependencies.
- Start very quickly.
- Use far fewer resources.

### In short
- VMs virtualize hardware.
- Containers virtualize the operating system.
- Containers are lighter and faster, while VMs provide stronger isolation at the cost of overhead.

---

## 🏛️ Docker Architecture
Docker follows a client-server model with these core components:

### Docker Client
- The command-line interface (`docker`) used by developers.
- Sends requests to the Docker daemon.

### Docker Daemon
- The background service (`dockerd`) that builds, runs, and manages containers.
- Handles image creation, container lifecycle, networking, and storage.

### Docker Registry
- A service to store and distribute Docker images.
- Public registries: Docker Hub.
- Private registries: self-hosted or cloud-hosted registry services.

---

## 🛠️ How to install Docker
### Linux (Ubuntu / Debian)
```bash
sudo apt update
sudo apt install -y ca-certificates curl gnupg lsb-release
```
```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmour -o /usr/share/keyrings/docker-archive-keyring.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```
```bash
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
```
### Start and Enable Service
```bash
sudo systemctl start docker 
sudo systemctl enable docker
 # Or
sudo systemctl enable --now docker
```
#### Verify servcie 
```bash
 sudo systemctl status docker
```
### Verify installation
```bash
docker version
docker run --rm hello-world
```

> If you are using another Linux distribution, follow the official Docker installation guide at https://docs.docker.com/get-docker/

---

## 📌 Project overview
This repository contains multiple Docker examples and Docker-related learning assets.

### Included example projects
- `nginx-node-mariadb/` — three-tier stack with Nginx, Node.js, and MariaDB.
- `nginx-node-express/` — two-tier Nginx + Node.js Express proxy app.
- `nginx-node-redis-postgres/` — extended stack with Redis and PostgreSQL.
- `flask-redis/` — Flask app with Redis integration.
- `Lamp-Stack-project/` — classic LAMP stack example.
- `my-dijengo-project/` — Django application project.

### Learning resources
- `Docker Architecture & Core.pdf`
- `Docker Container Lifecycle & Networking.pdf`
- `Docker Image Management & Optimization.pdf`
- `Docker Orchestration & Composition.pdf`
- `Docker Security & Registry.pdf`
- `Docker Storage & Data Persistence.pdf`

---

## ▶️ How to run a sample stack
### Example: `nginx-node-mariadb`
```bash
cd nginx-node-mariadb
sudo docker compose up -d --build
sudo docker compose ps
```

### Example: `nginx-node-express`
```bash
cd nginx-node-express
sudo docker compose up -d --build
```

Open your browser at:
```text
http://localhost
```

---

## 📝 Notes
- Use `.env` files where provided to keep credentials secure.
- Inspect each `docker-compose.yml` for ports, networks, volumes, and service names.
- Use `sudo` or add your user to the `docker` group if needed.

