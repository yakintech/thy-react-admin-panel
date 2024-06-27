import React from 'react'
import { useBaseQuery } from '../../../../api/base/baseQuery'
import AutoDataGrid from '../../../../compoents/core-components/data-grid/AutoDataGrid'

function List() {

    const { data, isLoading } = useBaseQuery(["suppliers"], "api/suppliers")
    let showColumns = ["id", "companyName", "contactName"]
    let headerNames = ["ID", "Company Name", "Contact Name"]

    return <>
        {
            isLoading ? <></> : <AutoDataGrid
                rows={data}
                showColumns={showColumns}
                columnHeaderNames={headerNames}
            />
        }
    </>
}

export default List