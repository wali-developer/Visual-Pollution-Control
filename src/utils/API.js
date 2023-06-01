import axios from "axios"

const API = axios.create({
    baseURL: 'https://pollution-monitoring.herokuapp.com/'
})


export default API;