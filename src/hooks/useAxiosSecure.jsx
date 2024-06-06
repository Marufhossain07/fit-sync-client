import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut} = useContext(AuthContext);
    axiosSecure.interceptors.response.use(res =>{
        return res
    },
    async error=>{
        if(error.response.status === 403 || error.response.status === 401){
           await logOut();
            navigate('/login')
        }
        return Promise.reject(error)
    }
)
    return axiosSecure
};

export default useAxiosSecure;