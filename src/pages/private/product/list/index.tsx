import React from 'react'
import { useBaseQuery } from '../../../../api/base/baseQuery'
import TDataGrid from '../../../../compoents/core-components/data-grid'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addItem } from '../../../../store/CartSlice'

function List() {

  const { data, isLoading } = useBaseQuery(["products"], "api/products")

  const navigate = useNavigate()

  const dispatch = useDispatch()


  const add = (product: any) => {
    //buradan global statei güncellemem gerek
    dispatch(addItem({
      id: product.id,
      name: product.name,
      unitPrice: product.unitPrice
    }))

    
  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100
    },
    {
      field: "name",
      headerName: "Name",
      width: 200
    },
    {
      field: "unitPrice",
      headerName: "Price",
      width: 200
    },
    {
      field:"addToCart",
      headerName: "Add to Cart",
      width: 200,
      renderCell: (params: any) => {
        return <Button variant='contained' color="primary" onClick={() => add(params.row)}>Add to Cart</Button>
      }
    }
  ]

  const deleteRow = (id: number) => {
    console.log(id)
  }

  return <>
    {
      <TDataGrid
        rows={data}
        columns={columns}
        deleteRow={deleteRow} 
        detailRow={(id: number) => navigate(`/products/detail/${id}`)}
        loading={isLoading}
        pageSize={10}
        />
    }
  </>
}

export default List