import React ,{ Component } from 'react'
import './Counter.css';
import PropTypes from 'prop-types';

class Counter extends Component{



    render(){

        return(
            <div className="input-group mb-3">

                <div className="input-group-prepend">
                    <button className="btn "
                            type="button" 
                            id="counter-increment"
                            onClick={() => { this.changeValue('inc') }}>+</button>
                </div>

                <input type="text" className="form-control counterVal" placeholder=""
                        aria-label="Total added" 
                        value={this.props.count||0} onChange={(e) => { this.updateQtyValue(e.target.value)}}/>

                <div className="input-group-append ">
                    <button className="btn  "
                            type="button"
                            id="counter-decrement"
                            onClick={() => { this.changeValue('dec') }}
                        >-</button>
                </div>
            </div>
        )

    }

    
    changeValue(type){
        let qtyVal = this.props.count;
        if(type === 'inc'){
            qtyVal++;
        }else{
            if (qtyVal > 0){
                qtyVal--;
            }
        }
        this.updateQtyValue(qtyVal);
    }

    updateQtyValue(qtyVal){
        qtyVal = parseInt(qtyVal, 10);
        if (!isNaN(qtyVal)){  // Make sure the value is number
            
            this.props.onValueChange(qtyVal);
        }

        
    }
}

Counter.propTypes = {

    onValueChange :  PropTypes.func.isRequired,
    count: PropTypes.number

};

export default Counter;
