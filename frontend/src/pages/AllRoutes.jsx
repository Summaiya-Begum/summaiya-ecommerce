import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NoteAdd from '../Components/adminfolder/NoteAdd'
import Cart from '../Components/Cart/Cart'
import CosmeticProduct from '../Components/Cosmetic/CosmeticProduct'
import Home from '../Components/Home'
import ProductOfHome from '../Components/HomePage/ProductOfHome'
import Login from './Login'
import Signup from './Signup'

function AllRoutes() {
    return (



        <Box>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<ProductOfHome/>} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/beautyproduct' element={<CosmeticProduct />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/admin' element={<NoteAdd />} />

            </Routes>
        </Box>
    )
}

export default AllRoutes
