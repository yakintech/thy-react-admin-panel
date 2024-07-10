import { Autocomplete, CircularProgress, TextField } from "@mui/material"
import { useBaseQuery } from "../../../api/base/baseQuery"
import { useEffect, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { axiosInstance } from "../../../api/config/axiosInstance"
import storage from "../../../utils/storage/cryptoStorage"


interface AsyncAutocompleteProps {
    url: string
    onchange: (value: any) => void
}

const TAsyncAutocomplete = (
    {
        url,
        onchange
    }: AsyncAutocompleteProps) => {


    const [data, setdata] = useState([])


    const [open, setopen] = useState(false)
    const [isLoading, setisLoading] = useState(false)

    const selectData = data?.map((item: any) => {
        return {
            id: item.id,
            title: item.name
        }
    }
    )

    useEffect(() => {

        if (open) {
            setisLoading(true)
            let token = storage.getLocalStorage("token");

            axiosInstance.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                setdata(response.data)
                setisLoading(false)
            }).catch((error) => {
                console.log(error)
            })
        }

    }, [open])


    return <>
        {
            <Autocomplete
                options={selectData || []}
                open={open}
                onOpen={() => setopen(true)}
                onClose={() => setopen(false)}
                onChange={(e, value) => onchange(value)}
                loading={isLoading}
                getOptionLabel={(option: any) => option.title}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Asynchronous"
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <>
                                    {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </>
                            ),
                        }}
                    />
                )}
            />
        }
    </>

}

export default TAsyncAutocomplete