import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import HomeMultiSlider from './HomePage/HomeMultiSlider'
import HomeSlider from './HomePage/HomeSlider'
import Product from './RandomProduct/Product'


function Home() {
  return (
    <Box>
      <HomeSlider />
      <HomeMultiSlider />
      <Product />
      <Footer />
    </Box>
  )
}

export default Home
