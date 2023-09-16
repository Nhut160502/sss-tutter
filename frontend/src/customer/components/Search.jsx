import { styled } from "styled-components";
import { ArrowLeftOutlined } from "@ant-design/icons";
function Search() {
  return (
    <Wrapper>
      <Header>
        <ArrowLeftOutlined />
        <input type="text" placeholder="Tiềm kiếm sản phẩm" />
      </Header>
      <Title>Tìm thấy 62 sản phẩm</Title>
      <Content></Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
`;
const Header = styled.div`
  padding: 2.5rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 28px;
    height: 30px;
  }

  input {
    width: 95%;
    height: 46px;
    border: none;
    border-bottom: 1px solid #eee;
    padding: 12px 16px;
  }
`;
const Title = styled.h1`
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding: 2.5rem;
`;
const Content = styled.div``;
export default Search;
