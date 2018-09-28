import * as actions from "../Constant/ActionTypes";
import fetchProducts from "../DummyApi/dummyApi";
import store from "../store";


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
                dispatch(fetchEnds(products));
            }).then(() => {
                dispatch(getCartFromLocalStorage());
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

/************************************local Strorage****************************************/

export const saveCartToLocalStorage =() => {
    let state = store.getState().cart;
    localStorage.setItem('state' , JSON.stringify(state));
    return{
        type: actions.SAVE_CART_TO_LOCAL_STORAGE
    }
};

export const getCartFromLocalStorage = ()=>{
    let state = JSON.parse(localStorage.getItem('state'));
    return {
        type: actions.GET_CART_FROM_LOCAL_STORAGE,
        savedState : state
    }
};