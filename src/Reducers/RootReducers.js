import { combineReducers } from 'redux';
import CoffeeListReducer from './CoffeeListReducer'
import CoffeeCartReducer from './CoffeeCartReducer'

export default combineReducers({
    CoffeeListReducer,
    CoffeeCartReducer
});