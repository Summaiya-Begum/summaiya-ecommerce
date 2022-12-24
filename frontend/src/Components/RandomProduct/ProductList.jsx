import React from 'react'
import { Box, Stack, Image, Text, Heading, Button, Divider, VStack, SimpleGrid, Grid, useColorModeValue } from '@chakra-ui/react'
import { GiHearts } from "react-icons/gi"
import { HiShoppingBag } from "react-icons/hi"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postProduct } from '../../Redux/products/product.action'
import { useNavigate } from 'react-router-dom'
function ProductList({ product }) {
  const [read, setRead] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleMore = () => {
    setRead(prev => !prev)
  }


  const handleCart = (id) =>{
    dispatch(postProduct(id))
      navigate('/cart')
  }

  return (
    <Box height={'auto'} boxShadow='2xl' p='2' rounded='md' bg='white'>
      <Stack>
        <VStack >
          <Box>
            <Image
              boxSize='fit'
              objectFit='cover'
              src={product.images}
              alt='Dan Abramov'
            />
          </Box>
          <Box p='2' textAlign={'start'}   
          color={useColorModeValue('black', 'white')}
          bg={useColorModeValue('white', 'gray.800')}
          >
            <Box  color='black.500'
              letterSpacing='wide'
              fontSize='xs'
              lineHeight={2}
              fontWeight={'bold'} 
              fontFamily={'cursive'}>
            Title:
                <span style={{ textTransform: 'uppercase', color: '#388E3C' }}> {product.title}</span> 
            </Box>
            <Box
              color='black.500'
              letterSpacing='wide'
              fontSize='xs'
              lineHeight={2}
              fontWeight={'bold'} 
              fontFamily={'cursive'}
            >Price: 
              <span style={{ textTransform: 'uppercase', color: '#388E3C'}}> ₹{product.price}</span>  
            </Box>
            <Box >
              <Text
                color='black.500'
                letterSpacing='wide'
                fontSize={12}
                lineHeight={2}
                fontWeight={'bold'} 
                fontFamily={'cursive'}
              >Category:
                <span style={{ textTransform: 'uppercase', color: '#388E3C'  }}> {product.category.name}</span>
              </Text>
            </Box>
            <Box
              onClick={handleMore}
              mt='1'
              fontWeight={'bold'}
              fontFamily={'cursive'}
              fontSize={12}

              noOfLines={read ? 3 : 1}
            >
              <span style={{ textTransform: 'uppercase', cursor: 'pointer' }}>Discription: </span>  {product.description}
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
                  onClick={()=>handleCart(product.id)}
                >
                  <HiShoppingBag size={30} color='white' />
                </Button>
              </Grid>
            </SimpleGrid>
          </Box>
        </VStack>
      </Stack>

    </Box>
  )
}

export default ProductList