import axios from "axios"


export const productsAPI = {
    getTShirt(currentPage = 1, pageSize = 16, type) {
        return axios.get(`http://localhost:3001/api/productstshirt?count=${pageSize}&page=${currentPage}&type=${type}`)
    },

    getOneTShirt(itemId) {
        return axios.get(`http://localhost:3001/api${itemId}`)
    },
    getFavorits(userId, currentPage = 1, pageSize = 16) {
        return axios.get(`http://localhost:3001/api/favorits?id=${userId}&count=${pageSize}&page=${currentPage}`)
    }
}

export const authAPI = {
    authReg(email, password, name) {
        return axios.post("http://localhost:3001/api/createuser", { email, password, name })
    },
    login(email, password) {
        return axios.post("http://localhost:3001/api/login", { email, password })
    },
    autoAuth() {
        return axios.get("http://localhost:3001/api/autoAuth",
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        )
    },
    addFav(idUser, idItem) {
        return axios.put('http://localhost:3001/api/setfav',
            { _id: idUser, like: idItem })
    },
    removeFav(idUser, idItem) {
        return axios.put('http://localhost:3001/api/removefav',
            { _id: idUser, like: idItem })
    },
    addCart(idUser, idItem, cartSize, count, price, picture) {
        return axios.put('http://localhost:3001/api/setcart',
            { _id: idUser, cart: idItem, cartSize, count, price, picture })
    },
    removeCart(idUser, fieldId) {
        return axios.put('http://localhost:3001/api/removecart',
            { _id: idUser, fieldId })
    },
    updateCart(_id, fieldId, count) {
        return axios.put('http://localhost:3001/api/updatecart',
            { _id, fieldId, count })
    }
}

