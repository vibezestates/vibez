import React from "react";
import Banner from "../components/FullSlider/Banner";
import AmenitiesSection from "../components/Amenities/AmenitiesSection";
import indoorGamesIcon from "../assets/amenities/indoorGamesIcon.png";
import restaurantIcon from "../assets/amenities/restaurantIcon.png";
import carParkingIcon from "../assets/amenities/carParkingIcon.png";
import wifiIcon from "../assets/amenities/wifiIcon.png";
import playAreaIcon from "../assets/amenities/playAreaIcon.png";
import swimmingPoolIcon from "../assets/amenities/swimmingPoolIcon.png";
import securityIconProjectDet from "../assets/amenities/securityIconProjectDet.png";
import cctvIcon from "../assets/amenities/cctvIcon.png";
import plantationTrailIcon from "../assets/amenities/plantationTrailIcon.png";
import gazeboIcon from "../assets/amenities/gazeboIcon.png";
import starGazingIcon from "../assets/amenities/starGazingIcon.png";
import badmintonIcon from "../assets/amenities/badmintonIcon.png";
import FloorPlans from "../components/FloorPlan/Floorplan";
import InvestSection from "../components/FloorPlan/InvestSection";
import Tombsection from '/src/components/CommonSection/Tombsection';
import Flower from '/src/assets/section2/flower.png';
import KairaImg from '/src/assets/home/kaira.png';
import CardSlider from '../components/CardSlider/CardSlider';
import SliderImage1 from '../assets/nearby/nearby1.webp'
import SliderImage2 from '../assets/nearby/nearby2.webp'
import SliderImage3 from '../assets/nearby/nearby3.webp'
import ProjectSlider from '../components/ProjectSilder/ProjectSlider';
import CardOne from '../components/Card/CardOne';
import projectDetailContact from '../assets/home/projectDetailContact.jpg';
import LuxuryImg from '../assets/cards/luxury.webp';
import bannerImg from '../assets/farmland/niharika.webp';
import { title } from "framer-motion/client";

const amenitiesSectInfo = {
  heading: "Amenities",
  subHeading: "",
  amenitiesData: [
    { icon: indoorGamesIcon, title: "Indoor Games" },
    { icon: restaurantIcon, title: "Restaurant" },
    { icon: carParkingIcon, title: "Car parking" },
    { icon: wifiIcon, title: "Wi-fi" },
    { icon: playAreaIcon, title: "Children’s Play Area" },
    { icon: swimmingPoolIcon, title: "Swimming Pool" },
    { icon: securityIconProjectDet, title: "24/7 security" },
    { icon: cctvIcon, title: "CCTV" },
    { icon: plantationTrailIcon, title: "Plantation Trail" },
    { icon: gazeboIcon, title: "Gazebo" },
    { icon: starGazingIcon, title: "Star Grazing" },
    { icon: badmintonIcon, title: "Badminton" },
  ],
};

export default function Niharika() {

    const cardData = [
    {
      id: 1,
      image: SliderImage1,
      title:"36 km",
      content: "Magajahalli Water Falls"
    },
    {
      id: 2,
      image: SliderImage2,
      title:"",
      content: "Bisile ghat view points"
    },
    {
      id: 3,
      image: SliderImage3,
      title:"",
      content: "Sakleshwara temple"
    }
  ];

  return (
    <>
      <Banner
        image={bannerImg}
        title="Niharika"
        content="Coming Soon"
        // button="Status: Now Selling"
        bgEffect={true}
      />
      {/* <Tombsection bgTheme="vector-leaf-left-right-v1" bgColor={"#DDD7CB4D"} color={'black'} logo={Flower} imgSrc={KairaImg} heading={"Bilva Dhara – Your Retreat into Nature, Serenity & Soulful Living"} content={"Experience a lifestyle where peace flows as naturally as the river that surrounds Dharmasthala. Bilva Dhara brings you villas inspired by Karnataka’s timeless vernacular architecture—crafted for those who seek soulful living, spiritual connection, and weekend serenity."} fontStyle={"font-poppins"} kaira={true}  />
      <AmenitiesSection
        heading={amenitiesSectInfo.heading}
        subHeading={amenitiesSectInfo.subHeading}
        amenitiesData={amenitiesSectInfo.amenitiesData}
      />
      <FloorPlans />
      <ProjectSlider heading={"NEARBY ATTRACTIONS"} cardData={cardData} color={"black"} bgColor={"#F2EFEC"}/>
      <InvestSection />
       <CardOne rev={false}
        bgColor={"#DDD7CB"}
        bgColor2={"#134F3C"}
        img1={projectDetailContact}
        img2={LuxuryImg}
        heading={"Luxury. Sustainability. Nature"}
        description={`At Vibez Estates, we don't just sell properties; we offer unique lifestyles in harmony with nature. Learn more about our vision and commitment to luxury real estate.
`}
        btnLine={"Learn more"}
        color={"#F2EFEC"}
      /> */}
    </>
  );
}
