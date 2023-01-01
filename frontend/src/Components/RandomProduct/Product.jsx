import React, { useCallback } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../Redux/products/product.action';
import ProductList from './ProductList';
import { Box, Heading, SimpleGrid, Image, Input } from '@chakra-ui/react'
import Functionality from './Functionality';
import Pagination from './Pagination';
import Footer from '../Footer';
import ArrowUp from '../ArrowUp';
import loading from '../../assest/loading.gif'
function Product() {
  const data = useSelector((state) => state.products.data)
  const { isLoading } = useSelector((state) => state.products)
  const { filter, sort, limit, page } = useSelector((state) => state.products)
  console.log(data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProduct({ filter, sort, limit, page }));
  }, [filter, sort, limit, page])

  // state.filter, state.sort,state.limit,state.page



  return (
    <>

      <Box >
        {isLoading ? <Image width={"30%"} h={"30%"} m={'auto'} src={loading} /> :
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
          </Box>
        }
      </Box>
      <Box>
        <Pagination />
      </Box>
      <ArrowUp />
    </>



  )
}

export default Product