import styled from "styled-components";
const Number_selector = ({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("😊");
  };
  return (
    <SelectorContainer>
      <Message>{error}</Message>
      <Boxes>
        {arrNumber.map((value, i) => (
          <Box
            key={i}
            onClick={() => {
              numberSelectorHandler(value);
            }}
            isSelected={value == selectedNumber}
          >
            {value}
          </Box>
        ))}
      </Boxes>
      <p>Select number</p>
    </SelectorContainer>
  );
};

export default Number_selector;

const Message = styled.p`
  color: red;
`;
const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: end;

  p {
    font-size: 24px;
    font-weight: 600;
    margin: 0;
  }
`;
const Boxes = styled.div`
  display: flex;
  gap: 20px;
`;
const Box = styled.div`
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  height: 72px;
  width: 72px;
  display: grid;
  place-items: center;
  border: 2px solid black;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s background-color ease-in;
`;
