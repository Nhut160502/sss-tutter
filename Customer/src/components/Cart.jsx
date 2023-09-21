import { styled } from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { hideCart } from "../providers/cartSlice";
import { hideOverlay } from "../providers/overlaySlice";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const visibility = useSelector((state) => state?.cart?.visibility);
  const handleCloseCart = () => {
    dispatch(hideCart());
    dispatch(hideOverlay());
  };

  const handleSubmit = () => {
    navigate("/checkout");
    dispatch(hideCart());
    dispatch(hideOverlay());
  };
  return (
    <Wrapper className={visibility && "active"}>
      <Title>
        <span>Giỏ hàng</span>
        <CloseOutlined onClick={handleCloseCart} />
      </Title>
      <CartItem />
      {/* <Empty>Giỏ hàng chưa có sản phẩm</Empty> */}
      <Bottom>
        <div className="desc">
          <span>Thành Tiền</span>
          <span className="price">499,000</span>
        </div>
        <div className="btn-submit">
          <Button black onClick={handleSubmit}>
            Thanh Toán
          </Button>
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

// const Empty = styled.li`
//   padding: 2.5rem;
//   list-style: disc;
//   font-size: 14px;
//   line-height: 1.5;
//   text-align: center;
// `;

export default Cart;
