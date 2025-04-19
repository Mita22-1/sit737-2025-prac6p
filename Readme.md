# Node.js Calculator Microservice – SIT737 6.1P

This lightweight microservice is built using **Node.js** and **Express.js** for backend routing, with a simple **HTML/JavaScript** frontend interface. It performs basic calculator operations and can be containerised using Docker and deployed using Kubernetes.

## Prerequisites

- [Node.js (LTS version)](https://nodejs.org/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop) with Kubernetes enabled
- `kubectl` CLI installed and configured

## Setup Instructions

### 1. Clone the Repository
git clone https://github.com/Mita22-1/sit737-2025-prac5p.git
cd sit737-2025-prac5p

### 2. Install Dependencies: npm install

### 3. Build the Docker Image: docker build -t mitali/web_app:1.0 

### 4. Apply Kubernetes Manifests

Create and apply the following files:
deployment.yaml – defines the deployment
service.yaml – exposes the app via NodePort
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
