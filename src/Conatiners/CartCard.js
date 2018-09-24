import React from "react";
import { connect } from "react-redux";


class CartCoffee extends React.Component{

    constructor(props){
        super(props);
    }

    renderList () {
        return this.props.activeCoffees.map((coffee) =>{
            return(
                <li key={coffee.type}
                    className = 'list-group-item'

                >
                    <div className='row'>
                        <div className='col-sm-4'>
                            <span>{coffee.type}</span>
                        </div>
                        <div className='col-sm-4'>
                            <span>Rs {coffee.price}</span>
                        </div>
                        <div className='col-sm-4'>
                            <span>Quantity : {coffee.qty}</span>

                        </div>
                    </div>

                </li>
            )
        });
    }

    CalculateTotal(){
        let total = 0;
        for (let coffee of this.props.activeCoffees){
            total += parseInt(coffee.price, 10);
        }
        return total;
    }

    render(){
        return(
            <React.Fragment>
                <h5>Cart</h5>
                <span>Total Rs:{this.CalculateTotal()}</span>
                <ul className='list-group col-sm-12'>
                    {this.renderList()}
                </ul>
            </React.Fragment>
        )
    }



}

const mapStateToProps = (state) => {

    return {
        activeCoffees : state.CoffeeCartReducer
    }
};



export default connect(mapStateToProps)(CartCoffee);