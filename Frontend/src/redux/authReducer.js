

const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"


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
        default:
            return state;
    }
}

export const setUser = user => ({ type: SET_USER, payload: user })
export const logout = () => ({ type: LOGOUT})





export default authReducer;