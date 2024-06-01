const hapticFeedback = () => {
  return navigator.vibrate && navigator.vibrate(60);
};

export default hapticFeedback;
