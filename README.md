# Todo API

## Overview
This is a Node.js-based API for managing todo items. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on todo items. Swagger UI is integrated for easy testing and visualization of the API endpoints.

---

## Getting Started

### Prerequisites
Make sure you have Node.js and npm installed on your machine.

### Installation
1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the API
To start the API, run:
```bash
npm run dev
```
The API will run on `http://localhost:3000`.

---

## Swagger UI
 I have used Swagger UI to help  interact with the API endpoints and test them. You can access the Swagger documentation at:
```
http://localhost:3000/todo/api
```

---

## API Endpoints

### 1. Create a Todo
- **Endpoint**: `/todo/posttodo`
- **Method**: `POST`
- **Description**: Create a new todo item.
- **Request Body**:
  ```json
  {
    "title": "Buy groceries",
    "description": "Milk, eggs, and bread."
  }
  ```
- **Responses**:
  - `201`: Todo created successfully.
  - `500`: Internal Server Error.

### 2. Retrieve All Todos
- **Endpoint**: `/todo/todos`
- **Method**: `GET`
- **Description**: Retrieve all todo items.
- **Responses**:
  - `200`: Todos retrieved successfully.
  - `500`: Internal Server Error.

### 3. Retrieve a Todo by ID
- **Endpoint**: `/todo/todo/{todoId}`
- **Method**: `GET`
- **Description**: Retrieve a specific todo by its ID.
- **Path Parameter**:
  - `todoId`: The ID of the todo to retrieve.
- **Responses**:
  - `200`: Todo retrieved successfully.
  - `404`: Todo not found.
  - `500`: Internal Server Error.

### 4. Update a Todo by ID
- **Endpoint**: `/todo/todo/{todoId}`
- **Method**: `PUT`
- **Description**: Update a specific todo by its ID.
- **Path Parameter**:
  - `todoId`: The ID of the todo to update.
- **Request Body**:
  ```json
  {
    "title": "Updated title",
    "description": "Updated description."
  }
  ```
- **Responses**:
  - `200`: Todo updated successfully.
  - `404`: Todo not found.
  - `500`: Internal Server Error.

### 5. Delete a Todo by ID
- **Endpoint**: `/todo/todo/{todoId}`
- **Method**: `DELETE`
- **Description**: Delete a specific todo by its ID.
- **Path Parameter**:
  - `todoId`: The ID of the todo to delete.
- **Responses**:
  - `200`: Todo deleted successfully.
  - `404`: Todo not found.
  - `500`: Internal Server Error.

---

## Features
- **CRUD Functionality**:
  - Create new todos.
  - Retrieve all todos or a specific todo by ID.
  - Update existing todos by ID.
  - Delete todos by ID.
- **Swagger UI Integration**: Test and visualize API endpoints seamlessly.

---

## License
This project is open-source and available under the [MIT License](LICENSE).

