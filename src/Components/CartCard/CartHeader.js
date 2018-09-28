import React, {Component}from 'react';
import "./CartCardRow.css";
import CartCardRow from "./CartCardRow";

class CartHeader extends Component{

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
            <span>Item</span>
        )
    }

    col2(){
        return(
            <span>Unit Price</span>
        )
    }

    col3(){
        return(
            <span>Quantity</span>
        )
    }

    col4(){
        return(
            <span> Total </span>
        )
    }
    col5(){
        return(
            <span>Clear</span>
        )
    }
}

export  default  CartHeader;