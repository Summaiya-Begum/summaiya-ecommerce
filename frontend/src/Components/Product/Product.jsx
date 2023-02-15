import React, { useCallback } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../Redux/products/product.action';
import ProductList from './ProductList';
import { Box, SimpleGrid, Spinner, Text, CircularProgress, Center } from '@chakra-ui/react'
import Functionality from './Functionality';
import Pagination from './Pagination';
import ArrowUp from '../ArrowUp';
function Product() {
  const data = useSelector((state) => state.products.data)
  const { isLoading } = useSelector((state) => state.products)
  const { filter, sort, limit, page } = useSelector((state) => state.products)
  // console.log(data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProduct({ filter, sort, limit, page }));
  }, [filter, sort, limit, page])
  // state.filter, state.sort,state.limit,state.page
  return (
    <>

      <Box >
        {isLoading ? <Box height={'60vh'} textAlign={'center'} alignContent={'center'} padding={'6rem'} >
          <CircularProgress value={30} size='120px' thickness='5px' isIndeterminate color='#E80070' margin={'auto'} />
          <Text fontFamily={'cursive'} fontWeight={'bold'} fontSize={'25px'} as="span"> Loading Data...</Text>

        </Box> :
          <Box>
            <Functionality />
            <SimpleGrid columns={[1, 2, 3, 4]} borderRadius={'3xl'}
              spacing='20px' p={'2rem'}>
              {data?.map((el, i) => {
                // console.log(el)
                return <ProductList product={el} key={i} />
              })
              }
            </SimpleGrid>
            <Box>
              <Pagination />
            </Box>
          </Box>

        }
      </Box>

      <ArrowUp />
    </>



  )
}

export default Product