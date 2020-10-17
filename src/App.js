import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { BasketProvider } from './basketContext';

import NavBar from './Components/Navbar/NavBar';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';

import './App.css';

function App() {
    return (
        <div className="app">
            <BasketProvider>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route path="/checkout">
                            <Checkout />
                        </Route>
                        <Route path="/" component={Home} />
                    </Switch>
                </Router>
            </BasketProvider>
        </div>
    );
}

export default App;
