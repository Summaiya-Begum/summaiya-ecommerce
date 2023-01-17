import React from 'react'
import { useState } from 'react';
import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../assest/banner1.jpg"
import banner2 from "../assest/banner2.jpg"
import banner3 from "../assest/banner3.jpg"
import banner4 from "../assest/banner4.jpg"
import banner5 from "../assest/banner5.jpg"
import banner6 from "../assest/banner6.jpg"

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
    { image: banner1, id: 1 },
    { image: banner2, id: 2 },
    { image: banner3, id: 3 },
    { image: banner4, id: 4 },
    { image: banner5, id: 5 },
    { image: banner6, id: 6 },
];

function HomeSlider() {

    return (
        <Carousel
            responsive={responsive}
            className="carasousel"
            autoPlay={true}
            animation="slide"
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            showThumbs={false}
            navButtonsProps={{
                style: {
                    background: "black",
                    color: "black",
                    borderRadius: 0,
                    height: "auto",
                }
            }}>
            {SlideData?.map((slides, i) => {
                return (
                    <Image src={slides.image} alt="banner" key={slides.id.toString()} h={300} />
                )
            })}
        </Carousel>

    )
}

export default HomeSlider
