import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount(count + step);
  };

  const incrementTwice = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount(count - step);
  };
  return (
    <>
      <div className="app-container">
        <h1>Count : {count}</h1>
        <input
          type="number"
          value={step}
          onChange={(e) => {
            setStep(parseInt(e.target.value));
          }}
        />
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={incrementTwice}>+2</button>
      </div>
    </>
  );
}

export default App;
