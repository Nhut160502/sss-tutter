import { useSelector } from "react-redux";
import { styled } from "styled-components";

function Overlay({ onClick }) {
  const visibility = useSelector((state) => state?.overlay?.visibility);
  return (
    <Wrapper className={visibility && "active"} onClick={onClick}></Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  visibility: hidden;
  transition: all 0.4s;

  &.active {
    visibility: visible;
  }
`;
export default Overlay;
