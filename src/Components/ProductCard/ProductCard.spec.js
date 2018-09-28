import React from 'react'
import { shallow } from '../../enzyme';
import ProductCard from "./ProductCard";
import Counter from "../Counter/Counter"

const setUp = (image, price, type, id, qty) => {
    const actions = {
        onAddItemToCart: jest.fn(),
        onUpdateItemInCart: jest.fn()
    };

    const component = shallow(
        <ProductCard
            image={image}
            price={price}
            type={type}
            id={id}
            onAddItemToCart={actions.onAddItemToCart}
            onUpdateItemInCart={actions.onUpdateItemInCart}
            productQtyInCart={qty}/>
    );

    return{
        component,
        image : component.find('.card-img-top'),
        title : component.find('.card-title'),
        price : component.find('.price'),
        Counter : component.find(Counter),
        cartbtn : component.find('.cartbtn'),
        actions

    }
};

describe('CartBadge component', () => {

    it('should have image, coffeeName, price , counter and addtocart btn', () => {
        const {component, image, title, price, Counter, cartbtn } = setUp('image', 100, 'Espresso', 1, 0);
        expect(image).toBeDefined();
        expect(image.props().src).toEqual('image');

        expect(title).toBeDefined();
        expect(title.text()).toEqual('Espresso');

        expect(price).toBeDefined();
        expect(price.text()).toEqual('₹100');

        expect(Counter).toBeDefined();
        expect(cartbtn).toBeDefined();
    });

    it('should add to cart on click of addtocart btn', () => {
        const {cartbtn, actions } = setUp('image', 100, 'Espresso', 1, 0);
        expect(cartbtn.text()).toEqual("Add To Cart");
        cartbtn.simulate('click');
        expect(actions.onAddItemToCart).toBeCalledWith(1);
    });

    it('should remove from cart on click of removeFromCart btn', () => {
        const {cartbtn, actions } = setUp('image', 100, 'Espresso', 1, 1);
        expect(cartbtn.text()).toEqual("Remove from Cart");
        cartbtn.simulate('click');
        expect(actions.onUpdateItemInCart).toBeCalledWith(1, 0);
    });


});