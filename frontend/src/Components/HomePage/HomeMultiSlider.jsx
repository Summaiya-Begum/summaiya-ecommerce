import React from "react";
import { Stack, Image, Flex, Button, Heading,Box } from "@chakra-ui/react";
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
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
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
            <Box m={"20px 0px"}>
                <Slider {...settings}>
                    {trendingItems.map((item, i) => (
                        <Stack
                            h="400px"
                            borderRight="1px solid rgb(238, 238, 238)"
                            _hover={{ boxShadow: "3px 4px 4px 1px #d3d3d3" }}
                            p={5}
                            justify="center"
                        >
                            <Image
                               boxSize='fit'
                                p={2}
                                src={item.image}
                                w="100%"
                                h={250}
                                borderRadius="10px"
                                border="0.2px solid rgb(238, 238, 238)"
                                boxShadow="1px 2px #efe9e9"
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
                                >{`MRP ₹ ${item.price}`}</Button>
                                <Button bg="#FB641B" _hover={{ bg: "#92be4d" }} p="0 2">
                                    Add To Cart
                                </Button>
                            </Flex>
                        </Stack>
                    ))}
                </Slider>
            </Box>
        </>
    );

}

export default HomeMultiSlider