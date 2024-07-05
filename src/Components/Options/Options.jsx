import s from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, handleReset }) => {
  return (
    <div>
      <button className={s.button} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={s.button} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={s.button} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={s.button} onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
