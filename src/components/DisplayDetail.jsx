import React, { useContext, useState, useEffect } from "react";
import Context from "../contexts/Context";

const DisplayDetail = () => {
  const { userName, number, addres, count, setCount, setModalVisible } =
    useContext(Context);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (userName && number && addres) {
      setUserData((prev) => [
        ...prev,
        { name: userName, number: number, address: addres },
      ]);
    }
  }, [userName, number, addres]);

  const handleEdit = (index) => {
    handleDelete(index);
    setModalVisible(true);
  };

  const handleDelete = (index) => {
    const updatedUserData = [...userData];
    updatedUserData.splice(index, 1);
    setUserData(updatedUserData);
    setCount(count - 1);
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="mb-8 text-4xl font-extrabold text-center text-gray-800">All Students</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {userData.map((user, index) => (
          <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Name: {user.name}</h3>
            <p className="mb-1 text-gray-600">Number: {user.number}</p>
            <p className="text-gray-600">Address: {user.address}</p>
            <div className="mt-4 flex justify-between">
              <button
                className="rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 transition-colors duration-300"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="rounded bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700 transition-colors duration-300"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayDetail;
