import storage from "../../utils/storage/cryptoStorage";
import { axiosInstance } from "../config/axiosInstance";


export const AuthService = {
    login: async (email: string, password: string) => {
        try {
            const response = await axiosInstance.post<LoginResponse>("/token", { email, password });
            storage.saveLocalStorage("token", response.data.token)
            return response.data;
        } catch (error) {
            console.log("Auth Service error: ", error);
            throw error
        }
    }
}

interface LoginResponse{
    token: string
}