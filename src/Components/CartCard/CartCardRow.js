import React, {Component}from 'react';
import "./CartCardRow.css";
import PropTypes from "prop-types";
import Counter from "../Counter/Counter";

class CartCardRow extends Component{

    render() {

        return(
            <div className="row text-left cartCard">
                <div className="col-sm-4 col-md-5">
                    {this.props.col1}
                </div>
                <div className="col-sm-1 col-md-2">
                    {this.props.col2}
                </div>
                <div className="col-sm-4 col-md-2">
                    {this.props.col3}
                </div>
                <div className="col-sm-2">
                    {this.props.col4}
                </div>
                <div className="col-sm-1">
                    {this.props.col5}

                </div>
            </div>
        )
    }
}

CartCardRow.propTypes = {
    col1 : PropTypes.any.isRequired,
    col2 : PropTypes.any.isRequired,
    col3 : PropTypes.any.isRequired,
    col4 : PropTypes.any.isRequired,
    col5: PropTypes.any.isRequired
}

export default CartCardRow;