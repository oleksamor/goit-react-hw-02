import { useState } from "react";

const Options = () => {
  const [counter, setCounter] = useState(0);

  const handleGoodClick = () => {
    setCounter(counter + 1);
  };
  const handleNeutralClick = () => {};
  const handleBadClick = () => {};
  const handleResetClick = () => {
    setCounter(0);
  };

  return (
    <div>
      <div>
        <h1>{counter}</h1>
      </div>

      <button onClick={handleGoodClick} className="btn">
        Good
      </button>
      <button onClick={handleNeutralClick} className="btn">
        Neutral
      </button>
      <button onClick={handleBadClick} className="btn">
        Bad
      </button>
      <button onClick={handleResetClick} className="btn">
        Reset
      </button>
    </div>
  );
};
export default Options;
