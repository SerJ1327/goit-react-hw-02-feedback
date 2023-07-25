import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, countFeedbacks }) => {
  return (
    <>
      {options.map(option => {
        return (
          <button
            type="button"
            key={option}
            onClick={() => countFeedbacks(option)}
          >
            {option}
          </button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  countFeedbacks: PropTypes.func,
};
