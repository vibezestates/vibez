import React from 'react'
import Banner from "../components/FullSlider/Banner";
import CommonSubBanner from '../components/Common/commonSubBanner';
import irrigationIcon from "../assets/amenities/irrigationIcon.png";
import storageIcon from "../assets/amenities/storageIcon.png";
import securityIcon from "../assets/amenities/securityIcon.png";
import communityIcon from "../assets/amenities/communityIcon.png";
import servicesIcon from "../assets/amenities/servicesIcon.png";
import SericeSliderSection from '../components/ServicesSlider/ServiceSliderSection';
import { SericeSliderWrapper, TestimonialSliderWraper, ZigZagSliderWraper } from './styles/page.styles'
import ZigZagSlider from '../components/ZigZagSlider/ZigZagSlider';
import zigZagBgimage from '../assets/farmland/bg1.jpg'
import TestimonialSlider from '../components/TestimonialSlider/TestimonialSlider';
import { servicesSliderData, farmLandTestinmonials, ProjectSliderData } from '../content/farmland';
import CardOne from '../components/Card/CardOne';
import farmlandContact from '../assets/home/farmlandContact.jpg';
import farm from '../assets/home/farm.png';
import farm1 from '../assets/home/farm1.png';
import farm2 from '../assets/home/farm2.png';
import bannerImg from "../assets/home/banner4.webp";
import subBanner from '../assets/home/banner4_farmland.webp'
import ProjectsGallery from '../components/ProjectCard/ProjectCard';

const amenitiesSectInfo = {
  heading: "Amenities That Grow With You",
  subHeading: "From crop selection, and planting to harvesting and marketing, we provide a comprehensive set of services.",
  amenitiesData: [
    { icon: irrigationIcon, title: "Irrigation systems using the latest technology" },
    { icon: storageIcon, title: "High-quality, on-site storage facilities" },
    { icon: securityIcon, title: "24/7 security and maintenance services" },
    { icon: communityIcon, title: "Community centers and recreational areas" },
    { icon: servicesIcon, title: "Range of services offered" },
  ],
}


export default function FarmlandPage() {
  return (
    <>
      <Banner
        image={bannerImg}
        title="Embrace the bounty of the land"
        content="Discover the sustainable elegance of managed farmlands, where investment meets tranquility"
        button=""
        bgEffect={true}
      />
      <CommonSubBanner
        image={subBanner}
        title="Sustainable investments, serene living"
        content={`At Vibez Estates, we blend investment opportunities with a lifestyle enriched by nature. Our managed farmlands offer a unique chance to own and profit from agricultural land without the hassle of day-to-day management.`}
        boldContent={`Experience the peace of rural living, coupled with the perks of modern, sustainable practices.`}
        amenitiesSectInfo={amenitiesSectInfo}
      />
      <SericeSliderWrapper>
        <SericeSliderSection sliderData={servicesSliderData} title={"Seamless services for agricultural needs"} />
      </SericeSliderWrapper>
      <TestimonialSliderWraper>

        <TestimonialSlider cardData={farmLandTestinmonials}  sliderTitle="Hear from our satisfied clients"/>
      </TestimonialSliderWraper>
      <ZigZagSliderWraper>
        {/* <ZigZagSlider cardData={ProjectSliderData} title="Explore farmland projects" bgImage={zigZagBgimage} /> */}
      <ProjectsGallery />
      </ZigZagSliderWraper>
      {/* <ProjectCard /> */}
      <CardOne
        rev={true}
        bgColor="#E7E2DA"
        bgColor2="#6B3E1D"
        color="#FFFFFF"
        isFullBg={true}
        bgColorFullBg="#F2EFEC"
        img1={farmlandContact}
        isUnique={true}
        heading="ROOTED IN EXPERTISE, GROWING IN INNOVATION"
        uniqueItems={[
          { icon: farm, text: 'Proven expertise in sustainable farming and real estate' },
          { icon: farm1, text: 'Commitment to eco-friendly practices and advanced agricultural technology' },
          { icon: farm2, text: 'Competitive returns on investment with a focus on sustainability and development' },
        ]}
      />

    </>
  );
}
