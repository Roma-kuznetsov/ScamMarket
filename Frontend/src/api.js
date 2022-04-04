import axios from "axios"


export const productsAPI = {
    getTShirt(currentPage = 1, pageSize = 16) {
        return axios.get(`http://localhost:3001/api/productstshirt?count=${pageSize}&page=${currentPage}`)
    },

    getOneTShirt(itemId) {
        debugger
        return axios.get(`http://localhost:3001/api${itemId}`)
    },
    getFavorits(userId){
        debugger
        return axios.get(`http://localhost:3001/api/favorits?id=${userId}`)
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
    addFav(idUser,idItem){
        return axios.put('http://localhost:3001/api/setfav',
        {_id:idUser,like:idItem})
    },
    removeFav(idUser,idItem){
        return axios.put('http://localhost:3001/api/removefav',
        {_id:idUser,like:idItem})
    },
    addCart(idUser,idItem,cartSize,count,price,picture){
        return axios.put('http://localhost:3001/api/setcart',
        {_id:idUser,cart:idItem,cartSize,count,price,picture})
    }
}


