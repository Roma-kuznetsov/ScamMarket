import * as axios from "axios";

const instance = axios.create({
    //withCredentials: true,
    baseURL: 'http://localhost:3001/api/',
})

export const productsAPI = {
    getTShirt(currentPage = 1, pageSize = 16) {
        debugger
        return fetch(`/api/productstshirt?count=${pageSize}&page=${currentPage}`)
        .then( response =>  response.json())
        .then( response => response)
    },

    // создать гетОне на бэке
    getOneTShirt(itemId) {
        debugger
        return fetch (`/api${itemId}`)
        .then( response =>  response.json())
        .then( response => response)
    }
}


//return instance.get(`productstshirt?count=${pageSize}&page=${currentPage}`)
            //.then(response => response.data)