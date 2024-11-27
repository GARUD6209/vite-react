import "./App.css";
import { useState } from "react";

function App() {
  const [counters, setCounters] = useState([{ id: 1, value: 0 }]);

  const addCounters = () => {
    setCounters([...counters, { id: counters.length + 1, value: 0 }]);
  };

  const increment = (id) => {
    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value + 1 } : counter
      )
    );
  };

  return (
    <>
      <div className="app-container">
        <button onClick={addCounters}>Add Counters</button>
        <ul>
          {counters.map((counter) => (
            <li key={counter.id}>
              Counter {counter.id} : {counter.value}
              <button onClick={() => increment(counter.id)}>increment</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
