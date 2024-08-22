import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com",      
    //вказати, що відповідь отримуємо у форматі JSON
    headers: {'Content-Type': 'application/json'},
});

export default axiosInstance;