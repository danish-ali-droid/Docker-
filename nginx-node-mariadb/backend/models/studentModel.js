
const db = require('../config/db');

class Student {
    // Get all students
    static getAll(callback) {
        const query = 'SELECT * FROM students ORDER BY id DESC';
        db.query(query, callback);
    }

    // Get student by ID
    static getById(id, callback) {
        const query = 'SELECT * FROM students WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Create new student
    static create(studentData, callback) {
        const { name, email, age, grade } = studentData;
        const query = 'INSERT INTO students (name, email, age, grade) VALUES (?, ?, ?, ?)';
        db.query(query, [name, email, age, grade], callback);
    }

    // Update student
    static update(id, studentData, callback) {
        const { name, email, age, grade } = studentData;
        const query = 'UPDATE students SET name = ?, email = ?, age = ?, grade = ? WHERE id = ?';
        db.query(query, [name, email, age, grade, id], callback);
    }

    // Delete student
    static delete(id, callback) {
        const query = 'DELETE FROM students WHERE id = ?';
        db.query(query, [id], callback);
    }
}

module.exports = Student;

