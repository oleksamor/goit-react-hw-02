import { useState } from "react";
import "./App.css";
import Feedback from "./Components/Feedback/Feedback";
import Options from "./Components/Options/Options";

const App = () => {
  // const [reviewsType, setreviewsType] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>

      <Options />

      <Feedback />
    </>
  );
};

export default App;
