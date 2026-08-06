const db = require("../config/db");


// GET All Students

const getAllStudents = (req, res) => {

    const sql = "SELECT * FROM students";

    db.query(sql, (err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error",
                error: err.message
            });
        }

        res.json(results);

    });

};


// GET Student by ID

const getStudentById = (req, res) => {

    const studentId = req.params.id;

    const sql = "SELECT * FROM students WHERE id = ?";

    db.query(sql, [studentId], (err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error",
                error: err.message
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(results[0]);

    });

};


// POST Add Student

const addStudent = (req, res) => {

    const {
        registrationNumber,
        name,
        course,
        semester,
        section,
        email,
        phone,
        cgpa
    } = req.body;

    // Validation
    if (!registrationNumber || !name || !course || !semester) {
        return res.status(400).json({
            message: "Registration Number, Name, Course and Semester are required."
        });
    }

    const sql = `
        INSERT INTO students
        (registration_number, name, course, semester, section, email, phone, cgpa)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            registrationNumber,
            name,
            course,
            semester,
            section,
            email,
            phone,
            cgpa
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Database Error",
                    error: err.message
                });
            }

            res.status(201).json({
                message: "Student added successfully",
                studentId: result.insertId
            });

        }
    );

};


// PUT Update Student

const updateStudent = (req, res) => {

    const studentId = req.params.id;

    const {
        registrationNumber,
        name,
        course,
        semester,
        section,
        email,
        phone,
        cgpa
    } = req.body;

    const sql = `
        UPDATE students
        SET
            registration_number = ?,
            name = ?,
            course = ?,
            semester = ?,
            section = ?,
            email = ?,
            phone = ?,
            cgpa = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [
            registrationNumber,
            name,
            course,
            semester,
            section,
            email,
            phone,
            cgpa,
            studentId
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Database Error",
                    error: err.message
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    message: "Student not found"
                });
            }

            res.json({
                message: "Student updated successfully"
            });

        }
    );

};


// DELETE Student

const deleteStudent = (req, res) => {

    const studentId = req.params.id;

    const sql = "DELETE FROM students WHERE id = ?";

    db.query(sql, [studentId], (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error",
                error: err.message
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json({
            message: "Student deleted successfully"
        });

    });

};


// Export Controllers

module.exports = {
    getAllStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
};