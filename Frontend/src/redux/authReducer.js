import { authAPI } from "../api"

const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"
const ERROR_MESSAGE = "ERROR_MESSAGE"
const SET_ERROR = "SET_ERROR"
const ADD_FAV = "ADD_FAV"
const SET_PROCCES = 'SET_PROCCES'
const ADD_CART = "ADD_CART"


let initialState = {
    inProcces: false,
    isAuth: false,
    profile: {},
    errorMessage: "",
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
        case ADD_FAV:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    like: [...action.favArr]
                },
            }
        case ADD_CART:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    cart: [...action.cartArr]
                },
            }
        case SET_PROCCES:
            return {
                ...state,
                inProcces: action.isProcces
            }

        default:
            return state;
    }
}


export const refreshFav = (favArr) => ({ type: ADD_FAV, favArr })
export const errorMessage = (message) => ({ type: ERROR_MESSAGE, message })
export const setUser = user => ({ type: SET_USER, payload: user })
export const logout = () => ({ type: LOGOUT })
export const setError = () => ({ type: SET_ERROR })
const setCart = (cartArr) => ({ type: ADD_CART, cartArr })
const toggleinProcces = (isProcces) => ({ type: SET_PROCCES, isProcces })

// полное удаление корзины
export const clearCartThunk = (id) => async (dispatch) =>{
    dispatch(toggleinProcces(true))
    const response = await authAPI.clearCart(id)
    dispatch(setCart(response.data.cart))
    dispatch(toggleinProcces(false))

}
// изменение count Из корзины 
export const updateCartThunk = (_id, fieldId, count) => async (dispatch) => {
    dispatch(toggleinProcces(true))
    const response = await authAPI.updateCart(_id, fieldId, count)
    if (response.data.resaultCode === 0) {
        dispatch(setCart(response.data.cart))
    }
    dispatch(toggleinProcces(false))
}
//удаление из корзины
export const removeCartThunk = (idUser, fieldId) => async (dispatch) => {
    const response = await authAPI.removeCart(idUser, fieldId)
    if (response.data.resaultCode === 0) {
        dispatch(setCart(response.data.cart))
    }
}

// добавление/удаление из избранного
export const addFavThunk = (idUser, idItem, method) => async (dispatch) => {
    if (method === 'ADD') {
        dispatch(toggleinProcces(true))
        let response = await authAPI.addFav(idUser, idItem)
        dispatch(refreshFav(response.data.like))
        dispatch(toggleinProcces(false))
    } else if (method === 'DEL') {
        dispatch(toggleinProcces(true))
        let response = await authAPI.removeFav(idUser, idItem)
        dispatch(refreshFav(response.data.like))
        dispatch(toggleinProcces(false))
    }
}
// добавление в корзину
export const addCartThunk = (idUser, idItem, size, count, price, picture) => async (dispatch) => {
    const response = await authAPI.addCart(idUser, idItem, size, count, price, picture)
    if (response.data.resaultCode === 0) {
        dispatch(setCart(response.data.cart))
    } else {
        dispatch(errorMessage(response.data.message))
    }
}
// регистрация
export const authThank = (email, password, name) => async (dispatch) => {
    const response = await authAPI.authReg(email, password, name)
    if (response.data.resaultCode === 0) {
        dispatch(loginThunk(response.data.email, response.data.password))
    } else {
        dispatch(errorMessage(response.data.message))
    }

}
// логин
export const loginThunk = (email, password) => async (dispatch) => {
    const response = await authAPI.login(email, password)
    if (response.data.resaultCode === 0) {
        dispatch(setUser(response.data.user))
        localStorage.setItem('token', response.data.token)
    } else {
        dispatch(errorMessage(response.data.message))
    }
}
//авторизация по токену
export const autoAuthThunk = () => async (dispatch) => {
    try {
        dispatch(toggleinProcces(true))
        const response = await authAPI.autoAuth()
        dispatch(setUser(response.data.user))
        localStorage.setItem('token', response.data.token)
        dispatch(toggleinProcces(false))
        console.log('Authorization acces')
    } catch (e) {
        dispatch(toggleinProcces(false))
        localStorage.removeItem('token')
    }
}







export default authReducer;