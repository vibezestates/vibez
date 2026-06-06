import React from "react";
import { BannerDiv, BannerContentWrapper, BannerTitle, BannerContent, BannerButton } from "./Banner.style";

function Banner({ image, title, button, content, bgEffect=false, buttonClick, link }) {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <BannerDiv $bgImage={image} $effect={bgEffect} $link={link} onClick={handleClick}>
        <BannerContentWrapper>
          <BannerTitle>{title}</BannerTitle>
          <BannerContent>{content}</BannerContent>
          {button && <BannerButton onClick={buttonClick}>{button}</BannerButton>}
        </BannerContentWrapper>
      </BannerDiv>
    </>
  );
}

export default Banner;
