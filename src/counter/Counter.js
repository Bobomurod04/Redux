import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment"})
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement"})
  };

  const toggleCounterHandler = () => {

  }
  return (
    <div className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>Counter value: {counter}</div>
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler} >Toggle Counter</button>
    </div>
  )
}

export default Counter;