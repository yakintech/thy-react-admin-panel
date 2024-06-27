import { DataGrid, DataGridProps } from '@mui/x-data-grid'
import React from 'react'



interface TDataGridProps {
    rows : any[]
    showColumns?: string[]
    columnHeaderNames?: string[]
}



function AutoDataGrid(props: TDataGridProps) {

    //auto column generate
    let columns : any[] = []
    if(props.rows){
        columns = Object.keys(props.rows[0]).map((key) => {
            return {
                field: key,
                headerName: key,
                width: 200
            }
        })
    }

    if(props.showColumns){
        columns = columns.filter((column) => {
            return props.showColumns?.includes(column.field)
        })
    }

    if(props.columnHeaderNames){
        columns = columns.map((column) => {
            let index = props.showColumns?.indexOf(column.field)
            column.headerName = props.columnHeaderNames![index!]
            return column
        })
    }

  return <>
    <DataGrid
        {...props}
        columns={columns as any[]}
    />
  </>
}

export default AutoDataGrid