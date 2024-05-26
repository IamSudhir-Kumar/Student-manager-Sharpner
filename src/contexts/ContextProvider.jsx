import { useState } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [number, setNumber] = useState("");
  const [addres, setAddres] = useState("");

  const value = {
    count,
    setCount,
    modalVisible,
    setModalVisible,
    userName,
    number,
    addres,
    setAddres,
    setNumber,
    setUserName
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
