import axios from "axios";

const instace = axios.create({
    baseURL: "http://localhost:3001"
})
instace.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);
export default instace;