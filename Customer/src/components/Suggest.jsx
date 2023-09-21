import React from "react";
import { styled } from "styled-components";
import Slider from "react-slick";
import Product from "./Product";

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
};
const Suggest = () => {
  return (
    <Wrapper>
      <h4>Có thể bạn sẽ thích</h4>
      <Slider {...settings}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Slider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 4rem;
  h4 {
    font-size: 20px;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-weight: 400;
  }
`;
export default Suggest;
