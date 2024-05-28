import React, { useState } from 'react';
import { StudentProvider, StudentContext } from './context/StudentContext';
import StudentForm from './components/StudentForm';
import StudentCard from './components/StudentCard';
import StudentCount from './components/StudentCount';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [studentToEdit, setStudentToEdit] = useState(null);

  const openModal = () => {
    setStudentToEdit(null);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleEdit = (student) => {
    setStudentToEdit(student);
    setModalIsOpen(true);
  };

  return (
    <StudentProvider>
      <div className="container">
        <h1>Student Manager</h1>
        <button onClick={openModal} className="bg-blue mb-4">Add Student</button>
        <StudentCount />
        <StudentList setStudentToEdit={handleEdit} />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Student Form"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <StudentForm studentToEdit={studentToEdit} setStudentToEdit={setStudentToEdit} closeModal={closeModal} />
        </Modal>
      </div>
    </StudentProvider>
  );
};

const StudentList = ({ setStudentToEdit }) => {
  const { students } = React.useContext(StudentContext);

  return (
    <div>
      {students.map(student => (
        <StudentCard key={student.id} student={student} setStudentToEdit={setStudentToEdit} />
      ))}
    </div>
  );
};

export default App;
