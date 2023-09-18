import Footer from "../components/Footer";
import Header from "../components/Header";
import { styled } from "styled-components";
import { memo } from "react";
import { ToastContainer } from "react-toastify";
function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Container>{children}</Container>
      <ToastContainer />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
const Container = styled.div`
  padding-top: 117px;
`;

export default memo(DefaultLayout);
