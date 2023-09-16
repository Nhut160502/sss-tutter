import { styled } from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
import { Col, Row } from "react-bootstrap";
import Quantity from "./Quantity";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <Wrapper>
      <Title>
        <span>Giỏ hàng</span>
        <CloseOutlined />
      </Title>
      <Content>
        <Item>
          <Row>
            <Col sm="4">
              <img
                src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/092023/1694736057548.webp"
                alt=""
              />
            </Col>
            <Col sm="8">
              <div className="name">
                <Link to="">Smart baggy jean</Link>
              </div>
              <div className="price">499,000</div>
              <div className="quantity">
                <span className="desc">Số Lượng</span>
                <Quantity />
              </div>
              <div className="color">
                <span className="desc">Màu</span>
                <p>Xanh da trời</p>
              </div>
              <div className="size">
                <span className="desc">Size</span>
                <div>
                  <p>1</p>
                  <p>499,000</p>
                </div>
              </div>
            </Col>
          </Row>
        </Item>
      </Content>
      <Bottom></Bottom>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 360px;
  background-color: #fff;
  position: absolute;
  top: 117px;
  right: 0;
  border-left: 1px solid #eee;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;
const Title = styled.div`
  width: 100%;
  padding: 16px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  svg {
    font-size: 18px;
  }
`;

const Content = styled.div`
  padding: 16px;
  max-height: 45vh;
  overflow-y: auto;
  .name {
    font-size: 14px;
    color: #000;
    text-transform: uppercase;
    font-weight: 600;
  }
  .price {
    font-size: 16px;
    font-weight: 600;
  }
  .color,
  .size,
  .quantity {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }
  .desc {
    min-width: 80px;
  }
  .size {
    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
  p {
    font-size: 14px;
    font-weight: 500;
  }
`;
const Item = styled.div`
  img {
    width: 100%;
  }
`;

const Bottom = styled.div``;

export default Cart;
