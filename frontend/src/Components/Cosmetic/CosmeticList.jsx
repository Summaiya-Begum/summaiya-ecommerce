
import React, { useState } from "react";
import { Box, Stack, Image, Text, Heading, Button, Divider, VStack, SimpleGrid, Grid, useColorModeValue } from '@chakra-ui/react'
import { GiHearts } from "react-icons/gi"
import { HiShoppingBag } from "react-icons/hi"
import { BsHandbag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

export const CosmeticList = ({ item }) => {

    return (


        <Box height={'auto'} boxShadow='2xl' p='2' rounded='md' bg='white'>
            <Stack
                color={useColorModeValue('black', 'white')}
                bg={useColorModeValue('white', 'gray.800')}
            >
                <VStack
                    color={useColorModeValue('black', 'white')}
                    bg={useColorModeValue('white', 'gray.800')}
                >
                    <Box>
                        <Image
                            boxSize='fit'
                            objectFit='cover'
                            src={item.image_link}
                            alt='Dan Abramov'
                            h={200}
                        />
                    </Box>
                    <Box p='2' textAlign={'start'}
                        color={useColorModeValue('black', 'white')}
                        bg={useColorModeValue('white', 'gray.800')}
                    >
                        <Box color='black.500'
                            letterSpacing='wide'
                            fontSize='xs'
                            lineHeight={2}
                            fontWeight={'bold'}
                            fontFamily={'cursive'}>
                            Brand:
                            <span style={{ textTransform: 'uppercase', color: '#388E3C' }}> {item.brand}</span>
                        </Box>
                        <Box
                            color='black.500'
                            letterSpacing='wide'
                            fontSize='xs'
                            lineHeight={2}
                            fontWeight={'bold'}
                            fontFamily={'cursive'}
                        >Rs:
                            <span style={{ textTransform: 'uppercase', color: '#388E3C' }}> ₹{item.price}</span>
                        </Box>
                        <Box >
                            <Text
                                color='black.500'
                                letterSpacing='wide'
                                fontSize={12}
                                lineHeight={2}
                                fontWeight={'bold'}
                                fontFamily={'cursive'}
                            >Name:
                                <span style={{ textTransform: 'uppercase', color: '#388E3C' }}> {item.name}</span>
                            </Text>
                        </Box>
                        <Box
                            mt='1'
                            fontWeight={'bold'}
                            fontFamily={'cursive'}
                            fontSize={12}
                        >
                            <span style={{ textTransform: 'uppercase', cursor: 'pointer' }}>Discription: </span>  {item.id}
                        </Box>

                    </Box>
                    <Box w={'100%'}>
                        <SimpleGrid columns={[1, 2]} spacing='15px' p={'1rem'}>
                            <Grid
                            >
                                <Button
                                    bg='#E80070'
                                    fontWeight={'bold'}
                                    p={'0rem 2rem'}
                                    _hover={{
                                        bg: 'black',
                                    }}
                                >
                                    <GiHearts size={30} color='white' />
                                </Button>
                            </Grid>

                            <Grid>
                                <Button
                                    bg='#E80070'
                                    fontWeight={'bold'}
                                    p={'0rem 2rem'}
                                    _hover={{
                                        bg: "black"
                                    }}
                                >
                                    <HiShoppingBag size={30} color='white' />
                                </Button>
                            </Grid>
                        </SimpleGrid>
                    </Box>
                </VStack>
            </Stack>

        </Box>

    );
};

//   <Grid >
//         <Box>
//           <Image h={380} src={item.image_link} w={"100%"} />
//           <Text mt={2} fontWeight="bold" textTransform={"uppercase"}>
//             {item.brand}
//           </Text>
//           <Text>{item.name}</Text>
//           <Text fontWeight="bold" fontSize={13}>
//             Rs: {item.price}
//           </Text>
//           <Text>{item.id}</Text>
//         </Box>

//      <Box
//         bg="#aaf0d1 "
//         // bg="rgb(22, 236, 208)"
//         opacity={1}
//         position={"absolute"}
//         bottom="0"
//         border="1px black solid"
//         h="70px"
//       >
//         <Flex justifyContent={"space-between"} alignItems="center">
//           <Box>
//             <BsHandbag color="white" fontSize={"50"} />
//             <Text color="white">SHOP NOW</Text>
//           </Box>
//           <Box>
//             <AiOutlineHeart color="white" fontSize={"55"} />
//             <Text color="white">FAVOURITE</Text>
//           </Box>
//         </Flex>
//       </Box>
//       </Grid>