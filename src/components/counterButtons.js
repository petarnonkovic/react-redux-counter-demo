import React from "react";
import PropTypes from "prop-types";

const CounterButtons = ({ onIncrement, onDecrement }) => {
  return (
    <div>
      <button onClick={() => onIncrement()}>Increment</button>
      <button onClick={() => onDecrement()}>Decrement</button>
    </div>
  );
};

CounterButtons.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default CounterButtons;
