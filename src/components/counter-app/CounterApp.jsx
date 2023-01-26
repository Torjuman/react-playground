import { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-center">This is a Counter App</h1>
      <h3>Your count is {count}</h3>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          onClick={() => (count === 0 ? "" : setCount(count - 1))}
          type="button"
          className="btn btn-outline-primary"
        >
          Decrease
        </button>
        <button
          onClick={() => setCount(0)}
          type="button"
          className="btn btn-outline-primary"
        >
          Reset
        </button>
        <button
          onClick={() => (count >= 10 ? "" : setCount(count + 1))}
          type="button"
          className="btn btn-outline-primary"
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
