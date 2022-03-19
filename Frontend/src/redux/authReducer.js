import { authAPI, authRegAs } from "../api"
import axios from "axios"

const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"
const ERROR_MESSAGE = "ERROR_MESSAGE"


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
        /*case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                profile: {},
                isAuth: false
            }
            */
        case ERROR_MESSAGE:
            debugger
            return {
                ...state,
                errorMessage: action.message
            }
        default:
            return state;
    }
}

export const errorMessage = (message) => ({ type: ERROR_MESSAGE, message })
export const setUser = user => ({ type: SET_USER, payload: user })
export const logout = () => ({ type: LOGOUT })




export const authThank = (email, password, name) => async (dispatch) => {
    debugger
    const response = await authAPI.authReg(email, password, name)
    if (response.data.resaultCode === 1) {
        dispatch(errorMessage(response.data.message))
    }
    debugger
    dispatch(loginThunk(response.data.email,response.data.password))
}




export const loginThunk = (email, password) => async (dispatch) => {
    const response = await authAPI.login(email, password)
    if (response.data.resaultCode === 1) {
        debugger
        dispatch(errorMessage(response.data.message))
    }
    debugger
    dispatch(setUser(response.data.user))
    localStorage.setItem('token', response.data.token)
}




export const autoAuthThunk = () => async (dispatch) => {
    try {
        debugger
        const response = await authAPI.autoAuth()
        debugger
        dispatch(setUser(response.data.user))
        localStorage.setItem('token', response.data.token)
        console.log('Authorization acces')
    } catch (e) {
        debugger
        localStorage.removeItem('token')
        console.log("block catch")
        console.log(e.response.data.message)
    }
}







export default authReducer;