import React, { useContext } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Product from './product'
import Dashboard from './dashboard'
import { AuthContext, AuthContextType } from '../../context/AuthContext'
import Supplier from './supplier'

function PrivateLayout() {

  const { logout } = useContext(AuthContext) as AuthContextType

  const navigate = useNavigate();

  const userLogout = () => {
    logout()
    navigate("/auth/login")
    localStorage.removeItem("token")
  }

  return <>
    <ul>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/products'}>Products</Link></li>
      <li><Link to={'/products/add'}>Add Product</Link></li>
      <li><Link to={'/suppliers'}>Suppliers</Link></li>
    </ul>
    <button onClick={() => userLogout()}>Logout</button>
    <hr />
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/products/*' element={<Product />} />
      <Route path='/suppliers/*' element={<Supplier/>} />
      <Route path='*' element={<Dashboard />} />
    </Routes>
  </>
}

export default PrivateLayout