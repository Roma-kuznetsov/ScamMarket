import { authAPI, authRegAs } from "../api"
import axios from "axios"

const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"
const ERROR_MESSAGE = "ERROR_MESSAGE"
const SET_ERROR = "SET_ERROR"


let initialState = {
    isAuth: false,
    profile: {},
    errorMessage: ""
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                profile: action.payload,
                isAuth: true
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                profile: {},
                isAuth: false
            }

        case ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.message
            }
        case SET_ERROR:
            return {
                ...state,
                errorMessage: ""
            }
        default:
            return state;
    }
}

export const errorMessage = (message) => ({ type: ERROR_MESSAGE, message })
export const setUser = user => ({ type: SET_USER, payload: user })
export const logout = () => ({ type: LOGOUT })
export const setError = () => ({ type: SET_ERROR })




export const authThank = (email, password, name) => async (dispatch) => {
    const response = await authAPI.authReg(email, password, name)
    if (response.data.resaultCode === 0) {
        dispatch(loginThunk(response.data.email, response.data.password))
    } else {
        dispatch(errorMessage(response.data.message))
    }

}




export const loginThunk = (email, password) => async (dispatch) => {
    const response = await authAPI.login(email, password)
    if (response.data.resaultCode === 0) {
        dispatch(setUser(response.data.user))
        localStorage.setItem('token', response.data.token)
    } else {
        dispatch(errorMessage(response.data.message))
    }
}




export const autoAuthThunk = () => async (dispatch) => {
    try {
        const response = await authAPI.autoAuth()
        dispatch(setUser(response.data.user))
        localStorage.setItem('token', response.data.token)
        console.log('Authorization acces')
    } catch (e) {
        localStorage.removeItem('token')
    }
}







export default authReducer;