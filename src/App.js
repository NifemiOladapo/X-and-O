import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [nextToPlay, setNextToPlay] = useState("x");
  const [gameIsOver, setGameIsOver] = useState(false);
  const [winnersMessage, setWinnersMessage] = useState("");

  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [inputThree, setInputThree] = useState("");
  const [inputFour, setInputFour] = useState("");
  const [inputFive, setInputFive] = useState("");
  const [inputSix, setInputSix] = useState("");
  const [inputSeven, setInputSeven] = useState("");
  const [inputEight, setInputEight] = useState("");
  const [inputNine, setInputNine] = useState("");

  const [xTotalScore, setXTotalScore] = useState(0);
  const [oTotalScore, setOTotalScore] = useState(0);

  const clerInputStatesAfterAWinFunc = () => {
    setInputOne("");
    setInputTwo("");
    setInputThree("");
    setInputFour("");
    setInputFive("");
    setInputSix("");
    setInputSeven("");
    setInputEight("");
    setInputNine("");
  };

  const playAGame = (input, setInput) => {
    if (input !== "") {
      return;
    }
    if (nextToPlay === "x") {
      setInput("x");
      setNextToPlay("o");
    } else {
      setInput("o");
      setNextToPlay("x");
    }
  };


  useEffect(() => {
    if (inputOne === "x" && inputTwo === "x" && inputThree === "x") {
      setXTotalScore((prevScore) => prevScore + 1);
      setGameIsOver(true);
      setWinnersMessage("X Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputOne === "x" && inputFour === "x" && inputSeven === "x") {
      setXTotalScore((prevScore) => prevScore + 1);

      setGameIsOver(true);
      setWinnersMessage("X Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputOne === "x" && inputFive === "x" && inputNine === "x") {
      setXTotalScore((prevScore) => prevScore + 1);

      setGameIsOver(true);
      setWinnersMessage("X Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputTwo === "x" && inputFive === "x" && inputEight === "x") {
      setXTotalScore((prevScore) => prevScore + 1);

      setGameIsOver(true);
      setWinnersMessage("X Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputThree === "x" && inputSix === "x" && inputNine === "x") {
      setXTotalScore((prevScore) => prevScore + 1);

      setGameIsOver(true);
      setWinnersMessage("X Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputThree === "x" && inputFive === "x" && inputSeven === "x") {
      setXTotalScore((prevScore) => prevScore + 1);

      setGameIsOver(true);
      setWinnersMessage("X Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputFour === "x" && inputFive === "x" && inputSix === "x") {
      setXTotalScore((prevScore) => prevScore + 1);

      setGameIsOver(true);
      setWinnersMessage("X Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputSeven === "x" && inputEight === "x" && inputNine === "x") {
      setXTotalScore((prevScore) => prevScore + 1);

      setGameIsOver(true);
      setWinnersMessage("X Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputOne === "o" && inputTwo === "o" && inputThree === "o") {
      setOTotalScore((prevScore) => prevScore + 1);

      setGameIsOver(true);
      setWinnersMessage("o Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputOne === "o" && inputFour === "o" && inputSeven === "o") {
      setGameIsOver(true);
      setOTotalScore((prevScore) => prevScore + 1);

      setWinnersMessage("o Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputOne === "o" && inputFive === "o" && inputNine === "o") {
      setGameIsOver(true);
      setWinnersMessage("o Wins!!!");
      setOTotalScore((prevScore) => prevScore + 1);

      clerInputStatesAfterAWinFunc();
    } else if (inputTwo === "o" && inputFive === "o" && inputEight === "o") {
      setGameIsOver(true);
      setOTotalScore((prevScore) => prevScore + 1);

      setWinnersMessage("o Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputThree === "o" && inputSix === "o" && inputNine === "o") {
      setGameIsOver(true);
      setWinnersMessage("o Wins!!!");
      setOTotalScore((prevScore) => prevScore + 1);

      clerInputStatesAfterAWinFunc();
    } else if (inputThree === "o" && inputFive === "o" && inputSeven === "o") {
      setGameIsOver(true);
      setOTotalScore((prevScore) => prevScore + 1);

      setWinnersMessage("o Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputFour === "o" && inputFive === "o" && inputSix === "o") {
      setGameIsOver(true);
      setWinnersMessage("o Wins!!!");
      clerInputStatesAfterAWinFunc();
      setOTotalScore((prevScore) => prevScore + 1);
    } else if (inputSeven === "o" && inputEight === "o" && inputNine === "o") {
      setGameIsOver(true);
      setOTotalScore((prevScore) => prevScore + 1);

      setWinnersMessage("o Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (
      inputOne !== "" &&
      inputTwo !== "" &&
      inputThree !== "" &&
      inputFour !== "" &&
      inputFive !== "" &&
      inputSix !== "" &&
      inputSeven !== "" &&
      inputEight !== "" &&
      inputNine !== ""
    ) {
      setWinnersMessage("No One Wins");
      setGameIsOver(true);
      clerInputStatesAfterAWinFunc();
    }
  }, [
    inputOne,
    inputTwo,
    inputThree,
    inputFour,
    inputFive,
    inputSix,
    inputSeven,
    inputEight,
    inputNine,
  ]);

  return (
    <div className="app">
      <div className="scores__div">
        <h2>X - {xTotalScore}</h2>

        <h2>O - {oTotalScore}</h2>
      </div>

      <div className="main__game">
        <h1>X and O</h1>
        {gameIsOver ? (
          <div>
            <h2>{winnersMessage}</h2>
            <h3
              onClick={() => {
                setWinnersMessage("");
                setGameIsOver(false);
              }}
            >
              Play again
            </h3>
          </div>
        ) : (
          <div className="main__card">
            <div>
              <input
                readOnly
                value={inputOne}
                onClick={() => playAGame(inputOne, setInputOne)}
              />
              <input
                readOnly
                value={inputTwo}
                onClick={() => playAGame(inputTwo, setInputTwo)}
              />
              <input
                readOnly
                value={inputThree}
                onClick={() => playAGame(inputThree, setInputThree)}
              />
            </div>
            <div>
              <input
                readOnly
                value={inputFour}
                onClick={() => playAGame(inputFour, setInputFour)}
              />
              <input
                value={inputFive}
                readOnly
                onClick={() => playAGame(inputFive, setInputFive)}
              />
              <input
                value={inputSix}
                readOnly
                onClick={() => playAGame(inputSix, setInputSix)}
              />
            </div>
            <div>
              <input
                value={inputSeven}
                readOnly
                onClick={() => playAGame(inputSeven, setInputSeven)}
              />
              <input
                value={inputEight}
                readOnly
                onClick={() => playAGame(inputEight, setInputEight)}
              />
              <input
                value={inputNine}
                readOnly
                onClick={() => playAGame(inputNine, setInputNine)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
