import React, { useContext } from 'react'
import PrivateLayout from './private'
import PublicLayout from './public'
import { AuthContext, AuthContextType } from '../context/AuthContext'

function Pages() {


    const { isAuth, isLoading } = useContext(AuthContext) as AuthContextType



    return <>
        {
            isLoading ? <></> : isAuth ? <PrivateLayout /> : <PublicLayout />
        }

    </>
}

export default Pages