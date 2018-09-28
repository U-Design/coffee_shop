import React, {Component} from "react";
import './ProductCard.css';
import Counter from "../Counter/Counter";
import PropTypes from 'prop-types';


class ProductCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="card text-center ProductCard bg-white rounded">
                    <img className="card-img-top" src={this.props.image} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.type}</h5>
                        <span className="card-text">₹{this.props.price}</span>

                        <Counter onValueChange={(val) => {
                            this.props.onUpdateItemInCart(this.props.id, val)
                        }
                        } count={this.props.productQtyInCart}/>

                    </div>
                    <div className="card-footer">
                        <button type="button" className="btn btn-dark"
                                onClick={() => this.props.onAddItemToCart(this.props.id)
                                }>Add To Cart
                        </button>

                    </div>
                </div>
            </div>
        )
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
