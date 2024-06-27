import React from 'react'
import { useBaseQuery } from '../../../../api/base/baseQuery'
import TDataGrid from '../../../../compoents/core-components/data-grid'
import { useNavigate } from 'react-router-dom'

function List() {

  const { data, isLoading } = useBaseQuery(["products"], "api/products")

  const navigate = useNavigate()

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