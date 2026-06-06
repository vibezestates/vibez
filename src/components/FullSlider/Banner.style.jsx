import styled from "styled-components";

// background-image: url(${(props) => props.$bgImage});
export const BannerDiv = styled.div`
   background-image: ${(props) => 
    props.$effect 
      ? `linear-gradient(to right, rgb(0 0 0 / 40%) 0%, transparent 50%, rgb(0 0 0 / 51%) 100%), linear-gradient(to bottom, rgb(0 0 0 / 35%) 0%, transparent 50%, rgb(0 0 0 / 45%) 100%), 
         url(${props.$bgImage})`
      : `url(${props.$bgImage})`
  };
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
  display: flex;
  min-height: 804px;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.$link ? 'pointer' : 'default')};
`;

export const BannerContentWrapper = styled.div`
  max-width: 847px;
  text-align: center;
`;
export const SliderNextButton = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  z-index: 999;
  cursor: pointer;
`;
export const SliderPrevButton = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  z-index: 999;
  transform: rotate(180deg);
  cursor: pointer;
`;

export const BannerTitle = styled.h1`
  font-family: Maharlika;
  font-weight: 400;
  font-size: 70px;
  line-height: 100%;
  letter-spacing: 0;
  vertical-align: middle;
  text-transform: uppercase;
  color: white;
`;

export const BannerButton = styled.button`
  color: white;
  border: 1px solid;
  padding: 25px 65px;
  margin-top: 26px;
  font-family: Barlow;
  font-weight: 400;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
`;
export const BannerContent = styled.p`
  font-family: Poppins;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  color: white;
  margin-top: 14px;
`;
