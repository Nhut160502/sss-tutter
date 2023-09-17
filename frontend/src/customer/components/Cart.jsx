import { styled } from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
import { Col, Row } from "react-bootstrap";
import Quantity from "./Quantity";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { hideCart } from "../providers/cartSlice";
import { hideOverlay } from "../providers/overlaySlice";

function Cart() {
  const dispatch = useDispatch();
  const visibility = useSelector((state) => state?.cart?.visibility);
  const handleCloseCart = () => {
    dispatch(hideCart());
    dispatch(hideOverlay());
  };
  return (
    <Wrapper className={visibility && "active"}>
      <Title>
        <span>Giỏ hàng</span>
        <CloseOutlined onClick={handleCloseCart} />
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
                <Link to="/">Smart baggy jean</Link>
                <CloseOutlined />
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
      <Bottom>
        <div className="desc">
          <span>Thành Tiền</span>
          <span className="price">499,000</span>
        </div>
        <div className="btn-submit">
          <Button black>Thanh Toán</Button>
        </div>
      </Bottom>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 360px;
  background-color: #fff;
  position: absolute;
  top: 117px;
  right: -100%;
  border-left: 1px solid #eee;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  transition: all 0.4s;

  &.active {
    right: 0;
  }
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
    cursor: pointer;
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
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      font-size: 12px;
      cursor: pointer;
    }
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

const Bottom = styled.div`
  padding: 15px;
  .desc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    text-transform: uppercase;
    .price {
      font-weight: 400;
    }
  }
  .btn-submit {
    margin-top: 20px;
    width: 100%;
  }
`;

export default Cart;
