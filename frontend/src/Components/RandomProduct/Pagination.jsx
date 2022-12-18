import { Button, Box, SimpleGrid, Grid } from '@chakra-ui/react'
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { changePageProduct } from '../../Redux/products/product.action'
function createButtonArray(n) {
    return new Array(n).fill(0)

}

function Pagination() {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.products)
    let x = Math.floor(200 / state.limit)
    let pagination = createButtonArray(x).map((el, i) => {
        // console.log(el, i)
        return (

                <Button
                    bg='teal'
                    fontWeight={'bold'}
                    p={'0rem 1rem'}
                    _hover={{
                        bg: "black",
                        color:"white"
                    }}
                    onClick={() => (dispatch(changePageProduct(i + 1)))}
                    disabled={state.page === i + 1}>
                    {i + 1}
                </Button>


        )

    })
    return (
        <Box 
        w={'100%'}
        boxShadow={'2xl'}
        display={'flex'} justifyContent={'center'} gap={2} p={'2rem'}>{pagination}</Box>
    )
}

export default Pagination
