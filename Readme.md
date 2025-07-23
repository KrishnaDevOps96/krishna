# Task Service

A simple Node.js microservice for managing tasks. Great for learning DevOps, Docker, and AWS deployment.

## Endpoints

- `GET /` – Health check
- `GET /tasks` – List all tasks
- `POST /tasks` – Create a task `{ "title": "Do laundry" }`
- `PUT /tasks/:id` – Update a task
- `DELETE /tasks/:id` – Delete a task

## Run Locally

```bash
npm install
npm start
