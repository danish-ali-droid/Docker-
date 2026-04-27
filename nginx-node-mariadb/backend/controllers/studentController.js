const Student = require('../models/studentModel');

// Get all students
exports.getAllStudents = (req, res) => {
    Student.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Get student by ID
exports.getStudentById = (req, res) => {
    const { id } = req.params;
    Student.getById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(results[0]);
    });
};

// Create student
exports.createStudent = (req, res) => {
    const { name, email, age, grade } = req.body;
    
    // Validation
    if (!name || !email || !age) {
        return res.status(400).json({ message: 'Name, email, and age are required' });
    }

    Student.create({ name, email, age, grade }, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ 
            message: 'Student created successfully',
            studentId: result.insertId 
        });
    });
};

// Update student
exports.updateStudent = (req, res) => {
    const { id } = req.params;
    const { name, email, age, grade } = req.body;

    Student.update(id, { name, email, age, grade }, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student updated successfully' });
    });
};

// Delete student
exports.deleteStudent = (req, res) => {
    const { id } = req.params;
    
    Student.delete(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully' });
    });
};
