import axios from "axios"

export const api = axios.create({
  baseURL: "https://api-movies-q5xo.onrender.com"
})