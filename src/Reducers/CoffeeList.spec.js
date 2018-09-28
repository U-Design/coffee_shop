import productsInfo, * as productHelper from "./CoffeeList";
import cart, {getQuantity} from "./Cart";

describe('reducers', () => {

    describe('CoffeeList', () => {

        const initialState = {
            isFetching: false,
            products : {}
        };
        const productList = [
            {
                id:1,
                type: "Espresso",
                price: 100,
                image: 'espresso'
            },{
                id:2,
                type: "Decaf",
                price: 120,
                image: "decaf"
            }

        ];

        it('should provide the initial state', () => {
            expect(productsInfo(undefined, {})).toEqual(initialState)
        });

        it('should handle FETCH_STARTS action', () => {
            expect(productsInfo(initialState, {type: 'FETCH_STARTS'})).toEqual({
                isFetching: true,
                products : {}
            })
        });

        it('should handle FETCH_ENDS action', () => {
            expect(productsInfo(initialState, {type: 'FETCH_ENDS', products: productList })).toEqual({
                isFetching: false,
                products : {
                    1 : {
                        id:1,
                        type: "Espresso",
                        price: 100,
                        image: 'espresso'
                    },
                    2: {
                        id:2,
                        type: "Decaf",
                        price: 120,
                        image: "decaf"
                    }
                }
            })
        });

    });

    describe('CoffeeList helper function', () => {

        it('getProduct : fetches product detail for an id', () =>{
            let state = {
                isFetching: false,
                products: {
                    1: {
                        id: 1,
                        type: "Espresso",
                        price: 100,
                        image: 'espresso'
                    },
                    2: {
                        id: 2,
                        type: "Decaf",
                        price: 120,
                        image: "decaf"
                    }
                }
            }

            expect(productHelper.getProduct(state, 1)).toEqual({
                id: 1,
                type: "Espresso",
                price: 100,
                image: 'espresso'
            });
            expect(productHelper.getProduct(state, 2)).toEqual({
                id: 2,
                type: "Decaf",
                price: 120,
                image: "decaf"
            });
        })
    });
});