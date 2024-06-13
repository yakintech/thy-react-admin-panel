import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../api/config/axiosInstance";
import storage from "../utils/storage/cryptoStorage";


export const AuthContext = createContext<AuthContextType | null>(null);


export const AuthProvider = ({ children }: any) => {

    const [user, setuser] = useState<User>({
        id: "",
        email: ""
    })

    const [isAuth, setisAuth] = useState(false)
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        
    var token = storage.getLocalStorage("token")

    if(token){
        axiosInstance.get("/check",{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            setisAuth(true)
            setisLoading(false)
        })
        .catch(err => {
            setisAuth(false)
            window.location.href = "/auth/login"
        })
    }
    else{
        setisAuth(false)
        setisLoading(false)
    }
    
    }, [])
    

    const login = (user: User) => {
        setuser(user);
        setisAuth(true);
        setisLoading(false)
    }

    const logout = () => {
        setuser({
            id: "",
            email: ""
        });
        setisAuth(false);
    }


    return <AuthContext.Provider value={{ user, login, logout, isAuth, isLoading }}>
        {children}
    </AuthContext.Provider>
}



export type AuthContextType = {
    user: User,
    login: (user: any) => void,
    logout: () => void,
    isAuth: boolean,
    isLoading: boolean
}

export type User = {
    id: string,
    email: string
}