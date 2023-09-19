import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Overlay from "./Overlay";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { hideCart, visibleCart } from "../providers/cartSlice";
import { hideOverlay, visibleOverlay } from "../providers/overlaySlice";

function Header() {
  const dispatch = useDispatch();
  const handleClickOpenCart = () => {
    dispatch(visibleCart());
    dispatch(visibleOverlay());
  };

  const cart = useSelector((state) => state?.cart?.visibility);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Wrapper>
        <Notification>
          <Slider {...settings}>
            <div className="item">
              <p>
                NHẬP CODE: <strong>HELLO. Giảm 15% </strong> cho ĐH đầu tiên từ
                699K
              </p>
            </div>
            <div className="item">
              <p>
                <strong>MIỄN PHÍ VẬN CHUYỂN</strong> CHO ĐƠN HÀNG TỪ 499.000Đ
              </p>
            </div>
          </Slider>
        </Notification>
        <Content>
          <Row>
            <Col sm="3">
              <Left>
                <Link to="/">
                  <h1>SSSTUTTER</h1>
                </Link>
              </Left>
            </Col>
            <Col sm="5" md="6">
              <Center>
                <Link to="/about">About sss</Link>
                <Link to="/c/for-him">Sản Phẩm</Link>
                <Link to="/lookbook">BST</Link>
                <Link to="/campaign">Ưu đãi</Link>
                <Link to="voucher">Voucher</Link>
                <Link to="tuyen-dung">Tuyển Dụng</Link>
              </Center>
            </Col>
            <Col sm="4" md="3">
              <Right>
                <div className="item">
                  <SearchOutlined />
                </div>
                <div className="item">
                  <ShoppingCartOutlined onClick={handleClickOpenCart} />
                  <span className="qty">1</span>
                </div>
              </Right>
            </Col>
          </Row>
        </Content>
        <Cart />
      </Wrapper>
      <Overlay
        active={cart}
        onClick={() => {
          dispatch(hideCart());
          dispatch(hideOverlay());
        }}
      />
    </>
  );
}
const Wrapper = styled.div`
  position: relative;
  z-index: 9999;
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0;
  width: 100%;
`;
const Notification = styled.div`
  .item {
    background-color: #000;
    padding: 8px;
    p {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 14px;
      margin-bottom: 0;
    }
  }
`;
const Content = styled.div`
  height: 80px;
  background-color: #fff;
  > div {
    align-items: center;
    height: 100%;
    > div {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
`;
const Left = styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1 {
    font-size: 48px;
    font-weight: 700;
    color: #000;
  }
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  a {
    text-transform: uppercase;
    height: 28px;
    color: #000;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 400;
  }
`;
const Right = styled.div`
  width: 100%;
  padding-right: 2.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .item {
    position: relative;
    svg {
      margin: 0 20px;
      font-size: 30px;
    }
    .qty {
      position: absolute;
      bottom: -6px;
      right: 10px;
      font-size: 8px;
      color: #fff;
      background: red;
      border-radius: 50%;
      padding-left: 0.25rem;
      padding-right: 0.25rem;
    }
  }
`;

export default Header;
