import { styled } from "styled-components";
import Slibar from "../components/Slibar";
import {} from "@ant-design/icons";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Blog from "../components/Blog";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
};

var settingsStyle = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
};

var settingsBlog = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
};

var settingsBanner = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
};

function Home() {
  return (
    <Wrapper>
      <Slibar />
      <Shipping>
        <ul>
          <li>
            <a href="/">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="gray"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_538_6594"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill=""></rect>
                </mask>
                <g mask="url(#mask0_538_6594)">
                  <path
                    d="M9.2 16L12 13.9L14.75 16L13.7 12.6L16.5 10.4H13.1L12 7L10.9 10.4H7.5L10.25 12.6L9.2 16ZM4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.196 19.021 2 18.55 2 18V14C2.55 14 3.021 13.804 3.413 13.412C3.80433 13.0207 4 12.55 4 12C4 11.45 3.80433 10.979 3.413 10.587C3.021 10.1957 2.55 10 2 10V6C2 5.45 2.196 4.97933 2.588 4.588C2.97933 4.196 3.45 4 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.8043 4.97933 22 5.45 22 6V10C21.45 10 20.979 10.1957 20.587 10.587C20.1957 10.979 20 11.45 20 12C20 12.55 20.1957 13.0207 20.587 13.412C20.979 13.804 21.45 14 22 14V18C22 18.55 21.8043 19.021 21.413 19.413C21.021 19.8043 20.55 20 20 20H4ZM4 18H20V15.45C19.3833 15.0833 18.896 14.596 18.538 13.988C18.1793 13.3793 18 12.7167 18 12C18 11.2833 18.1793 10.6207 18.538 10.012C18.896 9.404 19.3833 8.91667 20 8.55V6H4V8.55C4.61667 8.91667 5.10433 9.404 5.463 10.012C5.821 10.6207 6 11.2833 6 12C6 12.7167 5.821 13.3793 5.463 13.988C5.10433 14.596 4.61667 15.0833 4 15.45V18Z"
                    fill=""
                  ></path>
                </g>
              </svg>
              <p>
                Giảm <strong>15%</strong>
              </p>
              <div class="item">
                <p>
                  Nhập mã: <strong> HELLO</strong>.
                </p>
                <p>ĐH ĐẦU TIÊN TỪ 699K</p>
              </div>
            </a>
          </li>
          <li>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="40"
                height="40"
                fill="gray"
              >
                <path d="M19,5H17V4a3,3,0,0,0-3-3H3A3,3,0,0,0,0,4V19H2.041A3.465,3.465,0,0,0,2,19.5a3.5,3.5,0,0,0,7,0,3.465,3.465,0,0,0-.041-.5h6.082a3.465,3.465,0,0,0-.041.5,3.5,3.5,0,0,0,7,0,3.465,3.465,0,0,0-.041-.5H24V10A5.006,5.006,0,0,0,19,5Zm0,2a3,3,0,0,1,3,3v1H17V7ZM7,19.5a1.5,1.5,0,0,1-3,0,1.418,1.418,0,0,1,.093-.5H6.907A1.418,1.418,0,0,1,7,19.5ZM15,17H2V4A1,1,0,0,1,3,3H14a1,1,0,0,1,1,1Zm5,2.5a1.5,1.5,0,0,1-3,0,1.41,1.41,0,0,1,.093-.5h2.814A1.41,1.41,0,0,1,20,19.5ZM17,17V13h5v4Z"></path>
              </svg>
              <p>FREESHIP toàn quốc ĐƠN 499K</p>
            </a>
          </li>
          <li>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="40"
                height="40"
                fill="gray"
              >
                <path d="M20,16V5a3,3,0,0,1,3-3,1,1,0,0,0,0-2,5.006,5.006,0,0,0-5,5V16.279l-2.734.912a3,3,0,0,0-.156-1l-1.553-5.1A3.007,3.007,0,0,0,9.788,9.142l-6.7,2.13A3.013,3.013,0,0,0,1.129,15l1.634,5.373a2.966,2.966,0,0,0,.457.831l-2.536.845a1,1,0,0,0,.632,1.9L16.1,19.023A4.017,4.017,0,0,0,19.974,24C25.232,23.864,25.255,16.169,20,16ZM4.662,19.748,3.043,14.421A1.006,1.006,0,0,1,3.7,13.178l6.7-2.13a1,1,0,0,1,1.252.638L13.2,16.792l.011.031a1,1,0,0,1-.508,1.221l-6.888,2.3A1,1,0,0,1,4.662,19.748ZM19.974,22a2,2,0,0,1,0-4A2,2,0,0,1,19.974,22ZM10.05,14A1,1,0,0,1,9.4,15.256l-2.464.785a1,1,0,0,1-.606-1.907l2.465-.784A1,1,0,0,1,10.05,14Z"></path>
              </svg>
              <p>ĐỔI HÀNG trong vòng 30 NGÀY</p>
            </a>
          </li>
        </ul>
      </Shipping>
      <NewArrivals>
        <Title>
          <h2>What's NEW?</h2>
        </Title>
        <Content>
          <Slider {...settings}>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </Slider>
        </Content>
      </NewArrivals>
      <BestSeller>
        <Title>
          <h2>BEST SELLER</h2>
        </Title>
        <Category>
          <ul>
            <li>
              <span>Sơ Mi</span>
            </li>
            <li>
              <span>Quần</span>
            </li>
            <li>
              <span>Áo thun</span>
            </li>
            <li>
              <span>Áo Khoác</span>
            </li>
          </ul>
        </Category>
        <Row>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
        </Row>
      </BestSeller>
      <Banner>
        <Slider {...settingsBanner}>
          <Link to="/">
            <img
              src="https://dashboard.leanow.vn/upload/7-2023/1690525659062.webp"
              alt=""
            />
          </Link>
          <Link to="/">
            <img
              src="https://dashboard.leanow.vn/upload/7-2023/1690525659062.webp"
              alt=""
            />
          </Link>
          <Link to="/">
            <img
              src="https://dashboard.leanow.vn/upload/7-2023/1690525659062.webp"
              alt=""
            />
          </Link>
        </Slider>
      </Banner>
      <StylePick>
        <Title>
          <h2>STYLE PICK!</h2>
        </Title>
        <Content>
          <Slider {...settingsStyle}>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </Slider>
        </Content>
      </StylePick>
      <Lookbook>
        <Title>
          <h2>LOOKBOOK</h2>
        </Title>
        <Row>
          <Col sm="6">
            <Link to="/">
              <img
                src="https://dashboard.leanow.vn/upload/7-2023/1690294640922.webp"
                alt=""
              />
              <h3>Summer Escapism</h3>
            </Link>
          </Col>
          <Col sm="6">
            <Link to="/">
              <img
                src="https://dashboard.leanow.vn/upload/6-2023/1686979068006.webp"
                alt=""
              />
              <h3>Summer Escapism</h3>
            </Link>
          </Col>
          <Col sm="6">
            <Link to="/">
              <img
                src="https://dashboard.leanow.vn/upload/5-2023/1684900801794.webp"
                alt=""
              />
            </Link>
            <h3>Keep It Classic</h3>
          </Col>
          <Col sm="6">
            <Link to="/">
              <img
                src="https://dashboard.leanow.vn/upload/5-2023/1683304629389.webp"
                alt=""
              />
              <h3>Cat & Rabbit Collection</h3>
            </Link>
          </Col>
        </Row>
      </Lookbook>
      <BlogWrapper>
        <Title>
          <h2>BLOG</h2>
        </Title>
        <Slider {...settingsBlog}>
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </Slider>
      </BlogWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Shipping = styled.div`
  padding: 0.5rem;
  ul {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .item {
        }
        > p {
          margin: 0 5px;
        }
        p {
          margin-bottom: 0;
          color: #9ca3af;
        }
        strong {
          color: #000;
        }
        svg {
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      & + li {
        border-left: 1px solid #000;
      }
    }
  }
`;
const NewArrivals = styled.div``;
const Content = styled.div`
  padding: 40px 80px;
`;
const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 56px;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      cursor: pointer;
      text-transform: uppercase;
      margin: 0 20px;
      span {
        font-size: 20px;
        font-weight: 500;
      }
    }
  }
`;
const BestSeller = styled.div`
  padding: 0 16px;
`;
const Banner = styled.div`
  padding-top: 13rem;
  padding-bottom: 13rem;
  img {
    width: 100%;
  }
`;
const StylePick = styled.div``;
const Lookbook = styled.div`
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 16 / 9;
  }
  h3 {
    text-transform: uppercase;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
  }
`;
const BlogWrapper = styled.div``;
const Title = styled.div`
  padding: 4rem;
  text-align: center;
  h2 {
    font-size: 3rem;
    font-weight: 700;
  }
`;

export default Home;
