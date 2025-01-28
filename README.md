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
```
```bash
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
mutation Mutation($username: String!, $password: String!) {
  register(username: $username, password: $password) {
    message
  }
}
```
![image](https://github.com/user-attachments/assets/69f386b8-d6a3-405c-9836-f302dfedb820)
* Login:
```bash
mutation Mutation($username: String!, $password: String!) {
  login(username: $username, password: $password)
}
```
if invalid username or pw 
![image](https://github.com/user-attachments/assets/bc74efe5-2976-4a32-aae5-b221e16203b4)

After logging in, you will receive a token. This token is used as the *Authentication* header: `Bearer <token>` to access the application's CRUD functionality.
![image](https://github.com/user-attachments/assets/ce1bbfed-c71b-4002-b80c-15c406ab5a1f)

* Logout
  ```bash
  mutation Mutation {
    logout {
      message
    }
  }
  ```

#### Task CRUD Operations:
##### Before login
![image](https://github.com/user-attachments/assets/724cc177-6da1-43f0-becb-40a5e286d9eb)

##### After login
* Create Task:
```bash
mutation createTask($title: String!, $taskDuedate: String!, $taskStatus: String!, $description: String!) {
  createTask(title: $title, task_duedate: $taskDuedate, task_status: $taskStatus, description: $description) {
    message
  }
}
```
![image](https://github.com/user-attachments/assets/e8f1a635-1ae8-4ce7-b2d2-84df3a9943f9)

* Get All Tasks:
```bash
query getAllTask {
  getTasks {
    task_id
    title
    task_duedate
    description
    user_id
  }
}
```
* Get Task by ID:
```bash
query getTaskById($taskId: ID!) {
  getTaskDetail(task_id: $taskId) {
    task_id
    title
    task_duedate
    description
    user_id
  }
}
```
![image](https://github.com/user-attachments/assets/9bada9c8-fce8-4eb9-8ca2-5227dbc314b6)

* Update Task:
```bash
mutation {
  updateTask(task_id: "task-id", title: "Updated Task Title", task_duedate: "2025-02-01", task_status: "In Progress", description: "Updated Description") {
    message
  }
}
```
![image](https://github.com/user-attachments/assets/3efc54b6-e616-4467-887d-7adb640fde19)

* Delete Task:
```bash
mutation {
  deleteTask(task_id: "task-id") {
    message
  }
}
```
![image](https://github.com/user-attachments/assets/8bcc603a-280c-4613-be95-38c09aed566a)



