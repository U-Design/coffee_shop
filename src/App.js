import React, { Component } from 'react';
import logo from './logo.svg';
import NavHeader from './Conatiners/Header'
import './App.css';
import { Provider } from 'react-redux';
import store from "./store";
import CoffeeList from "./Conatiners/CoffeeList";
import CartCoffee from "./Conatiners/CartCard";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="container body">
              <div className="row">
                  <div className='col-sm-12'>
                      <NavHeader/>
                  </div>
              </div>
              <div className="row">
                  <div className='col-sm-6'>
                    <CoffeeList/>
                  </div>
                  <div className='col-sm-6'>
                    <CartCoffee/>
                  </div>
              </div>

          </div>
        </Provider>
    );
  }
}

export default App;
