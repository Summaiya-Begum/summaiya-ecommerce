import React from 'react'
import { Box, Stack, Image, Text, Button, VStack, SimpleGrid, Grid, useColorModeValue } from '@chakra-ui/react'
import { GiHearts } from "react-icons/gi"
import { HiShoppingBag } from "react-icons/hi"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addCartItems } from '../../Redux/cart/cart.action'
import { addData } from '../../Redux/wishlist/wishlist.action'

function ProductList({ product }) {
  const { isAuth, token } = useSelector(state => state.user)
  const [read, setRead] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleMore = () => {
    setRead(prev => !prev)
  }

  const handleCart = (id, token) => {
    if (!isAuth) {
      alert("Please Login Account");
      navigate("/login")
    }
    else dispatch(addCartItems(id, token))
  }
  const handleWish = (id, token) => {
    if (!isAuth) {
      alert("Please Login Account");
      navigate("/login")
    }
    else dispatch(addData(id, token))
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
            <Box color='black.500'
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
              <span style={{ textTransform: 'uppercase', color: '#388E3C' }}> ₹{product.price}</span>
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
                <span style={{ textTransform: 'uppercase', color: '#388E3C' }}> {product.category.name}</span>
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
                  onClick={() => handleWish(product._id, token)}
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
                  onClick={() => handleCart(product._id, token)}
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