import * as actions from "../Constant/ActionTypes";
import fetchProducts from "../DummyApi/dummyApi";

export function selectCoffeeAction(payload) {

    return {
        type: "SELECT_COFFEE",
        payload: {...payload, qty: 1}
    }
}
/****************************Product Fetch Action**************************************************/
function fetchStarts() {
    return {
        type: actions.FETCH_STARTS
    }
}

function fetchEnds(products = []) {
    return {
        type: actions.FETCH_ENDS,
        products: products
    }
}

export const fetchProductData = () => {

    return dispatch => {
        dispatch(fetchStarts());
        fetchProducts()
            .then((products) => {
                dispatch(fetchEnds(products))
            });
    }
};

/****************************Product Action*************************************************/
export const addItemToCart = (id, qty) =>{
    return {
        type : actions.ADD_ITEM_TO_CART,
        id,
        qty
    }
};

export const updateProductQty = (id, qty) =>{
    return {
        type : actions.UPDATE_ITEM_COUNT_CART,
        id,
        qty
    }
};

export const deleteItemFromCart = (id) =>{
    return {
        type : actions.REMOVE_ITEM_FROM_CART,
        id
    }
};

export const deleteCart = () => {
    return {
        type : actions.DELETE_CART
    }
};