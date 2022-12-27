import axios from "axios"

const instance = 'https://backend-production-2ee6.up.railway.app'

export const productsAPI = {
    getTShirt(currentPage = 1, pageSize = 16, type) {
        return axios.get(`${instance}/api/productstshirt?count=${pageSize}&page=${currentPage}&type=${type}`)
    },

    getOneTShirt(itemId) {
        return axios.get(`${instance}/api${itemId}`)
    },
    getFavorits(userId, currentPage = 1, pageSize = 16) {
        return axios.get(`${instance}/api/favorits?id=${userId}&count=${pageSize}&page=${currentPage}`)
    }
}

export const authAPI = {
    authReg(email, password, name) {
        return axios.post(`${instance}/api/createuser`, { email, password, name })
    },
    login(email, password) {
        return axios.post(`${instance}/api/login`, { email, password })
    },
    autoAuth() {
        return axios.get(`${instance}/api/autoAuth`,
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        )
    },
    addFav(idUser, idItem) {
        return axios.put(`${instance}/api/setfav`,
            { _id: idUser, like: idItem })
    },
    removeFav(idUser, idItem) {
        return axios.put(`${instance}/api/removefav`,
            { _id: idUser, like: idItem })
    },
    addCart(idUser, idItem, cartSize, count, price, picture) {
        return axios.put(`${instance}/api/setcart`,
            { _id: idUser, cart: idItem, cartSize, count, price, picture })
    },
    removeCart(idUser, fieldId) {
        return axios.put(`${instance}/api/removecart`,
            { _id: idUser, fieldId })
    },
    updateCart(_id, fieldId, count) {
        return axios.put(`${instance}/api/updatecart`,
            { _id, fieldId, count })
    },
    clearCart(id) {
        return axios.get(`${instance}/api/clearcart?id=${id}`)
    }
}

