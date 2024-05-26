import { useContext } from "react";
import Context from "../contexts/Context";
import Modal from "./Modal";

const Header = () => {
  const { count, modalVisible, setModalVisible } = useContext(Context);

  const userEnteryDataHandler = () => {
    setModalVisible(true);
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-teal-500 px-4 py-6 text-white">
      <h1 className="mb-2 text-3xl font-semibold">Student Manager</h1>
      <h3 className="text-lg">
        All Students: <span className="text-yellow-300">{count}</span>
      </h3>
      <button
        onClick={userEnteryDataHandler}
        className="mt-4 md:w-1/6 rounded bg-lime-600 px-4 py-2 font-bold text-white hover:bg-lime-700"
      >
        ADD NEW STUDENT
      </button>
      {modalVisible && <Modal />}
    </div>
  );
};

export default Header;
