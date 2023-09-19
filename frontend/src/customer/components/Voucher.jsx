import React, { useState } from "react";
import { styled } from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { hideOverlay } from "../providers/overlaySlice";
import { hideVoucher, setDataVoucher } from "../providers/voucherSlice";

const Voucher = () => {
  const dispatch = useDispatch();
  const voucherState = useSelector((state) => state?.voucher);
  const [activeInfor, setActiveInfor] = useState(false);
  const [infor, setInfor] = useState({ name: "", desc: "" });

  const hanleChoseVoucher = () => {
    dispatch(setDataVoucher(infor.name));
    dispatch(hideVoucher());
    dispatch(hideOverlay());
  };

  return (
    <Wrapper className={voucherState?.visibility && "active"}>
      <Title>
        <h3>Voucher của bạn</h3>
        <CloseOutlined
          onClick={() => {
            dispatch(hideOverlay());
            dispatch(hideVoucher());
          }}
        />
      </Title>
      <Content>
        <input type="text" id="code" placeholder="Nhập code" />
        <List>
          <p>Danh sách voucher</p>
          <div className="list-voucher">
            <div
              className="item-voucher"
              id="1"
              onClick={(e) => {
                setActiveInfor(true);
                setInfor({
                  name: "b2sss",
                  desc: "Giảm 269K khi mua 1 Vien Polo (trắng) + 1 Smart Pants",
                });
              }}
            >
              <input type="radio" hidden name="voucher" value="b2sss" />
              <div className="content-voucher">
                <h1>b2sss</h1>
              </div>
              <p>Giảm 269K khi mua 1 Vien Polo (trắng) + 1 Smart Pants</p>
            </div>

            <div
              className="item-voucher"
              id="1"
              onClick={(e) => {
                setActiveInfor(true);
                setInfor({
                  name: "b2ss",
                  desc: "Giảm 319K khi mua 1 Rugby Polo (trắng) + 1 Smart Pants",
                });
              }}
            >
              <input type="radio" hidden name="voucher" value="b2ss" />
              <div className="content-voucher">
                <h1>b2ss</h1>
              </div>
              <p>Giảm 319K khi mua 1 Rugby Polo (trắng) + 1 Smart Pants</p>
            </div>

            <div
              className="item-voucher"
              id="1"
              onClick={(e) => {
                setActiveInfor(true);
                setInfor({
                  name: "b2s",
                  desc: "Giảm 239K khi mua 1 Collar Shirt + 1 Smart Pants",
                });
              }}
            >
              <input type="radio" hidden name="voucher" value="b2s" />
              <div className="content-voucher">
                <h1>b2s</h1>
              </div>
              <p>Giảm 239K khi mua 1 Collar Shirt + 1 Smart Pants</p>
            </div>
          </div>
          <InforVoucher className={activeInfor && "active"}>
            <h4>
              Thông tin mã voucher
              <CloseOutlined onClick={() => setActiveInfor(false)} />
            </h4>
            <div className="infor">
              <h3>{infor.name}</h3>
              <p>{infor.desc}</p>
              <span>Hạn sử dụng:10/9/2023</span>
            </div>
            <Button black onClick={hanleChoseVoucher}>
              Chọn voucher
            </Button>
          </InforVoucher>
        </List>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  right: -100%;
  top: 0;
  z-index: 9999;
  background-color: #fff;
  width: 33%;
  height: 100vh;
  padding: 2.5rem;
  transition: all 0.4s;

  &.active {
    right: 0;
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  h3 {
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
  }
`;
const Content = styled.div`
  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #e5e7eb;
    background-color: #fff;
    border-radius: 0.5rem;
    color: #000;
  }
`;
const List = styled.div`
  position: relative;
  .list-voucher {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  p {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }
  .item-voucher {
    position: relative;
    height: 100%;
    cursor: pointer;
    width: 100%;
    border-radius: 0.25rem;
    padding: 0.5rem;
    border: 1px solid #e5e7eb;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 0;
    }
    &.active {
      border-color: #000;
    }
  }
  .content-voucher {
    background-image: url("https://ssstutter.com/img/ticket.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    padding-top: 18.75%;
    position: relative;
    h1 {
      font-size: 12px;
      position: absolute;
      color: #fff;
      text-transform: uppercase;
      left: 1rem;
      top: 35%;
      font-weight: 400;
    }
  }
`;
const InforVoucher = styled.div`
  padding: 1rem;
  margin-top: 2.5rem;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  position: absolute;
  width: calc(100% + 2.5rem);
  right: -150%;
  top: 0;
  background-color: #fff;
  transition: all 0.4s;
  &.active {
    right: 0;
  }
  h4 {
    font-size: 15px;
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    line-height: 1.75;
    svg {
      font-size: 20px;
    }
  }
  .infor {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0 0.5rem;
    border-left: 1px solid #e5e7eb;
    margin-bottom: 1rem;
    h3 {
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
    }
    p {
      margin-top: 0.5rem;
      font-size: 12px;
    }
    span {
      font-size: 12px;
      color: #9ca3af;
      font-style: italic;
    }
  }
  button {
    padding: 0.25rem;
    font-size: 14px;
  }
`;
export default Voucher;
