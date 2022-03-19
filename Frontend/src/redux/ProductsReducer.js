
import { productsAPI } from '../api';

const SET_ITEMS = 'SET_ITEMS';
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
        case SET_ITEMS: {
            return {
                ...state,
                body: [...action.body]
            }
        }
        case SET_ITEM:{
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


export const setTovars = (body) => ({ type: SET_ITEMS, body })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setItemCreator = (data) => ({ type: SET_ITEM, data })


export const getTovars = (pageSize, currentPage) => {
    return async (dispatch) => {
        let data = await productsAPI.getTShirt(pageSize, currentPage)
        dispatch(setTovars(data));
        dispatch(setCurrentPage(pageSize)); // на самом деле тут pageSize принимает номер страницы
    }
}


export const setItem = (prodId) => {
    debugger
    return async (dispatch) => {
        let dataOne = await productsAPI.getOneTShirt(prodId)
        dispatch(setItemCreator(dataOne))
    }
}


export default productsReducer;