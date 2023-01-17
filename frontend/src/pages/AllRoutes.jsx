import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Components/Cart/Cart'
import Home from '../Components/Home'
import PrivateRoute from './PrivateRoute'
import WishList from '../Components/WishList/WishList'
import Login from './Login'
import Signup from './Signup'

function AllRoutes() {
    return (
        <Box>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cart' element={
                    <PrivateRoute>
                        <Cart />
                    </PrivateRoute>
                } />
                <Route path='/wishlist' element={
                    <PrivateRoute>
                        <WishList />
                    </PrivateRoute>
                } />
            </Routes>
        </Box>
    )
}

export default AllRoutes
