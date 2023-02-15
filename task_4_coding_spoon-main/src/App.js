import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let color;
  if (count >= 0 && count <= 4) {
    color = "green";
  } else if (count >= 5 && count <= 9) {
    color = "blue";
  } else {
    color = "red";
  }

  return (
    <div>
      <h1 style={{ color }}>{count}</h1>
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px 20px",
          marginRight: "10px",
          borderRadius: "5px",
          border: "none"
        }}
        onClick={increment}
      >
        Increment
      </button>
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none"
        }}
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
