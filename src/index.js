import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Andy's Pizza Co.</h1>
      <img
        src="\pizzas\spinaci.jpg"
        alt="Spinach Pizza"
        width="300"
      />
      <h2>Spinach Pizza</h2>
      <p>Tomato, mozzarella, spinach, and ricotta cheese</p>
      <p>$10</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

