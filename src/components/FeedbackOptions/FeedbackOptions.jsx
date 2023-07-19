import PropTypes from 'prop-types';

export const FeedbackOptions = ({ countFeedbacks }) => {
  return (
    <>
      <button type="button" onClick={() => countFeedbacks('good')}>
        Good
      </button>
      <button type="button" onClick={() => countFeedbacks('neutral')}>
        Neutral
      </button>
      <button type="button" onClick={() => countFeedbacks('bad')}>
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  countFeedbacks: PropTypes.func,
};
