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

export const auth = async (email, password, name) => {
    const response = await axios.post("http://localhost:3001/api/createuser", {
        email,
        password,
        name
    })
    if (response.data.resaultCode === 0) {
        alert("Успешная регистрация")
        console.log(response.data)
    } else {
        alert(response.data.message)
    }
}

export const login = (email, password) => {
    debugger
    return async dispatch => {
        const response = await axios.post("http://localhost:3001/api/login", {
            email,
            password
        })
        dispatch(setUser(response.data.user))
        localStorage.setItem('token', response.data.token)
        console.log(response.data)
        alert(response.data.message)
        alert(localStorage.getItem('token'))
    }

}

export const autoAuth = () => {
    return async dispatch => {
        try {
            debugger
            const response = await axios.get("http://localhost:3001/api/autoAuth",
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log('1111')

        } catch (e) {
            debugger
            localStorage.removeItem('token')
            console.log("block catch")
            console.log(e.response.data.message)
        }
    }

}
