import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button
        onClick={() =>
          setCount((currentCount) => (currentCount > 0 ? currentCount - 1 : 0))
        }
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
