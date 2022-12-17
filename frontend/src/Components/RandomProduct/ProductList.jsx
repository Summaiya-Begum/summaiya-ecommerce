import React from 'react'
import { Box, Stack, Image, Text, Heading, Button, Divider } from '@chakra-ui/react'
import { GiHearts } from "react-icons/gi"
import { HiShoppingBag } from "react-icons/hi"
import { useState } from 'react'
function ProductList({ product }) {
  const [read, setRead] = useState(false)
  
const handleMore = () => {
  setRead(prev => !prev)
}



  return (
    <Box height={'auto'} boxShadow='2xl' p='4' rounded='md' bg='white'>
      <Stack direction={['row', 'column']} spacing='12px' textAlign={'start'}>
        <Box>
          <Image
            boxSize='fit'
            objectFit='cover'
            src={product.images}
            alt='Dan Abramov'
          />
        </Box>
        <Box p='6'>
          <Box alignItems='baseline'>
            <Heading
              as='h4' fontSize='12px'
              color='black'
              fontWeight='semibold'
              letterSpacing='wide'
              textTransform='uppercase'
              lineHeight={2}
            >
              <span style={{ textTransform: 'uppercase' }}>Title: </span> {product.title}
            </Heading>
          </Box>
          <Box
            color='black.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            lineHeight={2}
          >
            <span style={{ textTransform: 'uppercase' }}>Price: </span> {product.price}
          </Box>
          <Box alignItems='baseline'>
            <Text
              color='black.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              lineHeight={2}
            >
              <span style={{ textTransform: 'uppercase' }}>Category: </span>{product.category.name}
            </Text>
          </Box>
          <Box
            onClick={handleMore}
            mt='1'
            fontWeight='semibold'
            fontSize={15}
            lineHeight='tight'
            noOfLines={read ? 3 : 1}
          >
            <span style={{ textTransform: 'uppercase' }}>Discription: </span>  {product.description}
          </Box>

        </Box>
        <Box>
          <Box
            display={'flex'}
            justifyContent={'space-around'}
            m={'auto'}
            gap={2}
          >
           
            <Button
              w={180}
              bg='#E80070'
              // variant='solid'
              fontWeight={'bold'}
            >
              <GiHearts size={25} color='white' /></Button>
            <Divider orientation='vertical' />
            <Button
              w={180}
              bg='#E80070'
              // variant='solid'
              fontWeight={'bold'}
            >
              <HiShoppingBag size={25} color='white' /></Button>
          </Box>
        </Box>

      </Stack>

    </Box>
  )
}

export default ProductList