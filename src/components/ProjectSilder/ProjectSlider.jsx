import React from 'react'
import { Gallery, Heading } from './ProjectSlider.style'
import CardSlider from '../CardSlider/CardSlider';

export default function ProjectSlider(props) {
    return (
        <Gallery className={`${props.className } mt-10`}  style={{backgroundColor: props.bgColor}}>
            <Heading style={{color:props.color}}>{props.heading}</Heading>
            <CardSlider cardData={props.cardData} blur={true} />
        </Gallery>
    )
}
