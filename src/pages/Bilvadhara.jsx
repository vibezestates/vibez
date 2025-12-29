import React from "react";
import Banner from "../components/FullSlider/Banner";
import AmenitiesSection from "../components/Amenities/AmenitiesSection";
import indoorGamesIcon from "../assets/amenities/indoorGamesIcon.png";
import communityIcon from "../assets/amenities/communityIcon.png";
import irrigationIcon from "../assets/amenities/irrigationIcon.png";
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
import SliderImage1 from '../assets/bilva/dm.webp'
import SliderImage2 from '../assets/bilva/dm.webp'
import SliderImage3 from '../assets/bilva/kukke.webp'
import SliderImage4 from '../assets/bilva/km.webp'
import SliderImage5 from '../assets/bilva/narasimha.webp'
import SliderImage6 from '../assets/bilva/mang.webp'
import ProjectSlider from '../components/ProjectSilder/ProjectSlider';
import CardOne from '../components/Card/CardOne';
import projectDetailContact from '../assets/home/projectDetailContact.jpg';
import LuxuryImg from '../assets/cards/luxury.webp';
import bannerImg from '../assets/projects/‎bilvadharaNew.webp';
import floorPlan1 from "../assets/home/floorPlan1.png";



const amenitiesSectInfo = {
  heading: "Amenities",
  subHeading: "",
  amenitiesData: [
    { icon: communityIcon, title: "Meditation Hall" },
    { icon: restaurantIcon, title: " Club House" },
    { icon: carParkingIcon, title: "Car parking" },
    { icon: irrigationIcon, title: "Kalyani (Sacred Pond)" },
    { icon: playAreaIcon, title: "Children’s Play Area" },
    { icon: swimmingPoolIcon, title: " Stone Mantapa" },
    { icon: securityIconProjectDet, title: "24/7 security" },
    { icon: restaurantIcon, title: " Banquet Hall" },
    { icon: plantationTrailIcon, title: " Walking Trails" },
    { icon: gazeboIcon, title: "Yoga Zones" },
    { icon: starGazingIcon, title: "Star Grazing" },
    { icon: communityIcon, title: " Community Spaces" },
  ],
};

export default function Bilvadhara() {

    const cardData = [
    {
      id: 1,
      image: SliderImage1,
      title:"",
      content: "Sri Manjunatha Swamy Temple"
    },
    {
      id: 3,
      image: SliderImage3,
      title:"",
      content: "Kukke Subramanya Temple"
    },
    {
      id: 4,
      image: SliderImage4,
      title:"",
      content: "Kadri Manjunatha Temple"
    },
    {
      id: 5,
      image: SliderImage5,
      title:"",
      content: "Narasimhaghada Jamalabad Fort"
    },
    {
      id: 2,
      image: SliderImage2,
      title:"",
      content: "Dharmasthala Manjusha Antique Museum"
    },
    {
      id: 6,
      image: SliderImage6,
      title:"",
      content: "Mangaluru"
    }
  ];
  const floorPlan = [
    { id: 1, label: "1 BHK", image: floorPlan1 },
    { id: 2, label: "2 BHK", image: floorPlan1 },
    { id: 3, label: "3 BHK,", image: floorPlan1 },
    
  ];

  return (
    <>
      <Banner
        image={bannerImg}
        title="Bilva Dhara"
        content="Location:  Dharmasthala, Karnataka"
        button="Status: Now Selling"
        bgEffect={true}
      />
      <Tombsection bgTheme="vector-leaf-left-right-v1" bgColor={"#DDD7CB4D"} color={'black'} logo={Flower} imgSrc={KairaImg} heading={"Bilva Dhara – Your Retreat into Nature, Serenity & Soulful Living"} content={"Experience a lifestyle where peace flows as naturally as the river that surrounds Dharmasthala. Bilva Dhara brings you villas inspired by Karnataka’s timeless vernacular architecture—crafted for those who seek soulful living, spiritual connection, and weekend serenity."} fontStyle={"font-poppins"} bilvadhara={true}  />
      <AmenitiesSection
        heading={amenitiesSectInfo.heading}
        subHeading={amenitiesSectInfo.subHeading}
        amenitiesData={amenitiesSectInfo.amenitiesData}
      />
      <FloorPlans plans={floorPlan}/>
      <ProjectSlider className="testing" heading={"NEARBY ATTRACTIONS"} cardData={cardData} color={"black"} bgColor={"#F2EFEC"}/>
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
      />
    </>
  );
}
