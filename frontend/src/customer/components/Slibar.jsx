import Slider from "react-slick";
import { styled } from "styled-components";

function Slibar() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <Item>
          <img
            src="https://dashboard.leanow.vn/upload/9-2023/1694794642295.webp"
            alt=""
          />
        </Item>
        <Item>
          <img
            src="https://dashboard.leanow.vn/upload/9-2023/1694160206725.webp"
            alt=""
          />
        </Item>
        <Item>
          <img
            src="https://dashboard.leanow.vn/upload/9-2023/1694794642295.webp"
            alt=""
          />
        </Item>
        <Item>
          <img
            src="https://dashboard.leanow.vn/upload/9-2023/1694160206725.webp"
            alt=""
          />
        </Item>
      </Slider>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Item = styled.a`
  display: block;
  img {
    width: 100%;
  }
`;

export default Slibar;
