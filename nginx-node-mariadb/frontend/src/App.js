import React, { useState, useEffect } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import './App.css';

function App() {
    const [students, setStudents] = useState([]);
    const [editingStudent, setEditingStudent] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await fetch('http://localhost/api/students');
            const data = await response.json();
            setStudents(data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const handleAddStudent = () => {
        setEditingStudent(null);
        setShowForm(true);
    };

    const handleEditStudent = (student) => {
        setEditingStudent(student);
        setShowForm(true);
    };

    const handleDeleteStudent = async (id) => {
        if (window.confirm('Are you sure you want to delete this student?')) {
            try {
                await fetch(`http://localhost/api/students/${id}`, {
                    method: 'DELETE'
                });
                fetchStudents();
            } catch (error) {
                console.error('Error deleting student:', error);
            }
        }
    };

    const handleFormClose = () => {
        setShowForm(false);
        setEditingStudent(null);
        fetchStudents();
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Student Management System</h1>
                <button onClick={handleAddStudent} className="add-btn">
                    Add New Student
                </button>
            </header>
            <main>
                <StudentList 
                    students={students}
                    onEdit={handleEditStudent}
                    onDelete={handleDeleteStudent}
                />
                {showForm && (
                    <StudentForm 
                        student={editingStudent}
                        onClose={handleFormClose}
                    />
                )}
            </main>
        </div>
    );
}

export default App;
