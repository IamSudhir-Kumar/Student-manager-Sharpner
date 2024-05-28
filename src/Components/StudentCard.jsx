import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const StudentCard = ({ student, setStudentToEdit }) => {
  const { deleteStudent } = useContext(StudentContext);

  return (
    <div className="student-card">
      <div>
        <h2>{student.name}</h2>
        <p>{student.phone}</p>
        <p>{student.address}</p>
      </div>
      <div>
        <button onClick={() => setStudentToEdit(student)} className="bg-yellow">Edit</button>
        <button onClick={() => deleteStudent(student.id)} className="bg-red">Delete</button>
      </div>
    </div>
  );
};

export default StudentCard;
