import React from "react";
import Slider from "react-slick";
import Banner from "./Banner";
import { SliderNextButton, SliderPrevButton } from './Banner.style'
import BannerArrows from "../../assets/sliderglobal/right-arrow.png";
import BannerImg from "../../assets/home/banner1.webp";
import './banner.css'
export default function FullSlider() {

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <SliderNextButton onClick={onClick}>
        <img src={BannerArrows} alt="right arrow"/>
      </SliderNextButton>
    );
  }
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <SliderPrevButton onClick={onClick}>
        <img src={BannerArrows} alt="right arrow"/>
      </SliderPrevButton>
    );
  }
  
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className="slider-container" style={{ position: "relative"}}>

    <Slider {...settings}>

      <div index="1">
        <Banner
          image={BannerImg}
          title="Join the Vibez tribe!"
          content="Your dream lifestyle starts here, with the coolest crew in town. Explore exclusive properties and investment opportunities."
          button="Learn more"
        />
      </div>
      {/* <div index="2">
        <Banner
          image={BannerImg}
          title="Join the Vibez tribe"
          content="Your dream lifestyle starts here, with the coolest crew in town. Explore exclusive properties and investment opportunities."
          button="Learn more"
        />
      </div> */}
    </Slider>

    </div>
  );
}
