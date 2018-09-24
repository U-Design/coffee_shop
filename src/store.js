import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import rootReducer from "./Reducers/RootReducers";

let store = createStore(rootReducer,
    applyMiddleware(logger)
);

export default store;

