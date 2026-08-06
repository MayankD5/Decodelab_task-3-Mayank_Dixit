# Student Management REST API

This is a simple REST API built using **Node.js**, **Express.js**, and **MySQL** as part of my Backend API Development internship.

The project demonstrates how to build CRUD APIs that interact with a MySQL database instead of using in-memory data.

---

## Features

- View all students
- View a student by ID
- Add a new student
- Update student details
- Delete a student
- Basic request validation
- MySQL database integration
- RESTful API design

---

## Tech Stack

- Node.js
- Express.js
- MySQL
- mysql2
- Postman

---

## Project Structure

```
.
├── config
│   └── db.js
├── controllers
│   └── studentController.js
├── routes
│   └── students.js
├── app.js
├── package.json
└── README.md
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/MayankD5/Decodelab_task-3-Mayank_Dixit.git
```

### Move into the project

```bash
cd Decodelab_task-3-Mayank_Dixit
```

### Install dependencies

```bash
npm install
```

---

## Database Setup

Create a database named:

```sql
student_management
```

Create the `students` table:

```sql
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    registration_number VARCHAR(20) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    course VARCHAR(100) NOT NULL,
    semester INT NOT NULL,
    section CHAR(1),
    email VARCHAR(100),
    phone VARCHAR(15),
    cgpa DECIMAL(3,2)
);
```

Update your MySQL credentials inside:

```
config/db.js
```

Example:

```javascript
host: "localhost",
user: "root",
password: "your_password",
database: "student_management"
```

---

## Run the Project

```bash
npm start
```

Server starts at:

```
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/students` | Get all students |
| GET | `/students/:id` | Get a student by ID |
| POST | `/students` | Add a new student |
| PUT | `/students/:id` | Update a student |
| DELETE | `/students/:id` | Delete a student |

---

## Sample Request

```json
{
  "registrationNumber": "23CSE004",
  "name": "Aman Verma",
  "course": "B.Tech CSE",
  "semester": 6,
  "section": "A",
  "email": "aman@example.com",
  "phone": "9876543213",
  "cgpa": 8.95
}
```

---

## Validation

The API checks that these fields are provided before inserting a student:

- Registration Number
- Name
- Course
- Semester

If any required field is missing, the API returns **400 Bad Request**.

---

## Testing

The API was tested using Postman.

The following operations were verified:

- Get all students
- Get student by ID
- Add student
- Update student
- Delete student

---

## About

This project was developed as **Task 3** during my Backend API Development Internship to understand how Express APIs interact with a MySQL database using SQL queries.

---

## Author

**Mayank Dixit**