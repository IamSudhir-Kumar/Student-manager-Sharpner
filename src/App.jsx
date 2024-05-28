import { useState } from "react";
import StudentInfo from "./Components/StudentInfo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StudentInfo />
    </>
  );
}

export default App;
