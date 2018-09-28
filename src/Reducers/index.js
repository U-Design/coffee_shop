import { combineReducers } from 'redux'
import cart, * as cartHelper from './Cart';
import productsInfo, * as productHelper from "./CoffeeList";

export default combineReducers({
    cart,
    productsInfo
});

const getAddedIds = state => cartHelper.getAddedIds(state.cart);
const getQuantity = (state, id) => cartHelper.getQuantity(state.cart, id);
const getProduct = (state, id) => productHelper.getProduct(state.productsInfo, id);

export const getTotal = state =>
    getAddedIds(state)
        .reduce((total, id) => total + getProduct(state, id).price * getQuantity(state, id),0).toFixed(2);

export const getCartProducts = state =>
    getAddedIds(state).map(id => ({
        ...getProduct(state, id),
        quantity: getQuantity(state, id)
    }));