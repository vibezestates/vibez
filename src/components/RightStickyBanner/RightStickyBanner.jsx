import React from "react";
import styled from "styled-components";
import sideImage from '../../assets/sticky/sticky.jpg'
import bottomImage from '../../assets/sticky/stickybottom.jpg'

const SideStickyBanner = styled.div`
  position: fixed;
  top: 90px;
  z-index: 1000;
  cursor: pointer;

  ${(props) => (props.position === "left" ? "left: 0;" : "right: 0;")}

  img {
    width: 95px;
    height: auto;
    display: block;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const BottomStickyBanner = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: none;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 1024px) {
    display: block;
  }
`;

function StickyBanner({
  position = "right",
  link = "https://www.vibezinnercircle.com/?utm_source=Economic-times&utm_medium=Digital&utm_campaign=vibez_economic_times_banner&utm_id=2587&utm_content=Lead_vibez"
}) {

  const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <SideStickyBanner position={position} onClick={handleClick}>
        <img src={sideImage} alt="Side Sticky Banner" />
      </SideStickyBanner>

      <BottomStickyBanner onClick={handleClick}>
        <img src={bottomImage} alt="Bottom Sticky Banner" />
      </BottomStickyBanner>
    </>
  );
}

export default StickyBanner;