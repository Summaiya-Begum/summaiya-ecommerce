const express = require ('express')
const productRoutes =  express.Router()


productRoutes.get('/',(req,res)=>{
    const token = req.headers
    res.send(token.authorization)
})

module.exports = productRoutes