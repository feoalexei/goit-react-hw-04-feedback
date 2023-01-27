import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ results: { good, neutral, bad, total, positive } }) => {
  return (
    <ul className={css.statResults}>
      <li className={css.statItem}>Good: {good}</li>
      <li className={css.statItem}>Neutral: {neutral}</li>
      <li className={css.statItem}>Bad: {bad}</li>
      <li className={css.statItem}>Total: {total}</li>
      <li className={css.statItem}>Positive feedback: {positive}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  results: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positive: PropTypes.number,
  }).isRequired,
};

export default Statistics;
