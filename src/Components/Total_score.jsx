import styled from "styled-components";

const Total_score = ({ score }) => {
  return (
    <ScoreBoard>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreBoard>
  );
};

export default Total_score;

const ScoreBoard = styled.div`
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 100px;
    margin: 0;
    padding: 0;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 1000;
    margin: 0;
    padding: 0;
  }
`;
