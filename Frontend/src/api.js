import axios from "axios"
import { setUser } from "./redux/authReducer"


export const productsAPI = {
    getTShirt(currentPage = 1, pageSize = 16) {
        return fetch(`/api/productstshirt?count=${pageSize}&page=${currentPage}`)
            .then(response => response.json())
            .then(response => response)
    },

    getOneTShirt(itemId) {
        return fetch(`/api${itemId}`)
            .then(response => response.json())
            .then(response => response)
    }
}

export const authAPI = {
    authReg(email, password, name) {
        debugger
        return axios.post("http://localhost:3001/api/createuser", { email, password, name })
    },
    login(email, password) {
        debugger
        return axios.post("http://localhost:3001/api/login", { email, password })
    },
    autoAuth() {
        debugger
        return axios.get("http://localhost:3001/api/autoAuth",
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        )
    }
}


