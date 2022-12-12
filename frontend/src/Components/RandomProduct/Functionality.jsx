import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Select, Stack } from "@chakra-ui/react"
import { filterProduct } from '../../Redux/products/product.action'
function Functionality() {
    const data = useSelector((state) => state.products.data)
    const filterData = useSelector((state)=> state.products.filterData)
    const dispatch = useDispatch()
    console.log(filterData)


    const handleChangeByCategory =(e)=>{
        const val = e.target.value
        const filterProd= data.filter((el,i)=>{
            return val === el.category.name
        })
        dispatch(filterProduct(filterProd))
    }
    const handleChangeByPrice =(e)=>{
        const val = e.target.value
        const asc =  filterData.sort((a,b)=>{
            if(val=='asc'){
                if(a.price > b.price){
                    return 1
                }else{
                    return -1
                }
            }
        })
        console.log(asc ,'ascdata')
        dispatch(filterProduct([...asc]))
        let desc =  filterData.sort((a,b)=>{
            if(val=='desc'){
                if(a.price < b.price){
                    return 1
                }else{
                    return -1
                }
            }
        })
        console.log(desc, 'descdata')
        dispatch(filterProduct([...desc]))
    }
    

    return (
        <Stack>
            <Box
                display={'flex'}
                justifyContent={'space-around'}
                gap={5}
                m={'auto'}
                mt={10}
                w={'95%'}
            >
                <Select placeholder='Select Category' onChange={handleChangeByCategory} size='md' borderColor={'purple'}>
                    <option value='"Electronics"'>Electronics</option>
                    <option value='Furniture'>Furniture</option>
                    <option value='Shoes'>Shoes</option>
                    <option value='Others'>Others</option>
                </Select>
                <Select placeholder='Select Price'onChange={handleChangeByPrice} size='md' borderColor={'purple'}>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Decsending</option>
                </Select>

            </Box>

        </Stack>
    )
}

export default Functionality