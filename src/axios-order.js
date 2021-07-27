import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://react-by-burger-5b989.firebaseio.com/",
});

export default axiosInstance;
