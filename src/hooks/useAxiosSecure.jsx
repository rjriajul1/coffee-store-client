import axios from "axios";
import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
let isInterceptor = false;
const axiosInstance = axios.create({
  baseURL: "https://coffee-store-server-tau-two.vercel.app",
});

const useAxiosSecure = () => {
  // const token = localStorage.getItem("token");
  const {userSignOut,user} = use(AuthContext)
  const token = user?.accessToken
  if (!isInterceptor) {
    //  interceptors request
    axiosInstance.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });

    // interceptors response
    axiosInstance.interceptors.response.use((res) => res.data, error => {
      if(error.status === 401 || error.status === 403){
       userSignOut().then(res=>{
        console.log(res);
       }).catch(error=> {
        console.log(error);
       })
      }
      return Promise.reject(error)
    });

    isInterceptor = true;
  }
  return axiosInstance;
};

export default useAxiosSecure;
