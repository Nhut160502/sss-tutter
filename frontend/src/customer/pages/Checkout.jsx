import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import Button from "../components/Button";
import Voucher from "../components/Voucher";
import Overlay from "../components/Overlay";
import { useDispatch, useSelector } from "react-redux";
import {
  hideVoucher,
  visibleVoucher,
  removeDataVoucher,
} from "../providers/voucherSlice";
import { hideOverlay, visibleOverlay } from "../providers/overlaySlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const voucherState = useSelector((state) => state?.voucher);
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    provinceId: "",
    districtId: "",
    wardId: "",
    address: "",
    method: "",
  });

  const handleClickVoucher = () => {
    dispatch(visibleVoucher());
    dispatch(visibleOverlay());
  };

  const hanldeChangeInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const refresh = () => window.location.reload(true);
    if (refresh) {
      dispatch(hideVoucher());
      dispatch(hideOverlay());
      dispatch(removeDataVoucher());
    }
  }, [dispatch]);

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
                  onChange={hanldeChangeInput}
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
                <input
                  onChange={hanldeChangeInput}
                  type="text"
                  name="email"
                  id="email"
                  className="peer"
                />
              </FormControl>
              <FormControl>
                <label className="peer-focus" htmlFor="phoneNumber">
                  Số Điện Thoại
                </label>
                <input
                  onChange={hanldeChangeInput}
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="peer"
                />
              </FormControl>
              <FormControl>
                <label className="peer-focus" htmlFor="provinceId">
                  Chọn Tỉnh/ Thành Phố
                </label>
                <select
                  onChange={hanldeChangeInput}
                  className="peer"
                  name="provinceId"
                  id="provinceId"
                >
                  <option value=""></option>
                  <option value="tinh1">Kiên Giang</option>
                  <option value="tinh2">Cần Thơ</option>
                </select>
              </FormControl>
              <FormControl>
                <label className="peer-focus" htmlFor="districtId">
                  Chọn Quận/ Huyện
                </label>
                <select
                  onChange={hanldeChangeInput}
                  className="peer"
                  name="districtId"
                  id="districtId"
                >
                  <option value=""></option>
                  <option value="huyen1">U Minh Thượng</option>
                  <option value="huyen2">Rạch Giá</option>
                </select>
              </FormControl>
              <FormControl>
                <label className="peer-focus" htmlFor="wardId">
                  Chọn Phường/ Xã
                </label>
                <select
                  onChange={hanldeChangeInput}
                  className="peer"
                  name="wardId"
                  id="wardId"
                >
                  <option value=""></option>
                  <option value="xa1">Xã Hòa Chánh</option>
                  <option value="xa2">Xã Vĩnh Hòa</option>
                </select>
              </FormControl>
              <FormControl>
                <label className="peer-focus" htmlFor="address">
                  Số Nhà, Tên Đường
                </label>
                <input
                  onChange={hanldeChangeInput}
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
            <form action="">
              <label htmlFor="banking" className="form-control">
                <input
                  type="radio"
                  name="method"
                  id="banking"
                  onChange={hanldeChangeInput}
                  value="banking"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--twemoji"
                  width="20"
                  height="20"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 36 36"
                >
                  <path
                    fill="#3B88C3"
                    d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"
                  ></path>
                  <path fill="#BBDDF5" d="M0 10h36v17H0z"></path>
                  <path
                    fill="#269"
                    d="M5.297 13.74c.272-.736.896-1.329 1.713-1.329c.848 0 1.44.561 1.712 1.329l3.137 8.708c.096.256.128.48.128.593c0 .624-.512 1.056-1.105 1.056c-.672 0-1.008-.352-1.168-.832l-.48-1.505h-4.45l-.48 1.489c-.16.496-.497.848-1.153.848c-.64 0-1.184-.479-1.184-1.12c0-.256.08-.448.112-.528l3.218-8.709zm.177 5.81h3.041l-1.489-4.642h-.032l-1.52 4.642zm8.991-4.738H12.72c-.768 0-1.088-.561-1.088-1.104c0-.561.4-1.104 1.088-1.104h5.89c.688 0 1.089.544 1.089 1.104c0 .544-.32 1.104-1.089 1.104h-1.745v8.035c0 .8-.512 1.248-1.2 1.248s-1.201-.448-1.201-1.248v-8.035zm7.568-1.072c.096-.576.72-1.232 1.568-1.232c.801 0 1.424.576 1.601 1.152l1.89 6.338h.031l1.889-6.338c.176-.576.801-1.152 1.6-1.152c.85 0 1.473.656 1.57 1.232l1.488 8.932c.016.096.016.191.016.271c0 .704-.512 1.152-1.152 1.152c-.816 0-1.137-.368-1.248-1.12l-.945-6.515h-.031l-1.922 6.707c-.111.384-.416.928-1.279.928c-.865 0-1.169-.544-1.281-.928l-1.92-6.707h-.033l-.943 6.515c-.113.752-.433 1.12-1.249 1.12c-.64 0-1.152-.448-1.152-1.152c0-.08 0-.176.017-.271l1.485-8.932z"
                  ></path>
                </svg>
                <p>
                  Thanh toán thẻ (ATM, Visa)
                  <span>Ưu đãi giảm 10k khi thanh toán</span>
                </p>
              </label>
              <label htmlFor="wallet" className="form-control">
                <input
                  onChange={hanldeChangeInput}
                  type="radio"
                  name="method"
                  id="wallet"
                  value="wallet"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--fluent"
                  width="20"
                  height="20"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M18.963 4.188a.5.5 0 0 1 .705-.08l1.08.866L16.799 10h2.544l2.968-3.776l2.504 2.006a.5.5 0 0 1 .066.717L23.973 10h2.614a2.5 2.5 0 0 0-.522-3.331l-5.147-4.122a2.5 2.5 0 0 0-3.522.399L11.809 10h2.551l4.603-5.812ZM21 19a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3ZM6 7a3 3 0 0 0-3 3v14.5A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-9a4.5 4.5 0 0 0-4.5-4.5H6a1 1 0 1 1 0-2h4.58l1.596-2H6ZM5 24.5V12.83c.313.11.65.17 1 .17h18.5a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 5 24.5Z"
                  ></path>
                </svg>
                <p>Thanh toán bằng ví điện tử (OnePay, MoMo,...)</p>
              </label>
              <label htmlFor="cod" className="form-control">
                <input
                  onChange={hanldeChangeInput}
                  type="radio"
                  name="method"
                  id="cod"
                  value="cod"
                />
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_675_5238"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    style={{ maskType: "alpha" }}
                  >
                    <rect width="24" height="24" fill="#D9D9D9"></rect>
                  </mask>
                  <g mask="url(#mask0_675_5238)">
                    <path
                      d="M5.84619 19.125C5.11286 19.125 4.49219 18.871 3.98419 18.363C3.47552 17.8543 3.22119 17.2333 3.22119 16.5H1.84619V6.625C1.84619 6.15833 2.00052 5.771 2.30919 5.463C2.61719 5.15433 2.99619 5 3.44619 5H16.6962V8.625H18.9962L22.4462 13.275V16.5H20.8462C20.8462 17.2333 20.5922 17.8543 20.0842 18.363C19.5755 18.871 18.9545 19.125 18.2212 19.125C17.4879 19.125 16.8672 18.871 16.3592 18.363C15.8505 17.8543 15.5962 17.2333 15.5962 16.5H8.44619C8.44619 17.2333 8.19219 17.8543 7.68419 18.363C7.17553 18.871 6.56286 19.125 5.84619 19.125ZM5.84619 18.125C6.29619 18.125 6.67552 17.9667 6.98419 17.65C7.29219 17.3333 7.44619 16.95 7.44619 16.5C7.44619 16.05 7.29219 15.6667 6.98419 15.35C6.67552 15.0333 6.29619 14.875 5.84619 14.875C5.39619 14.875 5.01286 15.0333 4.69619 15.35C4.37952 15.6667 4.22119 16.05 4.22119 16.5C4.22119 16.95 4.37952 17.3333 4.69619 17.65C5.01286 17.9667 5.39619 18.125 5.84619 18.125ZM2.84619 15.5H3.49619C3.62952 15.0667 3.91719 14.6877 4.35919 14.363C4.80052 14.0377 5.29619 13.875 5.84619 13.875C6.36286 13.875 6.84619 14.0333 7.29619 14.35C7.74619 14.6667 8.04619 15.05 8.19619 15.5H15.6962V6H3.44619C3.29619 6 3.15886 6.06267 3.03419 6.188C2.90886 6.31267 2.84619 6.45833 2.84619 6.625V15.5ZM18.2212 18.125C18.6712 18.125 19.0545 17.9667 19.3712 17.65C19.6879 17.3333 19.8462 16.95 19.8462 16.5C19.8462 16.05 19.6879 15.6667 19.3712 15.35C19.0545 15.0333 18.6712 14.875 18.2212 14.875C17.7712 14.875 17.3879 15.0333 17.0712 15.35C16.7545 15.6667 16.5962 16.05 16.5962 16.5C16.5962 16.95 16.7545 17.3333 17.0712 17.65C17.3879 17.9667 17.7712 18.125 18.2212 18.125ZM16.6962 13.5H21.3962L18.4462 9.625H16.6962V13.5Z"
                      fill=""
                    ></path>
                  </g>
                </svg>
                <p>Thanh toán khi nhận hàng (COD)</p>
              </label>
            </form>
          </Method>
        </Col>
        <Col sm="4">
          <ReviewCart>
            <CartItem />
            <div className="item">
              <Row>
                <Col sm="4">
                  <img
                    src="https://dashboard.leanow.vn/upload/7-2023/1690810104307.webp"
                    alt=""
                  />
                </Col>
                <Col sm="8">
                  <h5>Miễn phí vận chuyển</h5>
                  <p>FREESHIP ĐƠN HÀNG 499K</p>
                  <p>ĐỒNG GIÁ 30K PHÍ SHIP TOÀN QUỐC</p>
                </Col>
              </Row>
            </div>
            <Bottom>
              <div className="item" style={{ padding: ".5rem 0" }}>
                <p>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_538_6594"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                      style={{ maskType: "alpha" }}
                    >
                      <rect width="24" height="24" fill=""></rect>
                    </mask>
                    <g mask="url(#mask0_538_6594)">
                      <path
                        d="M9.2 16L12 13.9L14.75 16L13.7 12.6L16.5 10.4H13.1L12 7L10.9 10.4H7.5L10.25 12.6L9.2 16ZM4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.196 19.021 2 18.55 2 18V14C2.55 14 3.021 13.804 3.413 13.412C3.80433 13.0207 4 12.55 4 12C4 11.45 3.80433 10.979 3.413 10.587C3.021 10.1957 2.55 10 2 10V6C2 5.45 2.196 4.97933 2.588 4.588C2.97933 4.196 3.45 4 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.8043 4.97933 22 5.45 22 6V10C21.45 10 20.979 10.1957 20.587 10.587C20.1957 10.979 20 11.45 20 12C20 12.55 20.1957 13.0207 20.587 13.412C20.979 13.804 21.45 14 22 14V18C22 18.55 21.8043 19.021 21.413 19.413C21.021 19.8043 20.55 20 20 20H4ZM4 18H20V15.45C19.3833 15.0833 18.896 14.596 18.538 13.988C18.1793 13.3793 18 12.7167 18 12C18 11.2833 18.1793 10.6207 18.538 10.012C18.896 9.404 19.3833 8.91667 20 8.55V6H4V8.55C4.61667 8.91667 5.10433 9.404 5.463 10.012C5.821 10.6207 6 11.2833 6 12C6 12.7167 5.821 13.3793 5.463 13.988C5.10433 14.596 4.61667 15.0833 4 15.45V18Z"
                        fill=""
                      ></path>
                    </g>
                  </svg>
                  <span>Voucher</span>
                </p>
                <Button onClick={handleClickVoucher}>
                  {voucherState.data || "Nhấn vào đây để chọn"}
                </Button>
                <Button black>Áp dụng</Button>
              </div>
              <div className="item">
                <h5>Tổng đơn</h5>
                <h1>449,000</h1>
              </div>
              <div className="item">
                <h5>Ưu đãi (voucher / thành viên)</h5>
                <p>- 0</p>
              </div>
              <div className="item">
                <h5>Phí ship</h5>
                <p>30,000</p>
              </div>
              <div className="btn-submit">
                <div>
                  <h1>thành tiền</h1>
                  <h1>497,000</h1>
                </div>
                <Button black>Hoàn tât đơn hàng</Button>
              </div>
            </Bottom>
          </ReviewCart>
        </Col>
      </Row>
      <Voucher />
      <Overlay
        active={voucherState?.visibility}
        onClick={() => {
          dispatch(hideOverlay());
          dispatch(hideVoucher());
        }}
      />
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

const Method = styled.div`
  padding: 1.5rem 4rem !important;
  form {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .form-control {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 1rem;
    cursor: pointer;
    p {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      span {
        color: rgb(21 128 61);
      }
    }
  }
`;
const ReviewCart = styled.div`
  > .item {
    padding: 1rem;
    max-height: 45vh;
    overflow-y: auto;
    width: 100%;
    img {
      width: 100%;
    }
    h5 {
      font-size: 14px;
      font-weight: 700;
    }
    p {
      font-size: 14px;
      text-transform: uppercase;
      line-height: 1.75;
    }
  }
`;

const Bottom = styled.div`
  padding: 2rem 1rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h1 {
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
  }
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      width: auto;
      font-size: 12px;
      padding: 0.5rem;
    }
    h5 {
      font-size: 14px;
      font-weight: 400;
    }
    p {
      display: flex;
      gap: 0.5rem;
      span {
        font-size: 14px;
      }
    }
  }
  .btn-submit {
    > div {
      margin-bottom: 1.25rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export default Checkout;
