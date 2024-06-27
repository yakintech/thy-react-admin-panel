import React, { useContext } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Product from './product'
import Dashboard from './dashboard'
import { AuthContext, AuthContextType } from '../../context/AuthContext'
import Supplier from './supplier'
import Settings from './settings'
import { useTranslation } from 'react-i18next'

function PrivateLayout() {

  const { logout } = useContext(AuthContext) as AuthContextType

  const navigate = useNavigate();

  const { t, i18n } = useTranslation()

  const userLogout = () => {
    logout()
    navigate("/auth/login")
    localStorage.removeItem("token")
  }

  let lang = localStorage.getItem("lang")


  const change = (e: any) => {
    i18n.changeLanguage(e.target.value)
    localStorage.setItem("lang", e.target.value)

    if(e.target.value === "ar") {
      document.body.style.direction = "rtl"
    }
    else {
      document.body.style.direction = "ltr"
    }
  }

  return <>
    <ul style={{display:'flex', justifyContent:'space-between'}} >
      <li><Link to={'/'}>{t("home")}</Link></li>
      <li><Link to={'/products'}>{t("products")}</Link></li>
      <li><Link to={'/products/add'}>{t("addProduct")}</Link></li>
      <li><Link to={'/suppliers'}>{t("suppliers")}</Link></li>
      <li><Link to={'/settings'}>{t("settings")}</Link></li>
      <li>
        <select onChange={change} value={lang ?? "en"}>
          <option value="en">EN</option>
          <option value="tr">TR</option>
          <option value="ar">AR</option>
        </select>
      </li>
    </ul>
    <button onClick={() => userLogout()}>Logout</button>
    <hr />
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/products/*' element={<Product />} />
      <Route path='/suppliers/*' element={<Supplier/>} />
      <Route path='/settings' element={<Settings/>} />
      <Route path='*' element={<Dashboard />} />
    </Routes>
  </>
}

export default PrivateLayout