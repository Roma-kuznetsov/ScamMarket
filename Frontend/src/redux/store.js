import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import productsReducer from "./ProductsReducer";
import corzinaReducer from "./corzinaReducers";
import appReducer from "./appReducer";

let reducers = combineReducers({
    auth:authReducer,
    products:productsReducer,
    corzina:corzinaReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));


export default store;