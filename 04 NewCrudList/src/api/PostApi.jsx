import axios from "axios"

const api = axios.create({
    baseURl: "https://jsonplaceholder.typicode.com"
});

export const getPost = () => {
    return api.get("/posts")
};
