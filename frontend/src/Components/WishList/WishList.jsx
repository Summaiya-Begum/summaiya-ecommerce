import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
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
    const isAuth=useSelector(state=>state.user.isAuth)
    console.log(wishlistData, msg)
    const dispatch = useDispatch()

    useEffect(() => {
        if(isAuth)
        dispatch(getData())
    }, [dispatch,wishlistData.length,isAuth,msg])
    return (
        <Box>
            <Heading>WishList Items: {isAuth?wishlistData?.length:0}</Heading>
            <SimpleGrid columns={[1, 2, 3]} borderRadius={'3xl'}
                spacing='10px' p={'1rem'}>
                {
                    isAuth?
                    wishlistData.map((item, i) => {
                        console.log(item)
                        return (
                            <WhisListCard item={item} key={i} />
                        )
                    })
                    :
                    ""
                }
            </SimpleGrid>
        </Box>
    )
}

export default WishList
