import React, { Component } from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

class CartBadge extends Component{

    render() {
        return(
            <Link className='btn btn-primary float-right' to={this.props.to}>
                Cart <span className="badge badge-light">{this.props.noOfCartItem}</span>
            </Link>
        )
    }
}
CartBadge.propTypes = {
  to: PropTypes.string,
  noOfCartItem : PropTypes.number
};
export default CartBadge;