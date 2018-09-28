import React from 'react'
import { shallow } from '../../enzyme';
import CartTotal from "./CartTotal";

const setUp = (value) => {

    const component = shallow(
        <CartTotal value={value}/>
    );

    return{
        component,
        card : component.find('.card'),
        cardTitle : component.find('.card-title')
    }
};

describe('CartBadge component', () => {

    it('should be bootstrap card', () => {
        const { card } = setUp( 400 );
        expect(card).toBeDefined();
    });

    it('should have card-title to display total value', () => {
        const { cardTitle } = setUp(400);
        expect(cardTitle).toBeDefined();
        expect(cardTitle.text()).toEqual("Total : ₹400")
    });


});