import React, {Component} from "react";
import {connect} from "react-redux";
import {updateProductQty, deleteItemFromCart, deleteCart, saveCartToLocalStorage} from "../../Action/Action"
import PropTypes from "prop-types";
import {getCartProducts, getTotal} from "../../Reducers";
import CartItemRow from "../../Components/CartCard/CartItemRow";
import CartHeader from "../../Components/CartCard/CartHeader";
import CartTotal from "../../Components/CartTotal/CartTotal";

import "./CartContainer.css"

export class CartContainer extends Component{

    renderList () {
        return this.props.productsInCart.map((coffee) =>{
            return(
                <li key={coffee.id} className = 'list-group-item'>

                    <CartItemRow
                        type={coffee.type}
                        price={coffee.price}
                        id={coffee.id}
                        onUpdateItemInCart={(id, qty)=>{
                            this.props.updateProductQty(id, qty)
                        }}
                        productQtyInCart ={this.props.productsQtyId[coffee.id] || 0}
                        onDelete={(id) => {
                            this.props.deleteItemFromCart(id);
                        }}

                    />
                </li>
            )
        });
    }

    render(){
        return(
            <React.Fragment>
                <div className="container cartContainer">
                    <div className="row cartList">
                        <ul className="list-group col-sm-12">
                            <li key="header" className = 'list-group-item list-group-item-info'>
                                <CartHeader/>
                            </li>
                            {this.renderList()}
                            {!this.props.productsInCart.length && <li key="blank"className = 'blank list-group-item'></li>}
                        </ul>
                    </div>

                    <div className="row below">
                        <div className="col-sm-6 d-flex justify-content-center align-items-center">
                            <button className='btn btn-primary' onClick={() => this.props.deleteCart()}> Clear Cart </button>
                        </div>
                        <div className="col-sm-6">
                            <CartTotal value={this.props.cartTotalValue}/>
                        </div>
                    </div>
                </div>


            </React.Fragment>
        )
    }
}

const mapStateToProps = function (state) {

    return{
        productsInCart : getCartProducts(state),
        productsQtyId : state.cart.quantityById,
        cartTotalValue: getTotal(state)
    }

};

const mapDispatchToProps = function (dispatch) {

    return{
        updateProductQty : ( id, qty) => {

            dispatch(updateProductQty(id, qty));
            if(!qty){  // if qty becomes 0 remove the item from cart.
                dispatch(deleteItemFromCart(id));
            }
            dispatch(saveCartToLocalStorage());
        },

        deleteItemFromCart : (id) =>{
            dispatch(deleteItemFromCart(id));
            dispatch(saveCartToLocalStorage());
        },

        deleteCart: () =>{
            dispatch(deleteCart());
            dispatch(saveCartToLocalStorage());
        }

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
