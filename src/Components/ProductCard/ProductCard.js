import React, {Component} from "react";
import './ProductCard.css';
import Counter from "../Counter/Counter";
import PropTypes from 'prop-types';


class ProductCard extends Component {


    render() {
        return (
            <div>
                <div className="card text-center ProductCard bg-white rounded">
                    <img className="card-img-top" src={this.props.image} alt={this.props.type}/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.type}</h5>
                        <span className="card-text price">₹{this.props.price}</span>

                        <Counter onValueChange={(val) => {
                            this.props.onUpdateItemInCart(this.props.id, val)
                        }
                        } count={this.props.productQtyInCart}/>

                    </div>
                    <div className="card-footer">
                        {this.renderButton()}

                    </div>
                </div>
            </div>
        )
    }

    renderButton(){

        if(this.props.productQtyInCart){
            return(
                <button type="button" className="btn btn-dark cartbtn"
                        onClick={() => this.props.onUpdateItemInCart(this.props.id, 0)
                        }>Remove from Cart
                </button>
            )
        }else{
            return (
                <button type="button" className="btn btn-dark cartbtn"
                        onClick={() => this.props.onAddItemToCart(this.props.id)
                        }>Add To Cart
                </button>
            )
        }
    }


}

ProductCard.propTypes = {
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onAddItemToCart: PropTypes.func.isRequired,
    onUpdateItemInCart: PropTypes.func.isRequired,
    productQtyInCart:PropTypes.number.isRequired
};
export default ProductCard;
