import Number_selector from "./Number_selector";
import Roll_dice from "./Roll_dice";
import Total_score from "./Total_score";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "../styled/Button";
import { OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const Game_play = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("Select a number 😊");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const performRoll = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("Select a number 😊");
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber == randomNumber) {
      setError("✅ Correct!!! 🎉✨😎");
      setScore((prev) => prev + selectedNumber);
    } else {
      setError("💢Wrong 🤔");
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };
  const resetScore = () => {
    setScore(0);
  };
  return (
    <>
      <Main_container>
        <div className="top_section">
          <Total_score score={score} />
          <Number_selector
            error={error}
            setError={setError}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </div>
        <Roll_dice currentDice={currentDice} performRoll={performRoll} />
        <div className="btns">
          <OutlineButton onClick={resetScore}>Reset score</OutlineButton>
          <Button onClick={() => setShowRules((prev) => !prev)}>
            {showRules ? "Hide" : "Show"} rules
          </Button>
        </div>
        {showRules && <Rules />}
      </Main_container>
    </>
  );
};

export default Game_play;

const Main_container = styled.div`
  .top_section {
    max-width: 1280px;
    height: 150px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btns {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
