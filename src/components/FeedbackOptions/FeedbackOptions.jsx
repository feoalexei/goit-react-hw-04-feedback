import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const FeedbackOptions = ({ options, handleFeedback }) => {
  return (
    <div>
      {Object.keys(options).map(option => (
        <button
          type="button"
          key={option}
          onClick={() => handleFeedback(option)}
          className={css.btn}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }).isRequired,
  handleFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
