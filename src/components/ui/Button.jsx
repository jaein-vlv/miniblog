import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border-width: 1px;
  border-radius: 8px;
  cursor: pointer;
`;

function Button(props) {
  const { text, onClick } = props;
  return <StyledButton onClick={onClick}>{text || "Click"}</StyledButton>;
}

export default Button;
