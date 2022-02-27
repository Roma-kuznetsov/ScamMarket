
const ADD_TOVARS = 'ADD-TOVARS'

let initialState = {
    tovars: [
        {id:1,size:'XXL',price:5,count:1,}
    ],
    profile: null,
    status: "",
}

const corzinaReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TOVARS:
            let createTovar = {
                id: 2,
                size: action.size,
                price: action.price,
                count:action.count
            }
            return {
                ...state,
                tovars: [createTovar, ...state.tovars],
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (size,price,count) => ({ type: ADD_TOVARS, size,price,count })




export default corzinaReducer;