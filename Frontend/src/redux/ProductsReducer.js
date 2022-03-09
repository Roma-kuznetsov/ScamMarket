
import { productsAPI } from '../api';

const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_ITEM = 'SET_ITEM'

let initialState = {
    totalItemsCount: 26,
    body: [],
    currentPage: 1,
    pageSize: 16,
    selectedItem: {}
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            debugger
            return {
                ...state,
                body: [...action.body]
            }
        }
        case SET_ITEM:{
            debugger
            return {
                ...state,
                selectedItem: action.data
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        default:
            return state;
    }
}


export const setTovars = (body) => ({ type: SET_USERS, body })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setItemCreator = (data) => ({ type: SET_ITEM, data })


export const getTovars = (pageSize, currentPage) => {
    return async (dispatch) => {
        let data = await productsAPI.getTShirt(pageSize, currentPage)
        console.log(data)
        dispatch(setTovars(data));
        dispatch(setCurrentPage(pageSize)); // на самом деле тут pageSize принимает номер страницы
    }
}


export const setItem = (prodId) => {
    debugger
    return async (dispatch) => {
        let dataOne = await productsAPI.getOneTShirt(prodId)
        console.log(dataOne)
        dispatch(setItemCreator(dataOne))
    }
}


export default productsReducer;