
import { productsAPI } from '../api';

const SET_ITEMS = 'SET_ITEMS';
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_ITEM = 'SET_ITEM'
const TOGGLE_IS_FACHING = 'TOGGLE_IS_FACHING';
const SET_FAVORITS = 'SET_FAVORITS'
const SET_COUNT = 'SET_COUNT'

let initialState = {
    isFaching: false,
    totalItemsCount: null,
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
        case SET_ITEM: {
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
        case SET_FAVORITS: {
            return {
                ...state,
                body: [...action.data]
            }
        }
        case SET_COUNT: {
            return {
                ...state,
                totalItemsCount: action.num
            }
        }
        default:
            return state;
    }
}


export const setTovars = (body) => ({ type: SET_ITEMS, body })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setItemCreator = (data) => ({ type: SET_ITEM, data })
const toggleIsFaching = (isFaching) => ({ type: TOGGLE_IS_FACHING, isFaching })
const setFavorits = (data) => ({ type: SET_FAVORITS, data })
const setCount = (num) => ({ type: SET_COUNT, num })

export const getFavorits = (favorits, pageSize, currentPage) => async (dispatch) => {
    let response = await productsAPI.getFavorits(favorits, pageSize, currentPage)
    if (response.data.resaultCode === 0) {
        dispatch(setFavorits(response.data.favorits))
        dispatch(setCount(response.data.count))
    }

}

export const getTovars = (pageSize, currentPage, type) => {
    return async (dispatch) => {
        let response = await productsAPI.getTShirt(pageSize, currentPage, type)
        dispatch(setTovars(response.data.products));
        dispatch(setCurrentPage(pageSize)); // на самом деле тут pageSize принимает номер страницы
        dispatch(setCount(response.data.count))
    }
}

export const setItem = (prodId) => {
    return async (dispatch) => {
        dispatch(toggleIsFaching(true))
        let dataOne = await productsAPI.getOneTShirt(prodId)
        dispatch(toggleIsFaching(false))
        dispatch(setItemCreator(dataOne.data))
    }
}


export default productsReducer;