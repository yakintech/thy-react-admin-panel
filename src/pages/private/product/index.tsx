import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from './list'
import Add from './add'
import Detail from './detail'

function Product() {
    return <>
        <Routes>
            <Route path='/' element={<List />} />
            <Route path='/add' element={<Add />} />
            <Route path='/detail/:id' element={<Detail />} />
        </Routes>
    </>
}

export default Product