import axios from "axios";

const instace = axios.create({
    baseURL: "https://62d4ee22cd960e45d45dc40a.mockapi.io"
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