import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const StudentCount = () => {
  const { students } = useContext(StudentContext);
  return <div className="student-count">Total Students: {students.length}</div>;
};

export default StudentCount;
