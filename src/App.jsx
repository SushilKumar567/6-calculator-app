import { useState } from "react";
import "./App.css";
import "./Media.css";

export default function App() {
  const [expression, setExpression] = useState("");

  const handleClick = (value) => {
    try {
      if (value === "=") {
        setExpression(eval(expression).toString());
      } else if (value === "AC") {
        setExpression("");
      } else if (value === "Del") {
        setExpression(expression.slice(0, -1));
      } else {
        setExpression(expression + value);
      }
    } catch {
      setExpression("Error");
    }
  };

  const buttons = [
    "AC",
    "Del",
    "/",
    "*",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "0",
    "00",
    ".",
  ];

  const isOperator = (val) =>
    ["AC", "Del", "+", "-", "*", "/", "="].includes(val);

  return (
    <div className="calculator-container">
      <div className="calculator">
        <input id="display" className="display" value={expression} readOnly />
        <div className="buttons">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => handleClick(btn)}
              className={`btn ${btn == "=" ? "equals-btn" : ""}
              ${isOperator(btn) ? "operator-btn" : ""}`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
