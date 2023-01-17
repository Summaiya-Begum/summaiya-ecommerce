import { Button, Box, SimpleGrid, Grid, Stack } from '@chakra-ui/react'
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
                key={i}
                bg='#E80070'
                color={'black'}
                fontWeight={'bold'}
                p={'0rem 1rem'}
                _hover={{
                    bg: "black",
                    color: "white"
                }}
                onClick={() => (dispatch(changePageProduct(i + 1)))}
                disabled={state.page === i + 1}>
                {i + 1}
            </Button>


        )

    })
    return (
        <Box
            whiteSpace={5}
            boxShadow={'2xl'}
            p={'2rem'}>{pagination}</Box>
    )
}

export default Pagination
