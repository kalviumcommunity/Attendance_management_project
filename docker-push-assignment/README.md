# My Dockerized Node.js Application

This project is a simple Node.js (Express.js) application designed to demonstrate Dockerization and preparation for production deployment.

## Features

- Simple REST API (`/api/users`)
- Static file serving (`/`)
- Health check endpoint (`/health`)
- Optimized Dockerfile for production
- `docker-compose.yml` for production setup
- `.env` file management for secrets

## Getting Started

### Prerequisites

- Node.js and npm (for local development)
- Docker and Docker Compose

### Local Development

1.  Clone the repository:
    `git clone <repository-url>`
    `cd my-app`
2.  Install dependencies:
    `npm install`
3.  Create a `.env.development` file based on `.env.development.example` (if you had one, otherwise refer to the content provided above).
4.  Run the application in development mode (requires `nodemon`):
    `npm run dev`
    The app will typically run on `http://localhost:3001`.

### Dockerized Local Development (using docker-compose.yml with a dev profile)

_(If you had a separate `docker-compose.dev.yml`)_

### Production Deployment Preparation

Follow the steps outlined in the assignment to build, tag, push, and test the production-ready Docker image.

## API Endpoints

- `GET /api` - Welcome message
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create a new user (requires JSON body: `{ "name": "...", "email": "..." }`)
- `PUT /api/users/:id` - Update a user (requires JSON body: `{ "name": "...", "email": "..." }`)
- `DELETE /api/users/:id` - Delete a user
- `GET /health` - Health check

---
