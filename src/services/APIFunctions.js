import axios from "axios";
const URL = "https://nuetzi-blog-backend.herokuapp.com/blogs/";

export function getIndex () {
    const response = axios.get(URL);
    return response;
};

export function getItem(id) {
    const response = axios.get(`${URL}${id}`);
    return response;
};

export function deleteItem(id) {
    const response = axios.delete(`${URL}${id}`);
    return response;
};

export function createItem(createdItem) {
    const response = axios.post(URL, createdItem);
    return response;
};

export function editItem(id, updatedItem) {
    const response = axios.put(`${URL}${id}`, updatedItem);
    return response;
};