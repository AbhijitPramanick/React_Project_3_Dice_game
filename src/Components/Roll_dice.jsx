import styled from "styled-components";

const Roll_dice = ({ currentDice, performRoll }) => {
  return (
    <RollDiceContainer>
      <div className="dice" onClick={performRoll}>
        <img
          src={`./images/dice/dice_${currentDice}.png`}
          alt="Selected Dice image"
          height={"200px"}
          width={"200px"}
        />
      </div>

      <p>Click on Dice to roll</p>
    </RollDiceContainer>
  );
};

export default Roll_dice;

const RollDiceContainer = styled.div`
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 20px;
  .dice {
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  p {
    padding-top: 5px;
    margin: 0;
    font-size: 24px;
    font-weight: 600;
  }
`;
