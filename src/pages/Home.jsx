import React from "react";
import FullSlider from "../components/FullSlider/FullSlider";
import CardOne from '../components/Card/CardOne';
import Section1 from '../components/Section/Section1';
import CherryImg from '../assets/cards/cherry.webp';
import Vector1Img from '/src/assets/cards/vector1.webp';
import RoomImg from '/src/assets/cards/room.webp';
import LuxuryImg from '/src/assets/cards/luxury.webp';
import ChessImg from '/src/assets/cards/chess.webp';
import VectorImg from '/src/assets/cards/vector.webp';
import Scenery from '/src/assets/section2/scenery.jpg';
import Flower from '/src/assets/section2/flower.png';
import Tombsection from "../components/CommonSection/Tombsection";
import VibezSection from "../components/VibezSection/VibezSection";
import BG from '/src/assets/bgVector/lines.png';

const Home = () => {
  return (
    <>

      <FullSlider />
      <Section1 />
      <CardOne rev={true}
        bgColor={"#104D391A"}
        bgColor2={"#104D39"}
        img1={CherryImg}
        img2={Vector1Img}
        heading={"Managed farmlands!"}
        btnLine={"Discover farmlands"}
        description={"Call a piece of paradise, yours. We offer diverse investment options like coffee plantations and teakwood groves. Our experts manage every aspect of your farm, from planting to sales, focusing on sustainable practices that protect your investment and the environment."}
        color={"#FFFFFF"}
        link={"/farmland"}
      />

      <CardOne rev={false}
        bgColor={"#DDD7CB4D"}
        bgColor2={"#DDD7CB"}
        img1={RoomImg}
        img2={LuxuryImg}
        heading={"Luxury Villas & Resorts"}
        btnLine={"Explore luxury"}
        description={"Unveil the art of luxury living and immerse yourself in the tranquility of luxury villas and resorts. Each villa and resort offers a unique escape into indulgence and natural beauty, with world-class amenities designed to rejuvenate your spirit and enhance your lifestyle."}
        color={"#000000"}
        link={"/villa"}
      />

      <CardOne rev={true}
        bgColor={"#6D351833"}
        bgColor2={"#6D3518"}
        img1={ChessImg}
        img2={VectorImg}
        heading={"Revenue Generation"}
        btnLine={"Learn More"}
        description={"Your investment should work as hard as you do. Our strategic rental programs and expert property management ensure your villa or resort generates competitive returns, with transparency and ease."}
        color={"#FFFFFF"} 
        link={"/revenue"}
        />
        <VibezSection />
      <Tombsection bgColor={"#104D39"} bgTheme="green-color-with-vector" color={'white'} logo={Flower} imgSrc={Scenery} btn={true} BG={BG}
      heading={"Discover our latest ventures."} content={"Explore upcoming real estate developments and investment opportunities."} btnText={"Discover Farmlands"}
      fontStyle={"font-poppins"}
      link={"/farmland"}
      />

    </>
  );
};

export default Home;
