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

  const playAGame = (input, setInput)=>{
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
  }

  useEffect(() => {
    // console.log(`Input One = ${inputOne}`)
    // console.log(`Input Two = ${inputTwo}`)
    // console.log(`Input Three= ${inputThree}`)
    // console.log(`Input Four= ${inputFour}`)
    // console.log(`Input Five = ${inputFive}`)
    // console.log(`Input Six = ${inputSix}`)
    // console.log(`Input Seven= ${inputSeven}`)
    // console.log(`Input Eight = ${inputEight}`)
    // console.log(`Input Nine = ${inputNine}`)
    // if(inputOne !== "" && inputTwo !== "" && inputThree !== "" && inputFour !== "" && inputFive !== "" && inputSix !== "" && inputSeven !== "" && inputEight !== "" && inputNine !== ""){
    //   console.log("Game over")
    //   setWinnersMessage("No One Wins!")
    //   setGameIsOver(true)
    //   setInputOne("")
    //   setInputTwo("")
    //   setInputThree("")
    //   setInputFour("")
    //   setInputFive("")
    //   setInputSix("")
    //   setInputSeven("")
    //   setInputEight("")
    //   setInputNine("")
    // }
    if (inputOne === "x" && inputTwo === "x" && inputThree === "x") {
      setGameIsOver(true);
      setWinnersMessage("X Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputOne === "x" && inputFour === "x" && inputSeven === "x") {
      setGameIsOver(true);
      setWinnersMessage("X Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputOne === "x" && inputFive === "x" && inputNine === "x") {
      setGameIsOver(true);
      setWinnersMessage("X Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputTwo === "x" && inputFive === "x" && inputEight === "x") {
      setGameIsOver(true);
      setWinnersMessage("X Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputThree === "x" && inputSix === "x" && inputNine === "x") {
      setGameIsOver(true);
      setWinnersMessage("X Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputThree === "x" && inputFive === "x" && inputSeven === "x") {
      setGameIsOver(true);
      setWinnersMessage("X Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputFour === "x" && inputFive === "x" && inputSix === "x") {
      setGameIsOver(true);
      setWinnersMessage("X Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputSeven === "x" && inputEight === "x" && inputNine === "x") {
      setGameIsOver(true);
      setWinnersMessage("X Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputOne === "o" && inputTwo === "o" && inputThree === "o") {
      setGameIsOver(true);
      setWinnersMessage("o Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputOne === "o" && inputFour === "o" && inputSeven === "o") {
      setGameIsOver(true);
      setWinnersMessage("o Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputOne === "o" && inputFive === "o" && inputNine === "o") {
      setGameIsOver(true);
      setWinnersMessage("o Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputTwo === "o" && inputFive === "o" && inputEight === "o") {
      setGameIsOver(true);
      setWinnersMessage("o Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputThree === "o" && inputSix === "o" && inputNine === "o") {
      setGameIsOver(true);
      setWinnersMessage("o Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputThree === "o" && inputFive === "o" && inputSeven === "o") {
      setGameIsOver(true);
      setWinnersMessage("o Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputFour === "o" && inputFive === "o" && inputSix === "o") {
      setGameIsOver(true);
      setWinnersMessage("o Wins!!!");
      clerInputStatesAfterAWinFunc();
    } else if (inputSeven === "o" && inputEight === "o" && inputNine === "o") {
      setGameIsOver(true);
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
                value={inputOne}
                onClick={() => playAGame(inputOne, setInputOne)}
              />
              <input
                value={inputTwo}
                onClick={() => playAGame(inputTwo, setInputTwo)}
              />
              <input
                value={inputThree}
                onClick={() => playAGame(inputThree, setInputThree)}
              />
            </div>
            <div>
              <input
                value={inputFour}
                onClick={() => playAGame(inputFour, setInputFour)}
              />
              <input
                value={inputFive}
                onClick={() => playAGame(inputFive, setInputFive)}
              />
              <input
                value={inputSix}
                onClick={() =>playAGame(inputSix, setInputSix)}
              />
            </div>
            <div>
              <input
                value={inputSeven}
                onClick={() =>playAGame(inputSeven, setInputSeven)}
              />
              <input
                value={inputEight}
                onClick={() =>playAGame(inputEight, setInputEight)}
              />
              <input
                value={inputNine}
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
