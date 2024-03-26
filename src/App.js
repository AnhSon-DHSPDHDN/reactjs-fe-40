import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(10);

  const handleDecrement = () => {
    let _countTemp = count;
    _countTemp = _countTemp - 1;
    setCount(_countTemp);
    console.log(_countTemp, "gia tri _countTemp");
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <div className="counter-container">
        <button className="counter-container__btn" onClick={handleDecrement}>
          -
        </button>
        <span>{count}</span>
        <button className="counter-container__btn" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
