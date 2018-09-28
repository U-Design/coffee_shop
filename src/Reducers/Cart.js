import {ADD_ITEM_TO_CART,
        REMOVE_ITEM_FROM_CART,
        UPDATE_ITEM_COUNT_CART,
        DELETE_CART} from "../Constant/ActionTypes";
import * as actions from "../Constant/ActionTypes";


const initialState = {
    addedItemId : [],
    quantityById : {}
};

/**
* Calculates the state of added Item in cart
*
* */
const addIds = (state = initialState['addedItemId'], action) => {
    
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            if (state.indexOf(action.id) !== -1) {
                return state
            }
            return [ ...state, action.id ];

        case UPDATE_ITEM_COUNT_CART:
            if (state.indexOf(action.id) !== -1) {
                return state
            }
            return [ ...state, action.id ];

        case REMOVE_ITEM_FROM_CART:
            let index = state.indexOf(action.id);
            if (index !== -1) {
                state = [...state];
                state.splice(index,1);
            }
            return state;

        case DELETE_CART:
            return initialState.addedItemId;

        default:
            return state;

    }
};


/**
 * Calculates the state of added Item's qty in cart
 *
 * */
const quantityById = (state = initialState["quantityById"], action) => {

    switch (action.type) {
        case ADD_ITEM_TO_CART: {
            const {id , qty} = action;
            return {
                ...state,
                [id]: (state[id] || 0) + (qty || 1)
            };
        }
        case UPDATE_ITEM_COUNT_CART: {
            const {id, qty} = action;
            return {
                ...state,
                [id]: qty
            };
        }
        case DELETE_CART:
            return initialState.quantityById;
        default:
            return state
    }
};



const cart = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_CART_FROM_LOCAL_STORAGE:
            return action.savedState? action.savedState : state;

        default:
            return {   // handle state obj separately and join them to form parent state.
                addedItemId: addIds(state.addedItemId, action),
                quantityById: quantityById(state.quantityById, action)
            }
    }
};

/**
 * Other helper functions
 * */
export const getQuantity = (state, productId) => state.quantityById[productId] || 0;

export const getAddedIds = state => state.addedItemId;

export default cart;
