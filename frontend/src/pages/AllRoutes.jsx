import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Components/Cart/Cart'
import CosmeticProduct from '../Components/Cosmetic/CosmeticProduct'
import Home from '../Components/Home'
import Product from '../Components/RandomProduct/Product'
import Login from './Login'
import Signup from './Signup'

function AllRoutes() {
    return (



        <Box>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<Product />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/beautyproduct' element={<CosmeticProduct />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </Box>
    )
}

export default AllRoutes
