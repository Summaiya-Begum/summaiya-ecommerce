import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import WhisListCard from './WhisListCard'

import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getData } from '../../Redux/wishlist/wishlist.action'

// const token = JSON.parse(localStorage.getItem('token'))
// const getData = () => {
//     return axios.get(`http://localhost:8081/wishlist`, {
//         headers: {
//             "Content-Type": "application/json",
//             authorization: `Bearer ${token}`
//         },
//     })
//     // .then((res) => console.log(res))
//     // .catch((err) => console.log(err))
// }
function WishList() {
    const { wishlistData, msg } = useSelector((state) => state.wishlist)
    const product = useSelector((state) => state.products)
    console.log(wishlistData, msg)
    const dispatch = useDispatch()
    console.log(product)

    useEffect(() => {
        dispatch(getData())
    }, [])
    return (
        <Box>

            <SimpleGrid columns={[1, 2, 3, 4]} borderRadius={'3xl'}
                spacing='20px' p={'2rem'}>
                {
                    wishlistData.map((item, i) => {
                        return (
                            <WhisListCard item={item} key={i} />
                        )
                    })
                }
            </SimpleGrid>
        </Box>
    )
}

export default WishList
