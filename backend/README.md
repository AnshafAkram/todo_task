# Todo App Backend

This is the backend of a full-stack Todo application built using Java Spring Boot. It provides RESTful APIs for managing todo items and uses MySQL as the database. Hibernate is used for ORM and automatically handles table creation based on entity classes.

Features

* Create todos
* Read all todos
* Update todos
* Delete todos
* Toggle todo completion status
* RESTful API architecture
* Automatic table generation using Hibernate

Tech Stack

* Java
* Spring Boot
* Spring Data JPA
* Hibernate
* MySQL
* Maven

Project Structure

backend/
│── src/
│   ├── main/
│   │   ├── java/
│   │   │   ├── controller/
│   │   │   ├── service/
│   │   │   ├── repository/
│   │   │   └── model/
│   │   └── resources/
│   │       ├── application.properties
│   │
│── pom.xml
│── README.md

Database Setup

1. Install MySQL and create a database:

  CREATE DATABASE todo_db;

2. Hibernate will automatically create tables based on entity classes when the application runs.

3. No manual table creation or schema.sql file is required.

Configuration

Update src/main/resources/application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/todo_db
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true


API Endpoints

GET /api/todos
Returns all todos

POST /api/todos
Creates a new todo

PUT /api/todos/{id}
Updates a todo

PATCH /api/todos/{id}/done
Toggles completion status

DELETE /api/todos/{id}
Deletes a todo

Running the Application

1. Clone the repository
2. Navigate to backend folder
3. Configure MySQL database
4. Run the application using Maven:

mvn spring-boot:run

The backend will run on:
http://localhost:8080



Author

Full-stack Todo application project built for a task given as a part of reqruitement
