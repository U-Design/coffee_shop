import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import thunkMiddleware from 'redux-thunk'
import rootReducer from "./Reducers/index";
import {fetchProductData} from "./Action/Action";

let store = createStore(rootReducer,
    applyMiddleware(thunkMiddleware, logger)
);
store.dispatch(fetchProductData());
export default store;

