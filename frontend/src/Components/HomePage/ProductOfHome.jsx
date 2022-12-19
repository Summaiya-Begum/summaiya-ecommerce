import { Box, Stack, Image, Button, Text, SimpleGrid, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

const getData = async () => {
    try {
        let url = `https://fakestoreapi.com/products`
        let res = await fetch(url)
        // console.log(res)
        let data = await res.json()
        // console.log(data)
        return data
    }
    catch (err) {
        console.log(err)
    }

}
// getData()

// https://fakestoreapi.com/products
function ProductOfHome() {
    const [productData, setProductData] = useState([])

    function Filter(price) {
        if (price === "low") {
            const updated = productData.sort((a, b) => {
                if (a.price < b.price) {
                    return -1
                }
                else return 1
            })
            setProductData([...updated])
        }
        if (price === "high") {
            const a = productData.sort((a, b) => {
                if (a.price < b.price) return 1
                else return -1
            })
            setProductData([...a])
        }
    }


    useEffect(() => {
        getData()
            .then((res) => setProductData(res))
    }, [])


    return (
        <Box height={'auto'} bg='white' >
            <Stack direction={['row', 'column']} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}>
                <VStack>
                    <SimpleGrid columns={[1, 2]} spacing='5px' p={'0.5rem'} alignItems={'center'}>
                        <Button w={180}
                            color='#FB641B'
                            bg='black'
                            fontWeight={'bold'}
                            _hover={{
                                bg: '#FB641B',
                                color: "white"
                            }}
                            onClick={() => Filter("low")}>Low To High</Button>

                        <Button
                            w={180}
                            color='#FB641B'
                            bg='black'
                            fontWeight={'bold'}
                            _hover={{
                                bg: '#FB641B',
                                color: "white"
                            }}
                            onClick={() => Filter("high")}>High To Low</Button>
                    </SimpleGrid>
                </VStack>

            </Stack>

            <SimpleGrid
                columns={[1, 2, 3, 4]}
                spacing='15px'
                p={'1.5rem'}
                borderRadius={'3xl'}
            >
                {
                    productData.map((el) =>
                        <Stack
                            direction={['row', 'column']}
                            // boxShadow="2px 1px 2px 1px #388E3C"
                            cursor={'pointer'}
                            borderRadius={'3xl'}
                            _hover={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}

                        >
                            <VStack dir388E3Cection={['row', 'column']} alignItems={'center'} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}
                                width={'100%'}
                                borderRadius={'3xl'}
                            >

                                <Image boxSize='fit' width={'100%'}
                                    borderRadius={'3xl'} h={280} src={el.image} alt={el.title} />

                                <Box > <Text fontWeight={'bold'} fontFamily={'cursive'}>Price:<span style={{ color: '#388E3C' }}> ₹{el.price}</span></Text></Box>
                                <Box  > <Text fontWeight={'bold'} fontFamily={'cursive'}>Rating: <span style={{ color: '#ffff', background: '#', padding: '0.3rem 0.5rem', borderRadius: '15px' }}>{el.rating.rate} ★</span></Text></Box>
                                <Box >  <Text fontWeight={'bold'} fontFamily={'cursive'}>Category: {el.category}</Text></Box>
                                {/* <Box h={70}><Text>Title: {el.title}</Text></Box> */}
                                {/* <p>Description: {el.description}</p> */}
                                <Box p={'0.5rem'} >
                                    <Button
                                        w={180}
                                        bg='#FB641B'
                                        color={'black'}
                                        fontWeight={'bold'}
                                        _hover={{
                                            bg: 'black',
                                            color: "#FB641B"
                                        }}
                                    >
                                        Show Details
                                    </Button>
                                </Box>
                            </VStack>
                        </Stack>
                    )
                }

            </SimpleGrid>


        </Box>
    )
}
export default ProductOfHome;

// category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: {rate: 3.9, count: 120}
// title: 

