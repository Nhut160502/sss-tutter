import React from "react";
import { Col, Row } from "react-bootstrap";
import { styled } from "styled-components";
import Product from "../components/Product";
import Banner from "../components/Banner";

const Campaign = () => {
  return (
    <Wrapper>
      <Banner src="https://dashboard.leanow.vn/upload/9-2023/1694160249507.webp" />
      <Category>
        <ul>
          <li>SƠ MI & ÁO KIỂU</li>
          <li>ÁO THUN</li>
          <li>QUẦN</li>
          <li>LEN DỆT</li>
          <li>PHỤ KIỆN</li>
          <li>ÁO KHOÁC & BLAZER</li>
          <li>QUẦN BÒ</li>
          <li>QUẦN SHORT</li>
          <li>GIÀY</li>
          <li>TÚI & VÍ</li>
          <li>HOODIES & SWEATSHIRT</li>
        </ul>
      </Category>
      <Content>
        <Row>
          <Col sm="3">
            <Product />
          </Col>

          <Col sm="3">
            <Product />
          </Col>

          <Col sm="3">
            <Product />
          </Col>

          <Col sm="3">
            <Product />
          </Col>
        </Row>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Category = styled.div`
  padding: 1rem 5rem;
  ul {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    li {
      font-size: 14px;
      display: block;
      text-align: center;
      text-transform: uppercase;
      padding: 0.25rem;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
const Content = styled.div`
  padding: 1rem 5rem;
`;

export default Campaign;
