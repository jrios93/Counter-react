import { useState } from "react";

export const useCounter = (InitialValue = 0) => {
  const [counter, setCounter] = useState(InitialValue);
  const increment = (value = 1) => {
    setCounter(counter + value);
  };
  const decrement = (value = 1, negative = true) => {
    if (!negative && counter - value < 0) {
      setCounter(0);
      return;
    }

    setCounter(counter - value);
  };
  const reset = () => {
    setCounter(0);
  };
  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
