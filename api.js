import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const fetchProducts = (category, params) =>
  API.get(`/categories/${category}/products`, { params });
export const fetchProductById = (category, id) =>
  API.get(`/categories/${category}/products/${id}`);
