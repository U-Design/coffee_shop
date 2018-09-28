import {getTotal, getCartProducts} from './index'

describe('selectors', () => {
    describe('getTotal', () => {
        it('should return price total', () => {
            const state = {
                cart: {
                    addedItemId: [1, 2, 3],
                    quantityById: {
                        1: 4,
                        2: 2,
                        3: 1
                    }
                },
                productsInfo: {
                    products: {
                        1: {
                            id: 1, type: "Espresso", price: 100, image: "espresso"
                        },
                        2: {
                            id: 2, type: "Decaf", price: 120, image: "decaf"
                        },
                        3: {
                            id: 3, type: "Black Tea", price: 140, image: "black_tea"
                        }
                    }
                }
            };
            expect(getTotal(state)).toBe('780.00')
        })
    })

    describe('getCartProducts', () => {
        it('should return products with quantity', () => {
            const state = {
                cart: {
                    addedItemId: [1, 2, 3],
                    quantityById: {
                        1: 4,
                        2: 2,
                        3: 1
                    }
                },
                productsInfo: {
                    products: {
                        1: {
                            id: 1, type: "Espresso", price: 100, image: "espresso"
                        },
                        2: {
                            id: 2, type: "Decaf", price: 120, image: "decaf"
                        },
                        3: {
                            id: 3, type: "Black Tea", price: 140, image: "black_tea"
                        }
                    }
                }
            };

            expect(getCartProducts(state)).toEqual([
                {
                    id: 1, type: "Espresso", price: 100, image: "espresso", "quantity": 4
                },
                {
                    id: 2, type: "Decaf", price: 120, image: "decaf", "quantity": 2
                },
                {
                    id: 3, type: "Black Tea", price: 140, image: "black_tea", "quantity": 1
                }
            ])
        })
    })
});