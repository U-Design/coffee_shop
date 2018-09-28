import React, {Component} from "react";
import {connect} from "react-redux";
import {addItemToCart, updateProductQty, deleteItemFromCart, saveCartToLocalStorage} from "../../Action/Action"
import PropTypes from "prop-types";
import * as images from "../../Images";
import "./CoffeesContainer.css";
import ProductCard from "../../Components/ProductCard/ProductCard";

export class CoffeesContainer extends Component{

    renderList(){
        const keys = Object.keys(this.props.products);
        return keys.map( (key) => {
            const {id, type, price, image} = this.props.products[key];
            return(
                <ProductCard
                    key={id}
                    id={id}
                    image={images[image]}
                    price={price}
                    type={type}
                    onAddItemToCart={(id) => {
                        this.props.addItemToCart(id)
                    }}
                    onUpdateItemInCart={(id, qty)=>{
                        this.props.updateProductQty(id, qty)
                    }}
                    productQtyInCart ={this.props.productsQtyId[key] || 0}
                />
            )
        });
    }
    render(){
        return(
            <div className="container coffee-container">
                <div className='card-deck coffee-deck'>
                    {this.renderList()}
                </div>
            </div>
        )
    }


}

CoffeesContainer.propTypes = {
    addItemToCart: PropTypes.func.isRequired,
    updateProductQty: PropTypes.func.isRequired,
    products: PropTypes.object.isRequired
};
const mapStateToProps = function (state) {

  return{
    products : state.productsInfo.products,
    productsQtyId : state.cart.quantityById
  }

};

const mapDispatchToProps = function (dispatch) {

    return{
        addItemToCart : (id, qty) =>{
            dispatch(addItemToCart(id, qty));
            dispatch(saveCartToLocalStorage());
        },
        updateProductQty : ( id, qty) => {

            dispatch(updateProductQty(id, qty));
            if(!qty){  // if qty becomes 0 remove the item from cart.
                dispatch(deleteItemFromCart(id));
            }
            dispatch(saveCartToLocalStorage());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CoffeesContainer);
