import { styled } from "styled-components";
import Button from "../components/Button";

function Voucher() {
  return (
    <Wrapper>
      <Banner
        style={{
          backgroundImage: `url("https://dashboard.leanow.vn/upload/7-2023/1688887696018.webp")`,
        }}
      ></Banner>
      <Content>
        <h2>Voucher Tặng Bạn</h2>
        <span>
          Những ưu đãi hấp dẫn mà SSS. dành riêng cho bạn trên Website
        </span>
        <ul>
          <Item>
            <div
              className="image"
              style={{
                backgroundImage: `url("https://ssstutter.com/img/ticket.png")`,
              }}
            >
              <h3>b2sss</h3>
            </div>
            <div className="infor">
              <h2>Combo 499K: Back to School - Smile</h2>
              <p>Giảm 269K khi mua 1 Vien Polo (trắng) + 1 Smart Pants</p>
              <span>Hạn sử dụng :10/9/2023</span>
            </div>
            <Button>Xem thêm</Button>
          </Item>
          <Item>
            <div
              className="image"
              style={{
                backgroundImage: `url("https://ssstutter.com/img/ticket.png")`,
              }}
            >
              <h3>b2sss</h3>
            </div>
            <div className="infor">
              <h2>Combo 499K: Back to School - Smile</h2>
              <p>Giảm 269K khi mua 1 Vien Polo (trắng) + 1 Smart Pants</p>
              <span>Hạn sử dụng :10/9/2023</span>
            </div>
            <Button>Xem thêm</Button>
          </Item>
        </ul>
      </Content>

      <Instruct>
        <h4>Hướng dẫn sử dụng voucher</h4>
        <div className="content">
          <img
            src="https://dashboard.leanow.vn/upload/10-2022/1664956422043.webp"
            alt=""
          />
          <img
            src="https://dashboard.leanow.vn/upload/10-2022/1664956426864.webp"
            alt=""
          />
          <img
            src="https://dashboard.leanow.vn/upload/10-2022/1664956431571.webp"
            alt=""
          />
          <img
            src="https://dashboard.leanow.vn/upload/10-2022/1664957500403.webp"
            alt=""
          />
          <img
            src="https://dashboard.leanow.vn/upload/10-2022/1664956439959.webp"
            alt=""
          />
        </div>
      </Instruct>
      <Desc></Desc>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Banner = styled.div`
  width: 100%;
  padding-top: 18.5%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Content = styled.div`
  padding: 2.5rem;

  > h2 {
    font-size: 1.5rem;
    line-height: 2rem;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
  }

  > span {
    display: block;
    font-size: 17px;
    text-align: center;
  }

  ul {
    padding: 2.5rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.5rem;
  }
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: repeat(5, minmax(0px, 1fr));
  gap: 1rem;
  padding: 1rem;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 0.25rem;
  .image {
    position: relative;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    padding-top: 18.5%;
    grid-column: span 2 / span 2;

    h3 {
      position: absolute;
      font-size: 1.25rem;
      line-height: 1.75rem;
      top: 45%;
      color: #fff;
      width: 80%;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }
  }

  .infor {
    grid-column: span 2 / span 2;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-left: 1px solid rgb(229, 231, 235);
    h2 {
      font-size: 16px;
      font-weight: 800;
      line-height: 1.5;
    }
    p {
      font-size: 14px;
      line-height: 1.5;
      font-weight: 600;
    }

    span {
      font-style: italic;
      font-size: 14px;
      color: #9ca3af;
    }
  }

  button {
    width: auto;
    height: 35%;
    margin: auto;
  }
`;

const Instruct = styled.div`
  h4 {
    font-size: 1.5rem;
    line-height: 2rem;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
  }
  .content {
    padding: 2.5rem;
    gap: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    img {
      width: 25%;
    }
  }
`;

const Desc = styled.div`
  padding: 2.5rem;
`;

export default Voucher;
