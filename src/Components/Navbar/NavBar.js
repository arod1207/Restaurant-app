import React, { useContext } from 'react';

import { basketContext } from '../../basketContext';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './NavBar.css';

function NavBar() {
    const [items, setItems] = useContext(basketContext);

    return (
        <div className="navbar">
            <div className="navbar__left">
                <Link to="/">
                    <div className="navbar__brand">Restaurant</div>
                </Link>
            </div>
            <div className="navbar__right">
                <div className="navbar__signin navbar__options">
                    <Button variant="contained" color="primary">
                        Sign In
                    </Button>
                </div>
                <div className="navbar__signup navbar__options">
                    <Link to="/signup">
                        <Button variant="contained" color="primary">
                            Sign Up
                        </Button>
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
