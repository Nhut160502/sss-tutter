import { styled } from "styled-components";
import Button from "../components/Button";
function Lookbook() {
  return (
    <Wrapper>
      <Title>
        <h1>Lookbook</h1>
      </Title>
      <Content>
        <Item
          style={{
            backgroundImage: `url("https://dashboard.leanow.vn/upload/7-2023/1690294640922.webp")`,
          }}
        >
          <div className="infor">
            <h2>
              Sky, Sea and Shore” - SSS sẵn lòng đồng hành cùng bạn trong chuyến
              đi chạy trốn mùa hè và tìm kiếm sự bình yên trong tâm trí
            </h2>
            <h1>Summer Escapism</h1>
            <div>
              <Button>Xem Thêm</Button>
            </div>
          </div>
        </Item>
        <Item
          style={{
            backgroundImage: `url("https://dashboard.leanow.vn/upload/7-2023/1690294640922.webp")`,
          }}
        >
          <div className="infor">
            <h2>
              Sky, Sea and Shore” - SSS sẵn lòng đồng hành cùng bạn trong chuyến
              đi chạy trốn mùa hè và tìm kiếm sự bình yên trong tâm trí
            </h2>
            <h1>Summer Escapism</h1>
            <div>
              <Button>Xem Thêm</Button>
            </div>
          </div>
        </Item>
        <Item
          style={{
            backgroundImage: `url("https://dashboard.leanow.vn/upload/7-2023/1690294640922.webp")`,
          }}
        >
          <div className="infor">
            <h2>
              Sky, Sea and Shore” - SSS sẵn lòng đồng hành cùng bạn trong chuyến
              đi chạy trốn mùa hè và tìm kiếm sự bình yên trong tâm trí
            </h2>
            <h1>Summer Escapism</h1>
            <div>
              <Button>Xem Thêm</Button>
            </div>
          </div>
        </Item>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Title = styled.div`
  h1 {
    padding: 3.5rem;
    font-size: 2.25rem;
    line-height: 2.5rem;
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
  }
`;
const Content = styled.div`
  padding: 3.5rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
`;

const Item = styled.div`
  padding-top: 125%;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  .infor {
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    position: absolute;
    place-content: center;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.4s;

    &:hover {
      opacity: 1;
    }

    h1 {
      margin-top: 2.5rem;
      font-size: 3rem;
      font-weight: 700;
      line-height: 1;
      color: #fff;
      text-align: center;
      text-transform: uppercase;
    }
    h2 {
      padding: 2rem;
      font-size: 1.5rem;
      line-height: 2rem;
      color: #fff;
      text-align: center;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        background-color: transparent;
        width: auto;
        margin-top: 2.5rem;
        border-width: 2px;
        border-color: #fff;
        color: #fff;
        font-weight: 700;
      }
    }
  }
`;

export default Lookbook;
