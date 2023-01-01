import React from 'react'
import { Box, Select, Stack } from "@chakra-ui/react"
import { useDispatch } from 'react-redux'
import { filterProduct, sortProduct } from '../../Redux/products/product.action'
function Functionality() {
    const dispatch = useDispatch()

    return (
        <Stack>
            <Box
                display={'flex'}
                justifyContent={'space-around'}
                gap={5}
                m={'auto'}
                mt={10}
                w={'50%'}
            >
                <Select placeholder='Select Category' onChange={(e) => dispatch(filterProduct(e.target.value))} size='md' borderColor={'purple'}>
                    <option value="Electronics">Electronics</option>
                    <option value='Furniture'>Furniture</option>
                    <option value='Shoes'>Shoes</option>
                    <option value='Others'>Others</option>
                </Select>
                <Select placeholder='Select Price' onChange={(e) => dispatch(sortProduct(e.target.value))} size='md' borderColor={'purple'}>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Decsending</option>
                </Select>

            </Box>

        </Stack>
    )
}

export default Functionality