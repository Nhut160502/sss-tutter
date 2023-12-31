import { styled } from "styled-components";

function Button({ children, black, onClick }) {
  const classess = [black && "black"];
  return (
    <Wrapper onClick={onClick} className={classess}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #fff;
  color: #000;
  text-transform: uppercase;
  padding: 12px;
  border: 1px solid #000;

  + button {
    margin-left: 15px;
  }

  &.black {
    background-color: #000;
    color: #fff;
  }
`;

export default Button;
