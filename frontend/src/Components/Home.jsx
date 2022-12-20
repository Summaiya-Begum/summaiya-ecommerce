import { Box } from '@chakra-ui/react'
import React from 'react'
import NoteAdd from './adminfolder/NoteAdd'
import Footer from './Footer'
import HomeMultiSlider from './HomePage/HomeMultiSlider'
import HomeSlider from './HomePage/HomeSlider'
import ProductOfHome from './HomePage/ProductOfHome'

function Home() {
  return (
    <Box>
      <HomeSlider />
      <NoteAdd/>
      <HomeMultiSlider/>
      <ProductOfHome />
      <Footer />
    </Box>
  )
}

export default Home
