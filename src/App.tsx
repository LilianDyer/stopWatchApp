import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [increasing, setIncreasing] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (increasing) {
        setCount((prevCount) => prevCount + 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [increasing]);

  const start = () => {
    setIncreasing(true);
  };

  const stop = () => {
    setIncreasing(false);
  };

  const reset = () => {
    setCount(0);
    setIncreasing(false);
  };

  return (
    <>
      <h1>Stop Watch</h1>
      <h1>{count}</h1>
      <div className="container">
        <button disabled={increasing} onClick={start}>
          Start
        </button>
        <button disabled={!increasing} onClick={stop}>
          Stop
        </button>
        <button disabled={!increasing && count == 0} onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
