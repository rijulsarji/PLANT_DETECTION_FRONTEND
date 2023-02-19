import React from 'react'
import { useParams } from 'react-router-dom'

const Plants = () => {

  const productId = useParams();
  console.log(productId.id);

  return (
    <div>{productId.id}</div>
  )
}

export default Plants