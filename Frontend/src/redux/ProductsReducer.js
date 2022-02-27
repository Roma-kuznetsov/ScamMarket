
import img from '../images/git_hube.jpg'

const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    totalItemsCount:45,
    body: [
        { id: 1, price: 5, image: img, brand: 'Nike' },
        { id: 2, price: 6, image: img, brand: 'Nike' },
        { id: 3, price: 7, image: img, brand: 'Nike' },
        { id: 3, price: 7, image: img, brand: 'Nike' },
        { id: 3, price: 7, image: img, brand: 'Nike' },
        { id: 3, price: 7, image: img, brand: 'Nike' },
    ],
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
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        default:
            return state;
    }
}

export const setTovars = (body) => ({ type: SET_USERS, body })
//export const setTovarCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
//export const setTovarsTotalCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })


export const getTovars = (currentPage, pageSize) => {
    return async (dispatch) => {
        //let data = await tovarsAPI.getTovars(currentPage, pageSize)
        //dispatch(setTovars(data.items));
        //dispatch(setTovarsTotalCount(data.totalCount));
        //dispatch(setTovarCurrentPage(currentPage))
    }
}

export default productsReducer;