import React from 'react'
import { Routes, Route } from 'react-router-dom'
import List from './list'

function CartMain() {
  return <Routes>
    <Route path="/" element={<List />} />
    </Routes>
}

export default CartMain