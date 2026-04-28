# 🚀 My Django Project

<div align="center">

![Django](https://img.shields.io/badge/Django-6.0.4-092E20?style=for-the-badge&logo=django)
![Python](https://img.shields.io/badge/Python-3.12-3776AB?style=for-the-badge&logo=python)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A modern, containerized Django application built with best practices**

[Features](#-features) • [Quick Start](#-quick-start) • [Installation](#-installation) • [Docker Setup](#-docker-setup) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Docker Setup](#-docker-setup)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [API Endpoints](#-api-endpoints)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 About

A professional Django web application containerized with Docker for seamless deployment and development. This project demonstrates modern Python web development practices with Django 6.0.4, including Docker support, environment configuration, and scalable architecture.

---

## ✨ Features

- ✅ **Django 6.0.4** - Latest LTS version of Django web framework
- 🐳 **Docker Ready** - Complete Docker configuration for containerized deployment
- 🔐 **Django Admin** - Built-in admin interface for content management
- 📱 **Responsive** - Designed for desktop and mobile access
- 🛡️ **Security Features** - CSRF protection, authentication, and session management
- 📊 **Database Agnostic** - Easy to configure with any Django-supported database
- 🎨 **Static Files** - Configured static file management system
- 🔧 **Production Ready** - Includes production configuration guidelines

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Python** | 3.12 | Programming Language |
| **Django** | 6.0.4 | Web Framework |
| **asgiref** | 3.11.1 | ASGI utilities |
| **sqlparse** | 0.5.5 | SQL parser |
| **Docker** | Latest | Containerization |

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Python** 3.12 or higher
- **pip** (Python package manager)
- **Docker** & **Docker Compose** (optional, for containerized deployment)
- **Git** (for version control)

### System Requirements

- **OS**: Linux, macOS, or Windows (with WSL2)
- **RAM**: Minimum 2GB
- **Storage**: Minimum 500MB free space

---

## 💾 Installation

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/yourusername/my-django-project.git
cd my-django-project
\`\`\`

### 2. Create Virtual Environment

\`\`\`bash
# Create virtual environment
python3.12 -m venv venv

# Activate virtual environment
# On Linux/macOS:
source venv/bin/activate
# On Windows:
venv\Scripts\activate
\`\`\`

### 3. Install Dependencies

\`\`\`bash
pip install --upgrade pip
pip install -r requirments.txt
\`\`\`

> **Note**: Fix the typo in requirements file name (currently \`requirments.txt\`, should be \`requirements.txt\`)

### 4. Run Migrations

\`\`\`bash
python manage.py migrate
\`\`\`

### 5. Create Superuser (Optional)

\`\`\`bash
python manage.py createsuperuser
\`\`\`

Follow the prompts to create an admin account.

---

## 🚀 Quick Start

### Start Development Server

\`\`\`bash
python manage.py runserver
\`\`\`

The application will be available at:
- **Local**: \`http://localhost:8000\`
- **Network**: \`http://127.0.0.1:8000\`

### Access Django Admin

Navigate to \`http://localhost:8000/admin\` and log in with your superuser credentials.

---

## 🐳 Docker Setup

### Prerequisites for Docker

- Docker installed on your system
- Docker Compose (optional, for multi-container setup)

### Build and Run with Docker

#### 1. Build Docker Image

\`\`\`bash
docker build -t my-django-project:latest .
\`\`\`

#### 2. Run Docker Container

\`\`\`bash
docker run -p 8000:8000 my-django-project:latest
\`\`\`

#### Using Docker Compose (Recommended)

Create a \`docker-compose.yml\` file:

\`\`\`yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DEBUG=1
      - ALLOWED_HOSTS=localhost,127.0.0.1,0.0.0.0
    volumes:
      - .:/app
    command: python manage.py runserver 0.0.0.0:8000
\`\`\`

Then run:

\`\`\`bash
docker-compose up -d
\`\`\`

### Useful Docker Commands

\`\`\`bash
# View running containers
docker ps

# View container logs
docker logs <container_id>

# Execute command in container
docker exec -it <container_id> python manage.py shell

# Stop container
docker stop <container_id>

# Remove container
docker rm <container_id>
\`\`\`

---

## 📂 Project Structure

\`\`\`
my-django-project/
├── core/                       # Main Django application
│   ├── __init__.py
│   ├── asgi.py                 # ASGI configuration
│   ├── wsgi.py                 # WSGI configuration
│   ├── settings.py             # Django settings
│   ├── urls.py                 # URL routing configuration
│   └── manage.py               # Django management script
├── venv/                       # Python virtual environment
├── Dockerfile                  # Docker configuration
├── requirments.txt             # Python dependencies
└── README.md                   # This file
\`\`\`

---

## ⚙️ Configuration

### Django Settings

Edit \`core/settings.py\` to customize:

\`\`\`python
# Allowed hosts
ALLOWED_HOSTS = ['192.168.11.114', 'localhost', '127.0.0.1']

# Debug mode (disable in production!)
DEBUG = True

# Database configuration
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# Static files
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
\`\`\`

### Environment Variables

Create a \`.env\` file in the project root:

\`\`\`env
DEBUG=False
SECRET_KEY=your-secret-key-here
ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com
DATABASE_URL=postgresql://user:password@localhost/dbname
\`\`\`

---

## 🔌 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| \`/admin/\` | GET | Django admin interface |
| \`/api/\` | GET | API root (if configured) |

> **Note**: Add your custom API endpoints as you develop the application

---

## 🐛 Troubleshooting

### Issue: Port 8000 already in use

\`\`\`bash
# Kill process using port 8000
# On Linux/macOS:
lsof -ti:8000 | xargs kill -9

# On Windows:
netstat -ano | findstr :8000
taskkill /PID <PID> /F
\`\`\`

### Issue: Module not found errors

\`\`\`bash
# Reinstall dependencies
pip install --no-cache-dir -r requirments.txt
\`\`\`

### Issue: Database migration errors

\`\`\`bash
# Reset migrations
python manage.py migrate --fake-initial

# Recreate database
rm db.sqlite3
python manage.py migrate
\`\`\`

### Issue: Static files not loading

\`\`\`bash
# Collect static files
python manage.py collectstatic --noinput
\`\`\`

---



## 🙏 Acknowledgments

- [Django Documentation](https://docs.djangoproject.com/)
- [Docker Documentation](https://docs.docker.com/)
- [Python Official Documentation](https://docs.python.org/)

---

<div align="center">


</div>
