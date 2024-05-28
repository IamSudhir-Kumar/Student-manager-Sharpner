import React, { useState, useContext, useEffect } from 'react';
import { StudentContext } from '../context/StudentContext';

const StudentForm = ({ studentToEdit, setStudentToEdit, closeModal }) => {
  const { addStudent, editStudent } = useContext(StudentContext);
  const [student, setStudent] = useState({ id: null, name: '', phone: '', address: '' });

  useEffect(() => {
    if (studentToEdit) {
      setStudent(studentToEdit);
    }
  }, [studentToEdit]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.id) {
      editStudent(student);
      setStudentToEdit(null);
    } else {
      addStudent({ ...student, id: Date.now() });
    }
    closeModal();
    setStudent({ id: null, name: '', phone: '', address: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="phone" value={student.phone} onChange={handleChange} placeholder="Phone Number" required />
      <input type="text" name="address" value={student.address} onChange={handleChange} placeholder="Address" required />
      <div className="flex justify-end">
        <button type="button" onClick={closeModal} className="bg-gray mr-2">Cancel</button>
        <button type="submit" className="bg-blue">{student.id ? 'Edit' : 'Add'} Student</button>
      </div>
    </form>
  );
};

export default StudentForm;
