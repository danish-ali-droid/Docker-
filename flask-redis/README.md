# 🚀 Flask + Redis Counter

A high-performance, containerized web application that tracks page views using **Flask** for the backend and **Redis** as a blazing-fast in-memory data store. This project demonstrates a seamless integration between a Python microservice and a NoSQL database, all orchestrated with Docker.

---

##  Features

- **Real-time Counter**: Uses Redis `INCR` to handle concurrent hit counting efficiently.
- **Dockerized Architecture**: Simplified deployment using multi-container orchestration.
- **Microservices Design**: Decoupled web and database layers for better scalability.
- **Dynamic Content**: Flask-powered HTML rendering for hit display.

---

##  Tech Stack

- **Frontend/Backend**: [Flask](https://flask.palletsprojects.com/) (Python)
- **Database**: [Redis](https://redis.io/)
- **Infrastructure**: [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)

---

##  Getting Started

Follow these steps to get the project up and running on your local machine.

### 1. Clone the repository
First, clone the project to your local environment:

```bash
git clone https://github.com/your-username/flask-redis.git
```

### 2. Navigate to the project directory
Change into the project folder:

```bash
cd flask-redis
```

### 3. Build and Start the Containers
Use Docker Compose to build the application and start the services (Flask & Redis):

```bash
docker compose up --build
```

### 4. Access the Application
Once the containers are running, open your browser and navigate to:

```bash
http://localhost:5000
```

---

##  Architecture Overview

The system consists of two main services:

1.  **Web Service (`web`)**:
    - Built using a Python 3.10-slim image.
    - Connects to the Redis container using the hostname `redis`.
    - Serves the main application on port `5000`.

2.  **Redis Service (`redis`)**:
    - Uses the official `redis` image.
    - Persists data in-memory for lightning-fast operations.
    - Exposed on port `6379`.

---

## 📂 Project Structure

```text
.
├── assets/             # Project media (banners, etc.)
├── app.py              # Main Flask application logic
├── Dockerfile          # Instructions to build the web image
├── compose.yaml        # Docker Compose configuration
└── requirements.txt    # Python dependencies
```

---

##  Stopping the Application

To stop the services and remove the containers, run:

```bash
docker compose down
```

---

