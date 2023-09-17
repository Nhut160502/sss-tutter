import Footer from "../components/Footer";
import Header from "../components/Header";
import { styled } from "styled-components";
import { memo } from "react";
function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
const Container = styled.div``;

export default memo(DefaultLayout);
