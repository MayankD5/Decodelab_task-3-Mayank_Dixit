const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "YOUR_PASSWORD",
    database: "student_management"
});

db.connect((err) => {
    if (err) {
        console.log("❌ Database Connection Failed");
        console.log(err);
        return;
    }

    console.log("✅ Connected to MySQL Database");
});

module.exports = db;