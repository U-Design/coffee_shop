import React from "react";
import { connect } from "react-redux";
import { selectCoffeeAction } from "../Action/Action";

class CoffeeList extends React.Component{
    constructor(props){
        super(props);

    }

    renderList () {
        return this.props.coffees.map((coffee) =>{
            return(
                <li key={coffee.type}
                    className = 'list-group-item'

                >
                    <div className='row'>
                        <div className='col-sm-4'>
                            <span>{coffee.type}</span>
                        </div>
                        <div className='col-sm-4'>
                            <span>{coffee.price}</span>
                        </div>
                        <div className='col-sm-4'>
                            <button type="button" className="btn btn-dark"
                                    onClick = {() => this.props.selectCoffee(coffee)}
                            >Add To Cart</button>
                        </div>
                    </div>

                </li>
            )
        });
    }

    render(){
        return(
            <React.Fragment>
                <h5>Menu</h5>
            <ul className='list-group col-sm-12'>
                {this.renderList()}
            </ul>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        coffees: state.CoffeeListReducer
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        selectCoffee : (coffee) => {
            dispatch(selectCoffeeAction(coffee))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeList);