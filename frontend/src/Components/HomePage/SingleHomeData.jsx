import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Cartdata } from '../context/Cartsdata'


function SingleHomeData() {
  const [data, setData] = useState({})
  const [singleData, setSingleData] = useState([])
  const params = useParams()

const {AddtoCart}=useContext(Cartdata)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((res) => setData(res))


  }, [])
  // console.log(data);
  const { rating } = data
  // console.log(rating)

  return (
    <div >
      {/* <h1>{params.id}</h1> */}
      <img src={data.image} alt={data.title} />
      <h3>Price: {data.price}</h3>
      <h3>Rating: {data?.rating?.rate ? data.rating.rate : "not available"}</h3>
      <h3>Category: {data.category}</h3>
      <h3>Title: {data.title}</h3>
      <p>Description: {data.description}</p>
      <button onClick={()=>AddtoCart(data)}>  Add to Cart</button>
    </div>
  )
}

export default SingleHomeData


