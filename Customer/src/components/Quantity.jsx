import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { styled } from "styled-components";
function Quantity({ value }) {
  return (
    <Wrapper>
      <button className="minus">
        <MinusOutlined />
      </button>
      <input type="number" value={value || 1} onChange={() => console.log()} />
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
  gap: 1rem;
  button {
    background-color: #fff;
    border: none;
    color: #000;
    font-size: 12px;
  }
  input {
    background-color: #fff;
    width: 100%;
    /* padding: 0 30px; */
    text-align: center;
    height: 28px;
    border: none;
    color: #000;
  }
`;
export default Quantity;
