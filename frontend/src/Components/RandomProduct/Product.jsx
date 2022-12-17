import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../Redux/products/product.action';
import ProductList from './ProductList';
import { Box, SimpleGrid } from '@chakra-ui/react'
import Functionality from './Functionality';
import Pagination from './Pagination';
function Product() {
  const data = useSelector((state) => state.products.data)
  const state = useSelector((state) => state.products)
  console.log(data)
  console.log(state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProduct(state));
    console.log(state.page, "page")
  }, [state.filter, state.sort,state.limit,state.page])


  return (
    <>
      <Box>
        <Functionality />
      </Box>
      <Box>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 3, lg: 4 }} spacing='20px' p={'2rem'}>
          {data?.map((el, i) => {
            // console.log(el)
            return <ProductList product={el} key={i} />
          })
          }
        </SimpleGrid>

      </Box>
      <Box>
        <Pagination />
      </Box>
    </>



  )
}

export default Product