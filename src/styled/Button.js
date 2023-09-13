import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 20px;
  width: 220px;
  border-radius: 5px;
  cursor: pointer;
  border: 1x solid transparent;
  transition: 0.2s background-color ease-in-out;

  &:hover {
    background-color: #dbd9d9;
    color: black;
    border: 1px solid black;
    transition: 0.2s background-color ease-in-out;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: #dbd9d9;
    color: black;
  }
`;
