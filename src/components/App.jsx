import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [headdingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function hover() {
    setMouseOver(true);
  }

  function out() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headdingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={hover}
        onMouseOut={out}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
