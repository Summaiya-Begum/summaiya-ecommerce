 const {Router} = require ("express")

 const whishList = Router()


 whishList.get('/',(req,res)=>{
    res.send({Msg:"Welcome Wish Home List"})
 })
 whishList.patch('/edit/:id',(req,res)=>{
    const productId = req.params._id
    console.log(productId);


 })


 module.exports = whishList