import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Banner = ({ src, alt, to }) => {
  return (
    <Wrapper>
      {(to && (
        <Link>
          <img src={src} alt={alt || ""} />
        </Link>
      )) || <img src={src} alt={alt} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  a {
    display: block;
  }
  img {
    width: 100%;
    height: auto;
  }
`;
export default Banner;
