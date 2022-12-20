
import React, { useEffect } from 'react'
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux"
import { getData } from '../../Redux/MakeupProduct/make.action';
import {CosmeticList} from './CosmeticList';
function CosmeticProduct() {
// https://mock-api-oc4h.onrender.com/products
const products = useSelector((state)=>state.makeup.data)


const dispatch = useDispatch()

useEffect(() => {
  dispatch(getData())
}, [])

console.log(products,'products')
return (
    <>

    <Flex h="100vh"
      //  border="1px green solid"
      w='100%' >

      <Box>
      </Box>
      <Box h="100%" overflow="scroll" overflowX={"hidden"} >
        <Grid templateColumns="repeat(4, 1fr)" gap={1}>
          {products?.map((item) => {
            return <CosmeticList key={item.id} item={item} />;
          })}
        </Grid>
      </Box>

    </Flex>
  </>
  )
}

export default CosmeticProduct
