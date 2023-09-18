import { CloseOutlined } from "@ant-design/icons";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Quantity from "./Quantity";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CartItem = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px;
  max-height: 45vh;
  overflow-y: auto;
  width: 100%;
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
  img {
    width: 100%;
  }
`;

export default CartItem;
