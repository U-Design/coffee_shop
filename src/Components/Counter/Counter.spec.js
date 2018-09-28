import React from 'react'
import { shallow } from '../../enzyme';
import Counter from "./Counter";

const setUp = (value) => {

    const actions = {
        onValueChange: jest.fn()
    };

    const component = shallow(
        <Counter onValueChange={actions.onValueChange} count={value}/>
    );

    return{
        component,
        actions,
        inc : component.find('#counter-increment'),
        dec : component.find('#counter-decrement'),
        input : component.find('.counterVal')
    }
};

describe('CartBadge component', () => {

    it('should have inc button', () => {
        const { inc } = setUp( 2 );
        expect(inc).toBeDefined();
    });
    it('should have dec button', () => {
        const { dec } = setUp( 2 );
        expect(dec).toBeDefined();
    });
    it('should have input field', () => {
        const { input } = setUp( 2 );
        expect(input).toBeDefined();
    });

    it('should output incremented val on inc button press', () => {
        const { inc, actions } = setUp( 2 );
        inc.simulate('click');
        expect(actions.onValueChange).toBeCalledWith(3);

    });

    it('should output decremented val on dec button press', () => {
        const { dec, actions } = setUp( 2 );
        dec.simulate('click');
        expect(actions.onValueChange).toBeCalledWith(1);
    });

    it('should updated the input value', () => {
        const { input} = setUp( 2 );
        expect(input.props().value).toEqual(2);
    });

});