import React, { Component } from 'react';
import NavHeader from './Containers/HeaderContainer/HeaderContainer'
import './App.css';
import { Provider } from 'react-redux';
import store from "./store";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CoffeesContainer from "./Containers/CoffeesContainer/CoffeesContainer";
import CartContainer from "./Containers/CartContainer/CartContainer";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
              <div className="container-fluid body">
                  <div className="row  sticky-top">
                      <NavHeader/>
                      <div className='col-sm-12'>
                      </div>
                  </div>
                  <div className="row mainSection">
                      <Route exact path="/" component={CoffeesContainer}/>
                      <Route exact path="/Cart" component={CartContainer}/>
                  </div>

              </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
