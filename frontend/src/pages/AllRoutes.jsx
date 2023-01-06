import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from '../Components/Blog/Blog'
import BlogCard from '../Components/Blog/BlogCard'
import Cart from '../Components/Cart/Cart'
import Home from '../Components/Home'
import ProductOfHome from '../Components/HomePage/ProductOfHome'
import WishList from '../Components/WishList/WishList'
import Login from './Login'
import Signup from './Signup'

function AllRoutes() {
    return (



        <Box>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<ProductOfHome />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/myblog' element={<BlogCard />} />
                <Route path='/wishlist' element={<WishList />} />
            </Routes>
        </Box>
    )
}

export default AllRoutes
