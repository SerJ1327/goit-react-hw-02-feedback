import PropTypes from 'prop-types';

export const FeedbackOptions = ({
  countGoodFeedbacks,
  countNeutralFeedbacks,
  countBadFeedbacks,
}) => {
  return (
    <>
      <button type="button" onClick={countGoodFeedbacks}>
        Good
      </button>
      <button type="button" onClick={() => countNeutralFeedbacks()}>
        Neutral
      </button>
      <button type="button" onClick={() => countBadFeedbacks()}>
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  countGoodFeedbacks: PropTypes.number,
  countNeutralFeedbacks: PropTypes.number,
  countBadFeedbacks: PropTypes.number,
};
