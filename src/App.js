import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { BasketProvider } from './basketContext';
import { UserProvider } from './userContext';

import NavBar from './Components/Navbar/NavBar';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';

import './App.css';

function App() {
    return (
        <div className="app">
            <UserProvider>
                <BasketProvider>
                    <Router>
                        <NavBar />
                        <Switch>
                            <Route path="/checkout" component={Checkout} />
                            <Route path="/signup" component={SignUp} />
                            <Route path="/signin" component={SignIn} />
                            <Route path="/" component={Home} />
                        </Switch>
                    </Router>
                </BasketProvider>
            </UserProvider>
        </div>
    );
}

export default App;
