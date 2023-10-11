import { useSelector } from "react-redux";
import { styled } from "styled-components";

function Overlay({ active, onClick }) {
  const visibility = useSelector((state) => state?.overlay?.visibility);
  return (
    <Wrapper
      className={(visibility && "active") || (active && "active")}
      onClick={onClick}
    ></Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  z-index: 1;
  visibility: hidden;
  transition: all 0.4s;
  z-index: 1;

  &.active {
    visibility: visible;
  }
`;
export default Overlay;
