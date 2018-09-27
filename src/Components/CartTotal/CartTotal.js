import React, {Component}from 'react';

import PropTypes from "prop-types";

class CartTotal extends Component{

    render(){
        return(

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Total : ₹{this.props.value}</h5>
                    <a href="#" className="btn btn-primary">Checkout</a>
                </div>
            </div>

        )
    }
}
CartTotal.propTypes = {
  value: PropTypes.number.isRequired
};

export default CartTotal;