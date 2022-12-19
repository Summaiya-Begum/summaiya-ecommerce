import React from 'react'
import { Box, Stack, Image, Text, Heading, Button, Divider, VStack, SimpleGrid, Grid } from '@chakra-ui/react'
import { GiHearts } from "react-icons/gi"
import { HiShoppingBag } from "react-icons/hi"
import { useState } from 'react'
function ProductList({ product }) {
  const [read, setRead] = useState(false)

  const handleMore = () => {
    setRead(prev => !prev)
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
          <Box p='2' textAlign={'start'}>
            <Box alignItems='baseline'>
              <Heading
                as='h4' fontSize='12px'
                color='black'
                letterSpacing='wide'
                textTransform='uppercase'
                lineHeight={2}
                fontWeight={'bold'}
                fontFamily={'cursive'}
              >Title:
                <span style={{ textTransform: 'uppercase', color: '#388E3C' }}> {product.title}</span> 
              </Heading>
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