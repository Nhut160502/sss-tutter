import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Blog = () => {
  return (
    <Wrapper>
      <Link>
        <Image
          style={{
            backgroundImage: `url("https://dashboard.leanow.vn/upload/7-2022/1658191371633.webp")`,
          }}
        ></Image>
        <Infor>
          <h4>
            NHỮNG CHIẾC QUẦN SHORT BERMUDA LÀ NHỮNG MẢNH GHÉP ĐẦU TIÊN TRONG QUÁ
            TRÌNH HÌNH THÀNH VÀ PHÁT TRIỂN HÌNH DÁNG CỦA NHỮNG CHIẾC QUẦN SHORT
            HIỆN ĐẠI
          </h4>
          <h3>BERMUDA SHORT - TIỀN ĐỀ CHO NHỮNG CHIẾC QUẦN SHORT SAU NÀY</h3>
        </Infor>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 0.75rem;
  a {
    display: block;
  }
`;
const Image = styled.div`
  display: block;
  width: 100%;
  padding-top: 56.25%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const Infor = styled.div`
  position: absolute;
  color: #fff;
  top: 2.5rem;
  left: 2.5rem;
  padding: 1rem;
  right: 1rem;
  h4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 15px;
    text-align: justify;
  }
  h3 {
    margin-top: 64px;
    font-size: 36px;
    font-weight: 700;
  }
`;

export default Blog;
