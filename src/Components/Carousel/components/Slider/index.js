/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import SlickSlider from "react-slick";
import styled from "styled-components";

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 40px;
    height: 210px;
    transform: initial;
    &:before {
      font-size: 40px;
    }
  }

  .slick-prev {
    left: 0px;
    opacity: 0;
  }
  .slick-next {
    opacity: 0;
    right: 0px;
  }
  .slick-next:hover,
  .slick-next:active {
    opacity: 1;
    right: 0px;
    background-color: #141414;
  }
  .slick-prev:hover,
  .slick-prev:active {
    opacity: 1;
    background-color: #141414;
  }

  .slick-next:before {
    content: "»";
  }
  .slick-prev:before {
    content: "«";
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ children }) => (
  <Container>
    <SlickSlider
      {...{
        dots: true,
        infinite: false,
        speed: 200,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        slidesToScroll: 3,
      }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
