import React, { Component } from 'react';
import CartBadge from "../../Components/CartBadge/CartBadge";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

import "./HeaderContainer.css";

export class NavHeader extends Component{
    render(){
        return( <nav className="navbar  sticky-top col-sm-12 navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Coffee Plaza</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav mr-auto">
                    <Link to={'/'} className="nav-link">Menu</Link>

                </div>
                <CartBadge to={'/cart'} noOfCartItem={this.props.noOfCartItem}/>

            </div>
        </nav>)
    }
}
NavHeader.propTypes = {
    noOfCartItem: PropTypes.number
}

const mapStateToProps = (state) =>{
    return{
        noOfCartItem : state.cart.addedItemId.length
    }
};

export default connect(mapStateToProps, null)(NavHeader);
