# 🎓 Student Management REST API

A RESTful API built using **Node.js** and **Express.js** to perform CRUD (Create, Read, Update, Delete) operations on student records.

---

## 📌 Features

- Get all students
- Get student by ID
- Add a new student
- Update existing student details
- Delete a student
- Input validation
- Proper HTTP status codes
- Modular project structure (Routes, Controllers, Data)

---

## 🛠 Tech Stack

- Node.js
- Express.js
- JavaScript
- Postman

---

## 📁 Project Structure

```text
student-rest-api/
│
├── controllers/
│   └── studentController.js
│
├── data/
│   └── students.js
│
├── routes/
│   └── students.js
│
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/MayankD5/student-management-rest-api.git
```

### Navigate to the project

```bash
cd student-management-rest-api
```

### Install dependencies

```bash
npm install
```

### Start the server

```bash
npm start
```

The server runs at:

```text
http://localhost:3000
```

---

## 📡 API Endpoints

### Home Route

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Welcome message |

### Student Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/students` | Get all students |
| GET | `/students/:id` | Get a student by ID |
| POST | `/students` | Add a new student |
| PUT | `/students/:id` | Update a student |
| DELETE | `/students/:id` | Delete a student |

---

## 📥 Sample Student JSON

```json
{
  "id": 1,
  "registrationNumber": "23CSE001",
  "name": "Mayank Dixit",
  "course": "B.Tech CSE",
  "semester": 6,
  "section": "A",
  "email": "mayank@example.com",
  "phone": "9876543210",
  "cgpa": 8.75
}
```

---

## ✅ Validation

The API validates the following required fields before creating a student:

- Registration Number
- Name
- Course
- Semester

If validation fails, the API returns:

```http
400 Bad Request
```

---

## 📬 Testing

All API endpoints were tested using **Postman**.

---

## 📁 Project Architecture

```
Client (Postman)
        │
        ▼
Express Routes
        │
        ▼
Controllers
        │
        ▼
Student Data
```

---

## 👨‍💻 Author

**Mayank Dixit**

Backend API Development Internship Project (Task 2)