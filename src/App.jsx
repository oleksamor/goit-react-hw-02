import { useState } from "react";
import "./App.css";
import Description from "./Components/Description/Description";
import Feedback from "./Components/Feedback/Feedback";
import Options from "./Components/Options/Options";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Description />
      <Options />
      <Feedback />
    </>
  );
}

export default App;
