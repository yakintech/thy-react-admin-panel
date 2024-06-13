//base query with react-query

import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../config/axiosInstance";
import storage from "../../utils/storage/cryptoStorage";


export const useBaseQuery = (keys: string[], url: string) => {

    let token = storage.getLocalStorage("token");

    return useQuery({
        queryKey: keys,
        queryFn: async () => {
            try {
                const response = await axiosInstance.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                return response.data;
            } catch (error:any) {
                if(error.response.status === 401){
                    storage.removeLocalStorage("token");
                    window.location.href = "/auth/login";
                }
                throw error
            }

        }
    })
}