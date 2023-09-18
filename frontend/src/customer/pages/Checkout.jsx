import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import CartItem from "../components/CartItem";

const Checkout = () => {
  return (
    <Wrapper>
      <Row>
        <Col sm="4">
          <Address className="p-4">
            <Title>Thông tin giao hàng</Title>
            <form action="">
              <FormControl>
                <label className="peer-focus" htmlFor="fullName">
                  Họ Và Tên
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="peer"
                />
              </FormControl>
              <FormControl>
                <label className="peer-focus" htmlFor="email">
                  Email
                </label>
                <input type="text" name="email" id="email" className="peer" />
              </FormControl>
              <FormControl>
                <label className="peer-focus" htmlFor="phoneNumber">
                  Số Điện Thoại
                </label>
                <input
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="peer"
                />
              </FormControl>
              <FormControl>
                <label className="peer-focus" htmlFor="provinces">
                  Chọn Tỉnh/ Thành Phố
                </label>
                <select className="peer" name="provinces" id="provinces">
                  <option value=""></option>
                </select>
              </FormControl>
              <FormControl>
                <label className="peer-focus" htmlFor="districts">
                  Chọn Quận/ Huyện
                </label>
                <select className="peer" name="district" id="districts">
                  <option value=""></option>
                </select>
              </FormControl>
              <FormControl>
                <label className="peer-focus" htmlFor="wards">
                  Chọn Phường/ Xã
                </label>
                <select className="peer" name="wards" id="wards">
                  <option value=""></option>
                </select>
              </FormControl>
              <FormControl>
                <label className="peer-focus" htmlFor="address">
                  Chọn Phường/ Xã
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="peer"
                />
              </FormControl>
            </form>
          </Address>
        </Col>
        <Col sm="4">
          <Method className="p-4">
            <Title>Phương thức thanh toán</Title>
          </Method>
        </Col>
        <Col sm="4">
          <ReviewCart>
            <CartItem />
          </ReviewCart>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2.5rem;
`;
const Address = styled.div`
  form {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2.5rem;
  }
`;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
`;
const FormControl = styled.div`
  position: relative;
  select,
  input {
    width: 100%;
    color: #000;
    font-size: 16px;
    outline: none;
    background-color: #fff;
    border-radius: 0.375rem;
    padding: 0.75rem 1rem;
    border: 1px solid #e5e7eb;
  }

  label {
    position: absolute;
    top: -0.75rem;
    left: 0.5rem;
    background-color: #fff;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #9ca3af;
    transition: all 0.3s;
  }

  .peer:focus ~ .peer-focus {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

const Method = styled.div``;
const ReviewCart = styled.div``;

export default Checkout;
