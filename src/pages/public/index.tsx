import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './auth'
import Login from './auth/Login'

function PublicLayout() {
  return <>
    <Routes>
        <Route path='/auth/*' element={<Auth/>} />
        <Route path='*' element={<Login/>} />

    </Routes>
  </>
}

export default PublicLayout