# Todo App Frontend

This is the frontend of a full-stack Todo application built using React and Tailwind CSS. It provides a user interface to create, update, delete, and manage tasks by interacting with a backend API.

Features

* Add new todos
* Edit existing todos
* Delete todos
* Toggle completion status (Done / Pending)
* Filter todos (All / Completed / Pending)
* Responsive user interface

Tech Stack

* React
* Tailwind CSS
* Axios

Project Structure

frontend/
│── src/
│   ├── components/
│   │   ├── TodoForm.js
│   │   ├── TodoItem.js
│   │   └── TodoList.js
│   ├── api.js
│   ├── App.js
│   └── index.js
│
│── package.json
│── README.md

Installation and Setup

1. Clone the repository

  git clone [https://github.com/YOUR_USERNAME/YOUR_REPO.git](https://github.com/AnshafAkram/todo_task.git)

2. Navigate to the frontend folder

  cd frontend

3. Install dependencies

  npm install

4. Run the application

  npm start
  The application will run on [http://localhost:3000](http://localhost:3000)

API Configuration

  Ensure the backend server is running. Update the API base URL in src/api.js if needed.

Example configuration:

import axios from "axios";
export default axios.create({
baseURL: "[http://localhost:8080](http://localhost:8080)"
});


Author
Developed as part of a full-stack Todo application project.


