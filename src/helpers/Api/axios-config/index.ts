import axios from "axios";
import { errorInterceptor, responseInterceptor } from "./interceptors";

const apiUrl = "http://localhost:3333";

const Api = axios.create({
    baseURL: apiUrl,
    headers: {
        "Content-Type": "application/json"
    }
});

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error)
);


export default Api