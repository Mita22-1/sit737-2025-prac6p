# SIT737-2025 Prac 5.1P – Containerized Calculator Microservice

This project demonstrates containerising a Node.js calculator microservice using Docker, 
with health monitoring and automatic restart capabilities. It provides a web-based UI for 
entering numbers and selecting operations, and logs all user activity using Winston.

---

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Node.js](https://nodejs.org/) (for local development & testing)
- [Git](https://git-scm.com/) (for cloning the repo)

---

## Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Mita22-1/sit737-2025-prac5p.git
cd sit737-2025-prac5p

---

## Run the app using docker compose

```bash
docker-compose up --build

---

## Open app on browser

http://localhost:3111

---

## Health Check

```bash 
GET http://localhost:3111/health

---

## Project Structure

```bash 
├── Dockerfile               # Image configuration
├── docker-compose.yml       # Service and healthcheck
├── server.js                # Backend with Winston logging
├── calculator.html          # Frontend (served via Express)
├── package.json             # Node dependencies
├── server.log               # Logging file output
├── README.md                # Project documentation

---

## Developed By:

Mitali Kaur
SIT737 Cloud Native Application Development
T1, 2025
Deakin University