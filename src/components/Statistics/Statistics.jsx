import PropTypes from 'prop-types';

export const Statistics = ({ state, message }) => {
  const { good, neutral, bad } = state;

  const total = good + neutral + bad;

  return !good && !neutral && !bad ? (
    <p> {message}</p>
  ) : (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {Math.round((good / total) * 100)}%</p>
    </>
  );
};

Statistics.propTypes = {
  state: PropTypes.object.isRequired,
  message: PropTypes.string,
};
