import { Button } from '@mui/material'
import { trTR, enUS, arSD } from '@mui/x-data-grid/locales';
import { DataGrid, DataGridProps } from '@mui/x-data-grid'
import React from 'react'


interface TDataGridProps extends DataGridProps {
    deleteRow?: (id: number) => void
    detailRow?: (id: number) => void
    loading: boolean
    pageSize?: number
}

function TDataGrid(props: TDataGridProps) {

    let currentLang = localStorage.getItem("lang") || "en"

    let localeText = enUS;

    switch (currentLang) {
        case "en":
            localeText = enUS
            break;
        case "tr":
            localeText = trTR
            break;
        case "ar":
            localeText = arSD
            break;
    }

    if (props.loading) {
        return <></>
    }

    //if deleteRow has add deleteButton column

    if (props.deleteRow && props.columns) {

        const columns = props.columns as any[]
        columns.push({
            field: "delete",
            headerName: "Delete",
            width: 200,
            renderCell: (params: any) => {
                return <Button variant='contained' color="error" onClick={() => props.deleteRow!(params.row.id)}>Delete</Button>
            }
        })
    }

    if (props.detailRow && props.columns) {

        const columns = props.columns as any[]
        columns.push({
            field: "detail",
            headerName: "Detail",
            width: 200,
            renderCell: (params: any) => {
                return <Button variant='contained' color="primary" onClick={() => props.detailRow!(params.row.id)}>Detail</Button>
            }
        })
    }


    return <DataGrid
        {...props}
        localeText={localeText.components.MuiDataGrid.defaultProps.localeText}
        initialState={{
            pagination: { paginationModel: { pageSize: props.pageSize ?? 5 } },
          }}
    />
}

export default TDataGrid