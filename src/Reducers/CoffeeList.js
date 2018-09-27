    import {FETCH_STARTS, FETCH_ENDS} from "../Constant/ActionTypes"
    let initialState = {
      isFetching: false,
      products : {}
    };

    const fetchingCheck = ( state = initialState.isFetching, action )=>{

        switch (action.type) {

            case FETCH_STARTS:
                return true;
            case FETCH_ENDS:
                return false;
            default:
                return state;
        }
    };

    const fetchedProducts = (state = initialState.products, action) =>{

        switch (action.type) {
            case FETCH_ENDS:
                return {
                    ...state,
                    ...action.products.reduce((obj, product) => {
                        obj[product.id] = product;
                        return obj
                    }, {})
                };

            default:
                return state;
        }
    };

    const productsInfo = (state = initialState, action) => {
        return {
            isFetching: fetchingCheck(state.isFetching, action),
            products: fetchedProducts(state.products, action)
        }
    };

    export const getProduct = (state, id) => state.products[id];

    export default productsInfo;
