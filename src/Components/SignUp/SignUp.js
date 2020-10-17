import React, { useState } from 'react';

import firebase from 'firebase';
import { auth } from '../../firebase';

import Button from '@material-ui/core/Button';

import './SignUp.css';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();

        if (password !== checkPassword) {
            return alert('Passwords do not match');
        }

        if (!password) {
            return alert('Please enter a password1');
        }

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => alert('User Created'))
            .catch((error) => alert(error));

        setEmail('');
        setPassword('');
        setCheckPassword('');
    };

    return (
        <div className="signup">
            <div className="signup__title">Sign Up</div>
            <form onSubmit={handleSignUp}>
                <div className="signup__card">
                    <div className="signup__cardLabel">Email</div>
                    <div className="signup__cardInput">
                        <input
                            type="text"
                            placeholder="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="signup__cardLabel">Password</div>
                    <div className="signup__cardInput">
                        <input
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="signup__cardLabel">Check Password</div>
                    <div className="signup__cardInput">
                        <input
                            type="password"
                            placeholder="password"
                            value={checkPassword}
                            onChange={(e) => setCheckPassword(e.target.value)}
                        />
                    </div>
                    <div className="signup__button">
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
