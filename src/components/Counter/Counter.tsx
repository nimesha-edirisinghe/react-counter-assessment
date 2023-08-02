import React, { useState } from 'react';
import './Counter.css';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const maxLimit = 10; // Maximum limit for the counter

  // Define function to increase the counter
  const increase = () => {
    // Check if the current count is less than the maximum limit
    if (count < maxLimit) {
      // Update the 'count' state by 1
      // The argument is a function that receives the previous 'count' value (prevCount)
      setCount((prevCount) => prevCount + 1);
    } else {
      // Display an alert message when the counter reaches the maximum limit
      alert("Count can't be more than 10");
    }
  };

  // Define function to decrease the counter
  const decrease = () => {
    // Check if the current count is greater than 0
    if (count > 0) {
      // Update the 'count' state
      // The argument is a function that receives the previous 'count' value (prevCount)
      setCount((prevCount) => prevCount - 1);
    } else {
      alert("Count can't be less than 0"); // Display an alert message when the counter is already at 0
    }
  };

  // Define function to reset the counter to 0
  const reset = () => {
    setCount(0); // Update the 'count' state directly to 0
  };

  return (
    <main className="counter-container">
      <p className="count-text" data-testid="count-text">
        Count: {count}
      </p>
      <section className="buttons-container">
        <button
          className="button add-button"
          onClick={increase}
          data-testid="increase-button"
        >
          +
        </button>
        <button
          className="button sub-button"
          onClick={decrease}
          data-testid="decrease-button"
        >
          -
        </button>
        <button
          className="button reset-button"
          onClick={reset}
          data-testid="reset-button"
        >
          Reset
        </button>
      </section>
    </main>
  );
};

export default Counter;
