import { Button } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePageProduct } from '../../Redux/products/product.action'
function createButtonArray(n) {
    return new Array(n).fill(0)

}

function Pagination() {
    const dispatch = useDispatch()
    const state= useSelector((state) => state.products)
    useEffect(()=>{

    },[state.limit,state.page])
    let x = Math.floor(200 / state.limit)
    let pagination = createButtonArray(x).map((el, i) => {
        // console.log(el, i)
        return (
            <Button
                onClick={() => (dispatch(changePageProduct(i + 1)))}
                disabled={state.page === i + 1}>
                {i + 1}
            </Button>)
    })
    return (
        <div>{pagination}</div>
    )
}

export default Pagination
