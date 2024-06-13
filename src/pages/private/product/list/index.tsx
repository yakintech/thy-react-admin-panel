import React from 'react'
import { useBaseQuery } from '../../../../api/base/baseQuery'

function List() {

  const {data, isLoading} = useBaseQuery(["products"], "api/productsss")

  return <>
    {
      isLoading ? <></> : <ul>
        {
          data?.map((product: any) => {
            return <li key={product.id}>{product.name}</li>
          })
        }
      </ul>
    }
  </>
}

export default List