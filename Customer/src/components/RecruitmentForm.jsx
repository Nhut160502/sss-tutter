import React from "react";
import { styled } from "styled-components";
import FormControl from "./FormControl";
import Button from "./Button";
import { useSelector } from "react-redux";

const RecruitmentForm = ({ name }) => {
  const recruitment = useSelector((state) => state?.recruitment?.visibility);
  return (
    <Wrapper className={recruitment && "active"}>
      <h1>ứng tuyển online</h1>
      <Content>
        <Left>
          <h2>
            Vị trí: <strong>{name}</strong>
          </h2>
          <p>
            Địa chỉ làm việc: <strong>Đống Đa, Hà Nội</strong>
          </p>
          <p>
            Ứng viên có thể gửi CV và portfolio (nếu có) về địa chỉ email:
            <strong>tuyendung.ssstutter@gmail.com</strong>
          </p>
          <p>
            Với tiêu đề email và tên CV với cú pháp :
            <strong>
              [HN] - [Vị trí ứng tuyển] - [Họ và tên] (Ví dụ: HN – Graphic
              Designer – Nguyễn Văn A).
            </strong>
          </p>
        </Left>
        <Right>
          <h2>Thông tin của bạn</h2>
          <form action="">
            <FormControl label="Họ Và Tên" id="fullName" name="fullName" />
            <FormControl
              label="số điện thoại"
              id="phoneNumber"
              name="phoneNumber"
              type="number"
            />
            <FormControl label="Email" id="email" name="email" />
            <FormControl
              label="vị trí ứng tuyển"
              id="position"
              name="position"
            />
            <FormControl label="CV của bạn" type="file" />
          </form>
        </Right>
      </Content>
      <Button black>gửi</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  background-color: #fff;
  right: -100%;
  top: 50%;
  transform: translateX(50%) translateY(-50%);
  width: 80vw;
  padding: 2.5rem;
  transition: all 0.4s;
  z-index: 9999;
  h1 {
    font-size: 1.5rem;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
  }

  button {
    width: 33.33333%;
    margin: auto;
  }

  &.active {
    right: 50%;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1.5rem;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  width: 50%;
  h2 {
    font-size: 17px;
    font-weight: 400;

    strong {
      text-transform: capitalize;
      font-size: 16px;
    }
  }
  p {
    font-size: 14px;
  }
`;
const Right = styled.div`
  width: 50%;
  h2 {
    margin-bottom: 2.5rem;
    font-size: 1.25rem;
    text-transform: uppercase;
    font-weight: 400;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
`;

export default RecruitmentForm;
