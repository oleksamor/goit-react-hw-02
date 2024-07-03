const Options = () => {
  const handleGoodClick = () => {
    console.log("Good click");
  };
  const handleNeutralClick = () => {
    console.log("Neutral click");
  };
  const handleBadClick = (name1) => {
    console.log(`Bad click ${name1}`);
  };
  const handleResetClick = (e) => {
    console.log(e);
  };

  return (
    <div>
      <button onClick={handleGoodClick} className="btn">
        Good
      </button>
      <button onClick={handleNeutralClick} className="btn">
        Neutral
      </button>
      <button onClick={() => handleBadClick("Alex")} className="btn">
        Bad
      </button>
      <button onClick={handleResetClick} className="btn">
        Reset
      </button>
    </div>
  );
};
export default Options;
