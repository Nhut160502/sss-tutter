import { Link } from "react-router-dom";
import { styled } from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <Top>
        <div className="item">
          <h2>ssstutter</h2>
          <h3>
            Với thông điệp "Refined Life", SSStutter mong muốn đem đến cho khách
            hàng một lối sống tinh gọn bằng các sản phẩm thời trang tinh tế.
          </h3>
        </div>
        <div className="item">
          <h2>chi nhánh hà nội</h2>
          <h3>
            105 - D6, ngõ 4B Đặng Văn Ngữ <br />
            70 Tô Hiến Thành
            <br />
            342 Cầu Giấy
            <br />
            46 Đông Các
          </h3>
        </div>
        <div className="item">
          <h2>Chi nhánh tp. Hồ Chí Minh</h2>
          <h3>
            Lầu 1, số 25, Nguyễn Trãi, Q1 <br />
            152 Nguyễn Gia Trí, Bình Thạnh
          </h3>
        </div>
        <div className="item">
          <h2>Chính sách</h2>
          <ul>
            <li>
              <Link>Về sản phẩm</Link>
            </li>
            <li>
              <Link>Chính sách bảo mật</Link>
            </li>
            <li>
              <Link>Chính sách đổi, trả hàng</Link>
            </li>
            <li>
              <Link>Chính sách giao hàng</Link>
            </li>
            <li>
              <Link>Chính sách thanh toán</Link>
            </li>
            <li>
              <Link>Chính sách thành viên</Link>
            </li>
          </ul>
        </div>
      </Top>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 40px 80px;
  background-color: #000;
  color: #fff;
`;
const Top = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  h2 {
    font-size: 20px;
    text-transform: uppercase;
  }
  h3 {
    font-size: 16px;
    padding: 16px 0;
    line-height: 1.5;
    font-weight: normal;
    width: 70%;
    text-align: justify;
  }
  a {
    color: #fff;
    font-size: 16px;
    padding: 16px 0;
    line-height: 1.5;
    font-weight: normal;
    width: 70%;
    text-align: justify;
  }
`;

export default Footer;
