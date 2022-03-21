
import { productsAPI } from '../api';

const SET_ITEMS = 'SET_ITEMS';
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_ITEM = 'SET_ITEM'
const TOGGLE_IS_FACHING = 'TOGGLE_IS_FACHING';

let initialState = {
    isFaching:false,
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
        case TOGGLE_IS_FACHING: {
            return { ...state, isFaching: action.isFaching }
        }
        default:
            return state;
    }
}


export const setTovars = (body) => ({ type: SET_ITEMS, body })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setItemCreator = (data) => ({ type: SET_ITEM, data })
export const toggleIsFaching = (isFaching) => ({ type: TOGGLE_IS_FACHING, isFaching })


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
        dispatch(toggleIsFaching(true))
        let dataOne = await productsAPI.getOneTShirt(prodId)
        dispatch(toggleIsFaching(false))
        dispatch(setItemCreator(dataOne))       
    }
}


export default productsReducer;