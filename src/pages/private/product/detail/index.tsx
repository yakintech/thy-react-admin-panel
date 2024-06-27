import React from 'react'
import { useBaseQuery } from '../../../../api/base/baseQuery'
import { useParams } from 'react-router-dom'

function Detail() {

    const {id} = useParams()
    const {data, isLoading} = useBaseQuery(["products"], `api/products/${id}`)


  return <>
    <h1>Name: {data.name}</h1>
    <h1>Price: {data.unitPrice}</h1>
    <h1>Stock: {data.unitsInStock}</h1>
  </>
}

export default Detail