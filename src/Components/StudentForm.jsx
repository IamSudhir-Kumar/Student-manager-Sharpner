import React, { useState, useEffect, useRef } from "react";
import "./StudentForm.css";

const StudentForm = ({ open, onClose, addStudent, editingIndex, students }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef(null);

  useEffect(() => {
    if (editingIndex !== null) {
      const studentToEdit = students[editingIndex];
      setName(studentToEdit.name);
      setNumber(studentToEdit.number);
      setAddress(studentToEdit.address);
    }
  }, [editingIndex, students]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number || !address) {
      setErrorMessage("All fields are required");
      return;
    }
    const newStudent = { name, number, address };
    addStudent(newStudent);
    setName("");
    setNumber("");
    setAddress("");
    setErrorMessage("");
    onClose();
  };

  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal" ref={formRef}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="number">Number</label>
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit">
              {editingIndex !== null ? "Update" : "Save"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
