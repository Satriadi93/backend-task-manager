# Backend Task Manager

Backend Task Manager is an application that uses **Docker**, **Apollo Server**, and **GraphQL** to manage tasks. This app supports **CRUD** operations to manage tasks, along with **register** and **login** functionality for users.

## Features

- **User Register and Login**: Users can create an account and log in to access the app.
- **Task CRUD**: Users can create, read, update, and delete tasks.
- **Apollo Server with GraphQL**: Uses Apollo Server for GraphQL API.
- **Dockerized**: This app runs inside Docker.

## Technologies

- **Docker**
- **Apollo Server**
- **MySQL**
- **GraphQL**
- **Sequelize**

## Installation

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/Satriadi93/backend-task-manager.git
cd server
```
## 2. Run with Docker
Make sure you have Docker installed on your system. Then, run the following command to build and run the Docker containers:

```bash
docker-compose up --build
```
## 3. Configuration
Make sure the .env file is configured correctly (for example, to set up the database connection and app port).

.env Example:

```bash
DB_HOST=db_host
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=task_manager
PORT=3000
```

### 4. GraphQL API
Once the application is running, you can access the GraphQL Playground at http://localhost:3000/ to test the API.

#### Endpoints
* Register:
```bash
mutation {
  register(username: "username", password: "password") {
    id
    username
  }
}
```
* Login:
```bash
mutation {
  login(username: "username", password: "password")
}
```
After logging in, you will receive a token. This token is used as the *Authentication* header: `Bearer <token>` to access the application's CRUD functionality.
#### Task CRUD Operations:
* Create Task:
```bash
mutation {
  createTask(title: "Task Title", task_duedate: "2025-01-01", task_status: "Pending", description: "Task Description") {
    message
  }
}
```
* Get All Tasks:
```bash
query {
  tasks {
    task_id
    title
    task_duedate
    task_status
    description
  }
}
```
* Get Task by ID:
```bash
query {
  task(task_id: "task-id") {
    task_id
    title
    task_duedate
    task_status
    description
  }
}
```
* Update Task:
```bash
mutation {
  updateTask(task_id: "task-id", title: "Updated Task Title", task_duedate: "2025-02-01", task_status: "In Progress", description: "Updated Description") {
    message
  }
}
```
* Delete Task:
```bash
mutation {
  deleteTask(task_id: "task-id") {
    message
  }
}
```


