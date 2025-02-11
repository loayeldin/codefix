import axios from "axios";

const apiKey = process.env.REACT_APP_MOCK_API_KEY;
const apiUrl = `https://${apiKey}.mockapi.io/api/problems/`
console.log(apiKey);
const axiosClient = axios.create({
    baseURL:apiUrl,
    
})

export default axiosClient