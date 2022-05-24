import React, { useState } from "react";
import "./Board.css";
import { Sqr } from "./Sqr";
import { Result } from "./Result";

export const Board = (props) => {
  const getsign = () => {
    return Math.floor(Math.random() * 10);
  };

  const [sign, setSign] = useState(getsign() % 2 ? true : false);
  const [mat, setMat] = useState(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
  const [isWinner, setIsWinner] = useState(false);
  const [winner, setWinner] = useState("");

  const check = (stuff) => {
    if (
      (mat[0] === mat[1] && mat[1] === mat[2]) ||
      (mat[3] === mat[4] && mat[4] === mat[5]) ||
      (mat[6] === mat[7] && mat[7] === mat[8]) ||
      (mat[0] === mat[3] && mat[3] === mat[6]) ||
      (mat[1] === mat[4] && mat[4] === mat[7]) ||
      (mat[2] === mat[5] && mat[5] === mat[8]) ||
      (mat[0] === mat[4] && mat[4] === mat[8]) ||
      (mat[6] === mat[4] && mat[4] === mat[2])
    ) {
      // console.log("winner ", mat[stuff - 1]);
      setIsWinner(true);
      setWinner(stuff);
    }
  };
  const changesign = (stuff) => {
    setSign(!sign);
    mat[stuff - 1] = sign ? "X" : "O";
    check(stuff);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="bd">
      <div className="ground">
        {isWinner && <Result winner={mat[winner - 1]} />}
        <div>
          <h1>Tic Tac Toe</h1>
          <br />
          <h2>player {sign ? "X" : "O"}'s turn</h2>
        </div>
        <div className="holder">
          <div style={{ display: "table-row" }}>
            <Sqr changesign={changesign} sign={sign} value="1" />
            <Sqr changesign={changesign} sign={sign} value="2" />
            <Sqr changesign={changesign} sign={sign} value="3" />
          </div>
          <div style={{ display: "table-row" }}>
            <Sqr changesign={changesign} sign={sign} value="4" />
            <Sqr changesign={changesign} sign={sign} value="5" />
            <Sqr changesign={changesign} sign={sign} value="6" />
          </div>
          <div style={{ display: "table-row" }}>
            <Sqr changesign={changesign} sign={sign} value="7" />
            <Sqr changesign={changesign} sign={sign} value="8" />
            <Sqr changesign={changesign} sign={sign} value="9" />
          </div>
          <div style={{ textAlign: "center" }}>
            <button className="btn" onClick={refreshPage}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
