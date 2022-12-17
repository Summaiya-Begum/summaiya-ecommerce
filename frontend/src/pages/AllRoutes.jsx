import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Product from '../Components/RandomProduct/Product'
import Login from './Login'
import Signup from './Signup'

function AllRoutes() {
    return (


        
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<Product />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    )
}

export default AllRoutes
