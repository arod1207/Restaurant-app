import React, { useContext, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import firebase from 'firebase';

import { basketContext } from '../../basketContext';
import { userContext } from '../../userContext';

import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './NavBar.css';

function NavBar() {
    const [googleUser] = useContext(userContext);
    const [items] = useContext(basketContext);
    const [user] = useContext(userContext);

    const history = useHistory();

    const handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                alert('You are Signed Out');
                history.push('/');
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
                <div className="navbar__options">
                    {user ? <Avatar alt="" src={googleUser.photoURL} /> : ''}
                </div>
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
                {!user ? null : (
                    <div className="navbar__cart navbar__options">
                        <Link to="/checkout">
                            <ShoppingCartIcon fontSize="large" />
                        </Link>
                    </div>
                )}
                {!user ? null : (
                    <div className="navbar__itemCount navbar__options">
                        {user ? items.length : 0}
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavBar;
