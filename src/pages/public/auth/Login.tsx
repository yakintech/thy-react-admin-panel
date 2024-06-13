import React, { useContext, useState } from 'react'
import { AuthContext, AuthContextType } from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { AuthService } from '../../../api/auth/authService'

function Login() {

  const [email, setemail] = useState("admin@mail.com")
  const [password, setpassword] = useState("123")

  const { login: contextLogin } = useContext(AuthContext) as AuthContextType

  const navigate = useNavigate()

  const login = async () => {
    try {
      await AuthService.login(email, password)
      contextLogin({ id: "1", email: email })
      navigate("/")
    } catch (error) {
      alert("Email veya şifre hatalı")
    }

  }

  return <>
    <div>
      <label htmlFor="">EMail</label>
      <input type='text' onChange={(e) => setemail(e.target.value)} value={email} />
    </div>
    <div>
      <label htmlFor="">Password</label>
      <input type='password' onChange={(e) => setpassword(e.target.value)} value={password} />
    </div>
    <div>
      <button onClick={login}>Login</button>
    </div>
  </>
}

export default Login