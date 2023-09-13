import styled from "styled-components";
import { Button } from "../styled/Button";

const Start_game = ({ toggle }) => {
  return (
    <Container>
      <img src="/images/dices.png" alt="Dices image" />
      <Start_display>
        <H1>DICE GAME</H1>
        <Button onClick={toggle}>Play now</Button>
      </Start_display>
    </Container>
  );
};

export default Start_game;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
`;
const Start_display = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
`;
const H1 = styled.h1`
  font-size: 90px;
  font-weight: 1000px;
`;
