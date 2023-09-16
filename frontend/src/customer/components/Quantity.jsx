import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { styled } from "styled-components";
function Quantity({ value }) {
  return (
    <Wrapper>
      <button className="minus">
        <MinusOutlined />
      </button>
      <input type="number" value={value || 1} />
      <button className="plus">
        <PlusOutlined />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  position: relative;
  button {
    position: absolute;
    border: none;
    background-color: transparent;
    font-size: 12px;
  }
  button {
    &.minus {
      left: 0;
      padding-left: 10px;
    }
    &.plus {
      right: 0;
      padding-right: 10px;
    }
  }
  input {
    width: 100%;
    padding: 0 30px;
    text-align: center;
    height: 40px;
    border: none;
  }
`;
export default Quantity;
