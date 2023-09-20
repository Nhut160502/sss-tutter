import Footer from "../customer/components/Footer";
import Header from "../customer/components/Header";
import { styled } from "styled-components";
import { memo, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  hideVoucher,
  removeDataVoucher,
} from "../customer/providers/voucherSlice";
import { hideOverlay } from "../customer/providers/overlaySlice";
import { hideCart } from "../customer/providers/cartSlice";
import { hiddeRecruitment } from "../customer/providers/recruitmentSlice";
import "../customer/Style/responsive.scss";

function CustomerLayout({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const refresh = () => window.location.reload(true);
    if (refresh) {
      dispatch(hideVoucher());
      dispatch(hideOverlay());
      dispatch(removeDataVoucher());
      dispatch(hideCart());
      dispatch(hiddeRecruitment());
    }
  }, [dispatch]);
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

export default memo(CustomerLayout);
