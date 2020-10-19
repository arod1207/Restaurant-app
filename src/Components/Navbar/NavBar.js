import React, { useContext } from 'react';

import firebase from 'firebase';

import { basketContext } from '../../basketContext';
import { userContext } from '../../userContext';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './NavBar.css';

function NavBar({ history }) {
    const [items] = useContext(basketContext);
    const [user] = useContext(userContext);

    const handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                alert('You are Signed Out');
            })
            .catch((error) => alert('There was an error'));
    };

    return (
        <div className="navbar">
            <div className="navbar__left">
                <Link to="/">
                    <div className="navbar__brand">Restaurant</div>
                </Link>
            </div>
            <div className="navbar__right">
                <div className="navbar__signin navbar__options">
                    {!user ? (
                        <Link to="/signin">
                            <Button variant="contained" color="primary">
                                Sign In
                            </Button>
                        </Link>
                    ) : (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSignOut}
                        >
                            Sign Out
                        </Button>
                    )}
                </div>
                <div className="navbar__signup navbar__options">
                    <Link to="/signup">
                        {!user ? (
                            <Button variant="contained" color="primary">
                                Sign Up
                            </Button>
                        ) : null}
                    </Link>
                </div>
                <div className="navbar__cart navbar__options">
                    <Link to="/checkout">
                        <ShoppingCartIcon fontSize="large" />
                    </Link>
                </div>
                <div className="navbar__itemCount navbar__options">
                    {items.length}
                </div>
            </div>
        </div>
    );
}

export default NavBar;
