import { useState } from "react";

const Options = () => {
  const [counterGood, setCounterGood] = useState(0);
  const [counterBad, setCounterBad] = useState(0);
  const [counterNeutral, setCounterNeutral] = useState(0);

  const handleGoodClick = () => {
    setCounterGood(counterGood + 1);
  };
  const handleNeutralClick = () => {
    setCounterNeutral(counterNeutral + 1);
  };
  const handleBadClick = () => {
    setCounterBad(counterBad + 1);
  };
  const handleResetClick = () => {
    setCounterGood(0);
    setCounterBad(0);
    setCounterNeutral(0);
  };

  return (
    <div>
      <div>
        <h1>
          {counterGood} {counterNeutral} {counterBad}
        </h1>
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
