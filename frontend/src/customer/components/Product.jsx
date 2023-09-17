import { styled } from "styled-components";
function Product() {
  return (
    <Wrapper>
      <Image>
        <img
          src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/092023/1694710267329.webp"
          alt=""
        />
        <img className="new" src="https://ssstutter.com/img/mark.png" alt="" />
        <span>42%</span>
      </Image>
      <Infor>
        <div className="top">
          <h4 className="name">Smart tee fit</h4>
          <h4 className="price">499,000</h4>
        </div>
        <div className="color">
          <span>3 màu</span>
        </div>
      </Infor>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
`;
const Image = styled.div`
  position: relative;
  img {
    width: 100%;
  }
  span {
    position: absolute;
    background-color: rgb(197, 12, 12);
    left: 0;
    top: 10px;
    padding: 4px 8px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
  }
  .new {
    position: absolute;
    right: 0;
    top: 0;
    width: 64px;
    height: 64px;
  }
`;
const Infor = styled.div`
  padding: 16px 0;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4 {
      line-height: 1.75rem;
      color: #000;
      text-transform: uppercase;
      &.name {
        font-size: 18px;
      }
      &.price {
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
  .color {
    span {
      font-size: 14px;
      color: #00000080;
    }
  }
`;

export default Product;
