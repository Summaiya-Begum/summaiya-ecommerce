import React from "react";
import {  Image, Flex, Button, Heading, Box, Text,VStack } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import camera from "../../assest/camera.webp"
import headphone from "../../assest/headphone.webp"
import tablet from "../../assest/tablet.webp"
import jeans from "../../assest/jeans.webp"
import trimer from "../../assest/trimer.webp"
import saree from "../../assest/saree.webp"
import powerbank from "../../assest/powerbank.webp"
import printer from "../../assest/printer.webp"
import trackshoot from "../../assest/trackshoot.webp"

const HomeMultiSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:4,
        slidesToScroll:2,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,

    };
    const trendingItems = [
        {
            title: "Canon, Sony",
            image: camera,
            price: 85000,
        },
        {
            name: "Boat Realme Headphones",
            image: headphone,
            price: 1910,
        },
        {
            title: "Canon PIXMA E3370 Multi-function WiFi Color Printer",
            image: printer,
            price: 6999,
        },
        {
            title: "Mi 30000 mAh Power Bank ",
            image: powerbank,
            price: 3099,
        },
        {
            title: "Top Selling Styling Saree",
            image: saree,
            price: 359,
        },
        {
            title: "Solid Men Track Suit",
            image: trackshoot,
            price: 1319,
        },
        {
            title: "Samsung Tablet",
            image: tablet,
            price: 1500,
        },
        {
            title: "Levi's Jack & Jones...",
            image: jeans,
            price: 849,
        },
        {
            title: "Philips, Mi Trimmer",
            image: trimer,
            price: 499,
        },
    ];
    return (
        <>
            <Box  margin={'auto'}>
                <Slider
                 {...settings} 
               >
                    {trendingItems.map((item, i) => (
                        <VStack
                            h="400px"
                            borderRight="1px solid rgb(238, 238, 238)"
                            _hover={{ boxShadow: "3px 4px 4px 1px #d3d3d3" }}
                            // w={250}
                            justify="center"
                            p={2}
                            
                        >
                            <Image
                                boxSize='fit'
                                p={2}
                                src={item.image}
                                // w={250}
                                h={250}
                                borderRadius="10px"
                                border="0.2px solid rgb(238, 238, 238)"
                                boxShadow="1px 2px #efe9e9"
                                m={'auto'}
                    
                            />
                            <Heading fontSize={15}>Title: {item.title}</Heading>
                            <Flex
                                justifyContent={'center'}
                                gap={2}
                                textAlign={'center'}>
                                <Button
                                    colorScheme="white"
                                    fontSize="13px"
                                    bg="none"
                                    fontWeight="normal"
                                    borderRadius="10px"
                                    _hover={{ bg: "none" }}
                                    color="black"
                                    border="1px solid #cfcfcf"
                                ><Text fontWeight={500}>MRP  <span style={{ color: '#388E3C' }}>  ${item.price}</span></Text></Button>
                                <Button bg="#FB641B" _hover={{ bg: "#000", color: '#FB641B' }} p="0 2">
                                    Add To Cart
                                </Button>
                            </Flex>
                        </VStack>
                    ))}
                </Slider>
            </Box>
        </>
    );

}

export default HomeMultiSlider