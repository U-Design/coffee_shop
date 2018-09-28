import cart ,{getAddedIds, getQuantity}from './cart';

describe('reducers', () => {

    describe('cart', () => {

        const initialState = {
            addedItemId : [],
            quantityById : {}
        };

        it('should provide the initial state', () => {
            expect(cart(undefined, {})).toEqual(initialState)
        });

        it('should handle ADD_ITEM_TO_CART action', () => {
            expect(cart(initialState, { type: 'ADD_ITEM_TO_CART', id: 1 })).toEqual({
                addedItemId: [ 1 ],
                quantityById: { 1: 1 }
            })
        });

        it('should handle UPDATE_ITEM_COUNT_CART action', () => {
            let state = {
                addedItemId: [ 1 ],
                quantityById: { 1: 2 }
            };
            expect(cart(state, { type: 'UPDATE_ITEM_COUNT_CART', id: 1, qty: 2 })).toEqual({
                addedItemId: [ 1 ],
                quantityById: { 1: 2 }
            })
        });

        it('should handle DELETE_CART action', () => {
            let state = {
                addedItemId: [ 1 ],
                quantityById: { 1: 2 }
            };
            expect(cart(state, { type: 'DELETE_CART'})).toEqual(initialState)
        });

        it('should handle GET_CART_FROM_LOCAL_STORAGE action', () => {
            let state = {
                addedItemId: [ 1 ],
                quantityById: { 1: 2 }
            };
            expect(cart(initialState, { type: 'GET_CART_FROM_LOCAL_STORAGE', savedState: state})).toEqual(state);
        });


    });

    describe('cart helper function', () => {

        it('getQuantity : provides the cart quantity for a product ', () =>{
            let state = {
                addedItemId: [ 1, 2 ],
                quantityById: { 1: 2 , 2: 3}
            };

            expect(getQuantity(state, 1)).toEqual(2);
            expect(getQuantity(state, 2)).toEqual(3);
        });

        it('getAddedIds : provides the product ids in cart ', () =>{
            let state = {
                addedItemId: [ 1, 2 ],
                quantityById: { 1: 2 , 2: 3}
            };

            expect(getAddedIds(state, 1)).toEqual(state.addedItemId);
        });


    });

});