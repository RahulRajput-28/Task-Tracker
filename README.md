# Task Tracker

Task Tracker is a simple web application where we can manage our daily tasks.

We can add a task, edit it, delete it and change its status between pending and completed.

## Features

- Add task
- Edit task
- Delete task
- Change task status
- Filter tasks
- Responsive UI

## Tech Used

- React
- JavaScript
- CSS
- Node.js
- Express.js
- PostgreSQL

## Frontend

Frontend is made using React and Vite.

To run frontend:

```bash
cd frontend
npm install
npm run dev
```

## Backend

To run backend:

```bash
cd backend
npm install
npm run dev
```

## Database

I used PostgreSQL to store the tasks.

## API

-POST /api/tasks - Add a task
-GET /api/tasks - Get tasks
-PUT /api/tasks/:id - Edit a task
-PATCH /api/tasks/:id/status - Change task status
-DELETE /api/tasks/:id - Delete a task

## How it works

The frontend is made with React and the backend is made with Express.js.

React sends requests to the backend using API calls. The backend then performs the required operation in PostgreSQL and sends the result back to the frontend.

## Environment Variables

I have created .env file inside the backend folder and add my PostgreSQL database details before running the backend.

## Author

Rahul Rajput
