import React, { useState, useEffect } from "react";
import "./Board.css";
import { Cross } from "./Cross";
import { Zero } from "./Zero";

export const Sqr = (props) => {
  const [isPressed, setIsPressed] = useState(false);
  const [sign, setSign] = useState("");

  const dis = (btn) => {
    if (btn === "c") {
      return <Cross />;
    } else if (btn === "z") {
      return <Zero />;
    } else return <div></div>;
  };

  return (
    <div
      className="square"
      onClick={() => {
        !isPressed && setSign(props.sign ? "c" : "z");
        !isPressed && props.changesign(props.value);
        setIsPressed(true);
      }}
    >
      {isPressed && dis(sign)}
    </div>
  );
};
