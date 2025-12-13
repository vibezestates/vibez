import React from "react";
import { Check } from "lucide-react";
import titleFlower from "../../assets/bgVector/flower.png";
import TitleWithImage from "../TitleWithImage/TitleWithImage";
// Import images
import Anantara from "../../assets/projects/anantara.webp";
import Bilvadhara from "../../assets/projects/bilvadhara.webp";
import BlueHill from "../../assets/projects/bluehills.webp";
import CoffeeEstates from "../../assets/projects/coffee.webp";
import Evara from "../../assets/projects/evara.webp";
import HillyFarms from "../../assets/projects/hillyfarm.webp";
import Minikin from "../../assets/projects/minkin.webp";
import Mythri from "../../assets/projects/mythri.webp";
import Niharika from "../../assets/projects/niharika.webp";
import Sirivana from "../../assets/projects/sirivana.webp";
import Vanasya from "../../assets/projects/vanasya.webp";
import VibezAnantara from "../../assets/projects/anantara1.webp";
import kaira from "../../assets/projects/kaira.webp";
import { Link } from "react-router-dom";

const ProjectCard = ({ image, title, subtitle, status, link }) => {
  const Wrapper = link ? Link : "div";

  return (
    <Wrapper
      to={link}
      className={`relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full ${
        link ? "cursor-pointer" : ""
      }`}
    >
      {/* Fixed Image */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="bg-gray-900 p-4 flex-grow">
        <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-400 text-sm mb-2">{subtitle}</p>

        <p
          className={`text-xs font-medium ${
            status === "Completed" ? "text-teal-400" : "text-amber-400"
          }`}
        >
          Status: {status}
        </p>
      </div>
    </Wrapper>
  );
};
const ProjectsGallery = () => {
  const leftColumnProjects = [
    {
      image: Minikin,
      title: "Minikin Farms - 35 Acres",
      subtitle: "Chikkaballapur",
      status: "Completed",
      
    },
   
    {
      image: CoffeeEstates,
      title: "Coffee Estates - 35 Acres",
      subtitle: "Sakleshpur",
      status: "Completed",
      
    },
    {
      image: Mythri,
      title: "Mythri Farms - 15 Acres",
      subtitle: "Chikkaballapur",
      status: "Completed",
      
    },
    {
      image: BlueHill,
      title: "Blue Hill - 20 Acres",
      subtitle: "Chikkaballapur",
      status: "Completed",
      
    },
    {
      image: HillyFarms,
      title: "Hilly Farms - 20 Acres",
      subtitle: "Chikkaballapur",
      status: "Completed",
      
    }
  ];

  const rightColumnProjects = [
    {
      image: Vanasya,
      title: "Vanasya - 40 Acres",
      subtitle: "Belagodu",
      status: "Ongoing",
    },

    {
      image: Sirivana,
      title: "Sirivana - 25 Acres",
      subtitle: "Chikkaballapur",
      status: "Ongoing",
    },
    {
      image: kaira,
      title: "Kaira - 40 Acres",
      subtitle: "Sakleshpur",
      status: "Ongoing",
    },
  ];

  return (
    <div className="min-h-screen bg-[#104d39] py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <TitleWithImage
          title={" Explore farmland projects"}
          image={titleFlower}
        />
      </div>

      {/* Two Column Layout */}
<div className="max-w-7xl mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start content-start">

    {/* Left Column */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
      {leftColumnProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>

    {/* Right Column */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
      {rightColumnProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>

  </div>
</div>

    </div>
  );
};

export default ProjectsGallery;
