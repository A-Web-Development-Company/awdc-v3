import styled from "styled-components";

const PrimaryButton = styled.button`
  background-color: #00bcc9;
  color: #fff;
  border: none;
  border-radious: 4px;
  padding: 1em 2em;
  height: 50%;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #ffffff;
    color: #00bcc9;
  }
`;

export default PrimaryButton;
