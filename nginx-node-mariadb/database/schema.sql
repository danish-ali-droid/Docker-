-- Create database
CREATE DATABASE IF NOT EXISTS student_db;
USE student_db;

-- Create students table
CREATE TABLE IF NOT EXISTS students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT NOT NULL,
    grade VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO students (name, email, age, grade) VALUES
('Danish', 'danish@gmail.com', 20, 'A'),
('Afaq', 'afaq@gmail.com', 22, 'B+'),
('Shahid', 'shahid@gmail.com', 21, 'A-');
