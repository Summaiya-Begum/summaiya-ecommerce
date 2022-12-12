import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../Redux/products/product.action';
import ProductList from './ProductList';
import { Box, SimpleGrid } from '@chakra-ui/react'
import Functionality from './Functionality';
function Product() {
  const data = useSelector((state) => state.products.data)
  const filterData  = useSelector((state)=> state.products.filterData)
  // console.log(data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProduct())
  }, [])
  return (
    <>
      <Box>
        <Functionality />
      </Box>
      <Box>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing='20px' p={'2rem'}>
          {filterData?.map((el, i) => {
            // console.log(el)
            return <ProductList product={el} />
          })
          }
        </SimpleGrid>

      </Box>

    </>



  )
}

export default Product