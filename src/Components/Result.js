import React from "react";
import "./Board.css";

export const Result = (props) => {
  console.log(props);
  return (
    <div className="fill-window">
      <h1>winner is Player {props.winner}</h1>
    </div>
  );
};
