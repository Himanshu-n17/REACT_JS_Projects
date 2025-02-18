import { useState } from "react";
import React from "react";
import "./Style.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <>
      <div className="container">
        <h1 className="number">{count}</h1>
      </div>

      <section className="btn-container">
        <button className="btn" onClick={increment}>
          +
        </button>

        <button className="btn" onClick={decrement}>
          -
        </button>

        <button className="btn" onClick={reset}>
          RESET
        </button>
      </section>
    </>
  );
}

export default Counter;
