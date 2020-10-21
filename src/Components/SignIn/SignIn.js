import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import firebase from 'firebase';
import { auth, provider } from '../../firebase';

import { Button } from '@material-ui/core';

import './SignIn.css';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleSignIn = (e) => {
        e.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                alert('Logged In');
                history.push('/');
            })
            .catch((error) => alert(error));

        setPassword('');
    };

    const handleGoogleLogin = () => {
        auth.signInWithPopup(provider)
            .then(() => {
                history.push('/');
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div>
            <div className="signin">
                <div className="signin__title">Sign In</div>
                <form onSubmit={handleSignIn}>
                    <div className="signin__card">
                        <div className="signin__cardLabel">Email</div>
                        <div className="signin__cardInput">
                            <input
                                type="text"
                                placeholder="username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="signin__cardLabel">Password</div>
                        <div className="signin__cardInput">
                            <input
                                type="password"
                                placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="signin__button">
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Sign In
                            </Button>
                            <div className="signin__button">
                                <Button
                                    variant="contained"
                                    color="Secondary"
                                    onClick={handleGoogleLogin}
                                >
                                    Sign In With Google
                                </Button>
                            </div>
                            <Link to="/">
                                <div className="signin__homeLink">Home</div>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
