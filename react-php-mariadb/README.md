# Three-Tier Full Stack Application (React-PHP-MariaDB)

This project demonstrates a containerized three-tier architecture using **Docker Compose**. It separates the frontend, backend, and database into distinct services, ensuring scalability and ease of deployment.

##  Architecture Overview

The application is divided into three logical layers:

-  **Presentation Tier (Frontend):** A **React** application that provides the user interface.
-  **Application Tier (Backend):** A **PHP** API that handles the business logic and communicates with the database.
-  **Data Tier (Database):** A **MariaDB** instance that stores and manages application data.
---
## .env
 For your React-PHP-MariaDB setup, you typically need variables for the database connection and API URLs.
```bash
# Database Configuration
DB_HOST=db
DB_NAME=myapp_db
DB_USER=admin
DB_PASSWORD=secret_password_123
DB_ROOT_PASSWORD=super_secret_root

# Backend API Configuration
API_PORT=8000
DEBUG=true

# Frontend Configuration
REACT_APP_API_URL=http://localhost:8000
```
---
##  Project Structure

```text
react-php-mariadb/
├── frontend/             # React.js source code
│   └── Dockerfile        # Frontend container instructions
├── backend/              # PHP source code (API)
│   └── Dockerfile        # Backend container instructions
├── database/             # Database initialization scripts
│   └── init.sql          # SQL script to setup initial tables/data
└── docker-compose.yml    # Orchestration file for all services
```
---
#  Getting Started 
### Prerequisites
- Docker installed.
- Docker Compose installed.
##  Installation & Deployment
### Clone the repository:
```bash
git clone [https://github.com/danish-ali-droid/Docker-.git](https://github.com/danish-ali-droid/Docker-.git)
cd Docker-/react-php-mariadb
```
### Build and start the containers:
```bash
docker compose up -d --build
```
### Verify the services:

- **Frontend:** Open your browser and go to http://localhost:3000
- **Backend API:** Access via http://localhost:8000
- **Database:** Runs on the internal network on port 3306
---

## Service Configuration
### Frontend (React)
The frontend is built using Node and served (typically) via a lightweight server like Nginx or the React development server. It sends HTTP requests to the PHP backend.
### Backend (PHP)
The backend service processes logic and connects to MariaDB.
- **Environment Variables:** Configured in docker-compose.yml to securely pass database credentials.
### Database (MariaDB)
A persistent volume is used to ensure data is not lost when the container is stopped
- **Initialization:** The database/init.sql script runs automatically the first time the container is created to set up your schema.
---
## Useful Commands
- **View Logs:** docker compose logs -f
- **Stop Services:** docker compose down
- **Access Backend Container:** docker compose exec backend bash
- **Access Database:** docker compose exec db mariadb -u user -p
---
