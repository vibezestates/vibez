import './tombsection.css'
import React from 'react'
import CommonCard from '../CommonCard/CommonCard';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { fadeScale, slideFromLeft, slideFromRight } from '../../helpers/animationhelper';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Tombsection(props) {

    const HorizontalLine = styled.hr`
        width: 50px;
        rotate: 90deg
    `

    const [ref, isInView] = useScrollAnimation();
    return (
        <>
            <div className={`${props.bgTheme} tomb-container`} style={{
                'color': props.color
            }}
                ref={ref}>
                <div className='uppertomb'>
                    <img src={props.logo} alt="" />
                    <motion.p
                        variants={slideFromLeft()}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className='font-maharlika tomb__heading' >{props.heading}</motion.p>

                    {props.subHeading && <motion.p className="props.fontStyle tomb__subheading mb-20"
                        style={{ color: props.subHeadColor }}
                        variants={slideFromRight()}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >{props.subHeading}</motion.p>}

                    <motion.p className='props.fontStyle tomb__content mt-10'
                        variants={slideFromRight()}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {props.content}
                    </motion.p>
                    {props.btn && <motion.button
                        variants={fadeScale(0.3)}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className='font-maharlika button border cursor-pointer mt-4 px-16 py-4 text-xs max-w-fit cardBtn'>
                        <Link to={props.link}>
                            {props.btnText}
                        </Link>
                    </motion.button>}
                </div>
                {props.kaira && <div className='areaSection'>
                    <div>
                        <p>Plot Size</p>
                        <p>3000 sqft</p>
                    </div>
                    <HorizontalLine />
                    <div>
                        <p>Built Area</p>
                        <p>210763 sqft</p>
                    </div>
                    <HorizontalLine />
                    <div>
                        <p>Bedrooms</p>
                        <p>3</p>
                    </div>
                </div>}
                {props.bilvadhara && <div className='areaSection'>
                    <div>
                        <p>Plot Size</p>
                        <p>2,500 sqft</p>
                    </div>
                    <HorizontalLine />
                    <div>
                        <p>Villas Starting From:</p>
                        <p>65 lakhs*</p>
                    </div>
                    <HorizontalLine />
                    <div>
                        <p>Configurations</p>
                        <p>1 BHK • 2 BHK • 3 BHK</p>
                    </div>
                </div>}
                <div className={`tombRectangle ${props.kaira ? 'kairaMode' : ''}`}
                >
                    <motion.img
                        variants={fadeScale(0.3)}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        src={props.imgSrc} alt="" />
                </div>
            </div>
        </>
    )
}
