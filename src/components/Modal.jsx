import { createPortal } from "react-dom";
import { useContext, useState } from "react";
import Context from "../contexts/Context";

const mountedElement = document.getElementById("portal");

const Modal = () => {
  const { setModalVisible, setCount, count, setUserName, setNumber, setAddres } = useContext(Context);
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [address, setAddress] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const numHandler = (event) => {
    setNum(event.target.value);
  };

  const addressHandler = (event) => {
    setAddress(event.target.value);
  };

  const modalCloseHandler = () => {
    setModalVisible(false);
  };

  const addEnteredHandler = () => {
    setAddres(address);
    setNumber(num);
    setUserName(name);
    setCount(count + 1);
    modalCloseHandler();
    setNum("");
    setAddress("");
    setName("");
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg transform transition-all">
        <div className="p-4">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Add New Information</h2>
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-700">Name:</label>
            <input
              value={name}
              onChange={nameHandler}
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-700">Mobile:</label>
            <input
              value={num}
              onChange={numHandler}
              type="number"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter mobile number"
            />
          </div>
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-700">Address:</label>
            <input
              value={address}
              onChange={addressHandler}
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter address"
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              onClick={addEnteredHandler}
              className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
            >
              Add
            </button>
            <button
              onClick={modalCloseHandler}
              className="rounded-lg bg-gray-400 px-5 py-2 text-sm font-medium text-gray-800 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    mountedElement
  );
};

export default Modal;
