
import { productsAPI } from '../api';
import img from '../images/git_hube.jpg'

const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState = {
    totalItemsCount:26,
    body: [],
    currentPage: 1,
    pageSize: 16,
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                body: [...action.body]
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


export const getTovars = (pageSize, currentPage) => {
    return async (dispatch) => {
        let data = await productsAPI.getTShirt(pageSize, currentPage)
        console.log(data)
        dispatch(setTovars(data));
        dispatch(setCurrentPage(pageSize)); // на самом деле тут pageSize принимает номер страницы
        //dispatch(setTovarCurrentPage(currentPage))
    }
}

export default productsReducer;