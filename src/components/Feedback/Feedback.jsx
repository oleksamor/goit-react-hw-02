import s from "./Feedback.module.css";

const Feedback = ({ totalFeedback, good, neutral, bad, positiveFeedback }) => {
  return (
    <ul className={s.list}>
      <li className={s.item}>Good: {good}</li>
      <li className={s.item}>Neutral: {neutral}</li>
      <li className={s.item}>Bad: {bad}</li>
      <li className={s.item}>Total: {totalFeedback}</li>
      <li className={s.item}>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
