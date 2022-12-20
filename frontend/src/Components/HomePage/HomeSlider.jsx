import React from 'react'
import { useState } from 'react';
import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../assest/banner1.jpg"
import banner2 from "../../assest/banner2.jpg"
import banner3 from "../../assest/banner3.jpg"
import banner4 from "../../assest/banner4.jpg"
import banner5 from "../../assest/banner5.jpg"
import banner6 from "../../assest/banner6.jpg"

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const SlideData = [
    { image: banner1 },
    { image: banner2 },
    { image: banner3 },
    { image: banner4 },
    { image: banner5 },
    { image: banner6 },
];

function HomeSlider() {
    const [slides, setSlides] = useState(SlideData)
    return (
        <Carousel
            responsive={responsive}
            className="carasousel"
            autoPlay={true}
            animation="slide"
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            navButtonsProps={{
                style: {
                    background: "black",
                    color: "black",
                    borderRadius: 0,
                    height: "auto",
                    border:'1px solid green'
                }
            }}>
            {slides.map((slides, i) => {
                return (
                    <>
                        <Image  border={'1px solid green'} src={slides.image} alt="banner" key={i} h={300} />
                    </>
                )
            })}
        </Carousel>

    )
}

export default HomeSlider