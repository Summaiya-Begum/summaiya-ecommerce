import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import HomeSlider from './HomeSlider'
import Product from './Product/Product'


function Home() {
  return (
    <Box>
      <HomeSlider />
      <Product />
      <Footer />
    </Box>
  )
}

export default Home
