const express = require("express");
const router = express.Router();

const {
    getAllStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");

// GET All Students
router.get("/", getAllStudents);

// GET Student by ID
router.get("/:id", getStudentById);

// POST Add Student
router.post("/", addStudent);

// PUT Update Student
router.put("/:id", updateStudent);

// DELETE Student
router.delete("/:id", deleteStudent);

module.exports = router;