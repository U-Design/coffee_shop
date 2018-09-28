import React, {Component}from 'react';
import "./CartCardRow.css";
import PropTypes from "prop-types";
import CartCardRow from "./CartCardRow";
import Counter from "../Counter/Counter";

class CartItemRow extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <CartCardRow col1={this.col1()}
                         col2={this.col2()}
                         col3={this.col3()}
                         col4={this.col4()}
                         col5={this.col5()}/>
        )
    }

    col1(){
        return(
            <span>
                {this.props.type}
                </span>
        )
    }

    col2(){
        return(
            <span>₹{this.props.price}</span>
        )
    }

    col3(){
        return(
            <Counter onValueChange={(val) => {
                this.props.onUpdateItemInCart(this.props.id, val)
            }
            } count={this.props.productQtyInCart}/>
        )
    }

    col4(){
        return(
            <span>₹{this.props.productQtyInCart * this.props.price}</span>
        )
    }
    col5(){
        return(
            <div className="w-50" >
            <button type="button" className="close" aria-label="Close"
                    onClick={() => this.props.onDelete(this.props.id)}>
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
        )
    }



}
CartItemRow.propTypes = {
    type : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    onUpdateItemInCart: PropTypes.func.isRequired,
    productQtyInCart:PropTypes.number.isRequired,
    onDelete :PropTypes.func.isRequired
}
export default CartItemRow;