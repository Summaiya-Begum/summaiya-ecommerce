
import React, { useEffect } from 'react'
import { Box, Flex, Grid, GridItem,Image } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux"
import { getData } from '../../Redux/MakeupProduct/make.action';
import { CosmeticList } from './CosmeticList';
import { useSearchParams } from 'react-router-dom';
import CosmeticPagination from './CosmeticPagination';
import loading from '../../assest/loading.gif'
function CosmeticProduct() {
  // https://mock-api-oc4h.onrender.com/products
  const products = useSelector((state) => state.makeup.data)
  const { isLoading } = useSelector((state) => state.makeup)
  const searchParams = useSearchParams()
  // const { isLoading } = useSelector((state) => state.makeup)
console.log(searchParams)


  const dispatch = useDispatch()

  useEffect(() => {
    if (products.length === 0) {
      const sortBy = searchParams.get("sortBy");
      let getProductParams = {
        params: {
          _limit:searchParams.get(15),
          _page:searchParams.get(1),
          brand: searchParams.getAll("brand"),
          category: searchParams.getAll("category"),
          price: searchParams.getAll("price"),
          _sort: sortBy && "price",
          _order: sortBy,
        },
      };
      console.log(getProductParams);
      dispatch(getData(getProductParams));
    }
  }, []);

  console.log(products, 'products')


  return (
    <>

      <Flex h="100vh"
        //  border="1px green solid"
        w='100%' >
       { isLoading ? <Image width={500} h={60} m={'auto'} src={loading} /> :
       <Box h="100%" overflow="scroll" overflowX={"hidden"} >
          <Grid templateColumns="repeat(4, 1fr)" gap={1}>
            {
              products?.map((item) => {
                return <CosmeticList key={item.id} item={item} />;
              })
            }
          </Grid>
        </Box>
        }
        <CosmeticPagination  />
      </Flex>
    </>
  )
}

export default CosmeticProduct
