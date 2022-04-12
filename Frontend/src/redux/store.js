import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import productsReducer from "./ProductsReducer";
import appReducer from "./appReducer";

let reducers = combineReducers({
    auth:authReducer,
    products:productsReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;