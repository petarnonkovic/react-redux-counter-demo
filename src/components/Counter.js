import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  undoCount,
  redoCount
} from "../actions/counterActions";
import CounterButtons from "./counterButtons";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h2>Counter: {count}</h2>
      <CounterButtons onIncrement={increment} onDecrement={decrement} />
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  count: state.counter.count
});

export default connect(
  mapStateToProps,
  {
    increment,
    decrement
  }
)(Counter);
