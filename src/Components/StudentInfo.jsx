import React, { useState, useEffect } from "react";
import "./StudentInfo.css";
import StudentForm from "./StudentForm";

const StudentInfo = () => {
  const initialStudents = JSON.parse(localStorage.getItem("students")) || [];

  const [isOpen, setIsOpen] = useState(false);
  const [students, setStudents] = useState(initialStudents);
  const [count, setCount] = useState(initialStudents.length);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const increaseCount = () => {
    setIsOpen(true);
    setEditingIndex(null);
  };

  const addStudent = (student) => {
    if (!student.name || !student.number || !student.address) {
      alert("Please fill in all fields."); // Alert if any field is empty
      return;
    }
    if (editingIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents[editingIndex] = student;
      setStudents(updatedStudents);
      setEditingIndex(null);
    } else {
      setStudents([...students, student]);
      setCount(count + 1);
    }
    setIsOpen(false);
  };

  const deleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
    setCount(count - 1);
  };

  const editStudent = (index) => {
    const studentToEdit = students[index];
    setIsOpen(true);
    setEditingIndex(index);
  };

  return (
    <div className="container">
      <h1>Student Manager</h1>
      <p>All students: {count}</p>
      <div className="btn-container">
        <button onClick={increaseCount}>Add New Student</button>
      </div>

      <h2>All Students</h2>

      <StudentForm
        open={isOpen}
        onClose={() => setIsOpen(false)}
        addStudent={addStudent}
        editingIndex={editingIndex}
        students={students}
      />

      <ul className="student-list">
        {students.map((student, index) => (
          <li key={index} className="student-item">
            <div className="student-details">
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Number:</strong> {student.number}</p>
              <p><strong>Address:</strong> {student.address}</p>
            </div>
            <div className="student-buttons">
              <button onClick={() => deleteStudent(index)}>Delete</button>
              <button onClick={() => editStudent(index)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentInfo;
