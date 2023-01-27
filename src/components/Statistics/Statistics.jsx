import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ options, total, positive }) => {
  return (
    <ul className={css.statResults}>
      <li className={css.statItem}>Good: {options.good}</li>
      <li className={css.statItem}>Neutral: {options.neutral}</li>
      <li className={css.statItem}>Bad: {options.bad}</li>
      <li className={css.statItem}>Total: {total}</li>
      <li className={css.statItem}>Positive feedback: {positive}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }).isRequired,
  total: PropTypes.number,
  positive: PropTypes.number,
};

export default Statistics;
