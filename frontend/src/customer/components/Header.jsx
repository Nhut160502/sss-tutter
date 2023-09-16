import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Overlay from "./Overlay";
import Cart from "./Cart";
// import Search from "./Search";

function Header() {
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
                <h1>SSSTUTTER</h1>
              </Left>
            </Col>
            <Col sm="5">
              <Center>
                <Link to="/about">About</Link>
                <Link to="/c/for-him">Sản Phẩm</Link>
                <Link to="/lookbook">BST</Link>
                <Link to="/campaign">Ưu đãi</Link>
                <Link to="voucher">Voucher</Link>
                <Link to="tuyen-dung">Tuyển Dụng</Link>
              </Center>
            </Col>
            <Col sm="4">
              <Right>
                <SearchOutlined />
                <ShoppingCartOutlined />
              </Right>
            </Col>
          </Row>
        </Content>
        {/* <Search />/ */}
        <Cart />
      </Wrapper>
      <Overlay />
    </>
  );
}
const Wrapper = styled.div`
  position: relative;
  z-index: 9999;
  border-bottom: 1px solid #eee;
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
  h1 {
    font-size: 48px;
    font-weight: 700;
    color: #000;
  }
`;
const Center = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  a {
    text-transform: uppercase;
    height: 28px;
    color: #000;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500;
  }
`;
const Right = styled.div`
  width: 100%;
  padding-right: 2.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  svg {
    margin: 0 20px;
    font-size: 30px;
  }
`;

export default Header;
