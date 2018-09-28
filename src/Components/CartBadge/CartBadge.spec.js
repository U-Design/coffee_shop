import React from 'react'
import { shallow } from '../../enzyme';
import CartBadge from "./CartBadge";
import {Link} from 'react-router-dom'

const setUp = (to, noOfCartItem) => {

    const component = shallow(
        <CartBadge to={to} noOfCartItem={noOfCartItem}/>
    );

    return{
        component,
        link : component.find(Link),
        spanBadge : component.find('.badge')
    }
};

describe('CartBadge component', () => {

    it('should display no of item in cart', () => {
        const { spanBadge, component } = setUp('/cart', 4);
        expect(spanBadge.text()).toEqual("4");
    });

    it('should have link', () => {
        const { link, component } = setUp('/cart', 4);
        console.log(link.props().to);
        expect(link).toBeDefined();
        expect(link.props().to).toEqual("/cart")
    });


});