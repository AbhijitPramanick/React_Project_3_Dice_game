import styled from "styled-components";

const Rules = () => {
  return (
    <RulesBox>
      <h2>How to play dice game</h2>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>
        After click on dice if selected number is equal to dice number you will
        get same point as dice
      </p>
      <p>If you get wrong guess then 2 point will be deducted </p>
    </RulesBox>
  );
};

export default Rules;

const RulesBox = styled.div`
  width: 680px;
  height: 130px;
  padding: 10px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 0 auto;
  background-color: #fbf1f1;
  color: black;
  h2 {
    margin: 0;
    padding: 10px 0;
  }
  p {
    margin: 0;
    line-height: 25px;
  }
`;
