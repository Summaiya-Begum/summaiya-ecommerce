import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import HomeMultiSlider from './HomePage/HomeMultiSlider'
import HomeSlider from './HomePage/HomeSlider'
import ProductOfHome from './HomePage/ProductOfHome'

function Home() {
  return (
    <Box>
      <HomeSlider />
      <HomeMultiSlider/>
      <ProductOfHome />
      <Footer />
    </Box>
  )
}

export default Home
