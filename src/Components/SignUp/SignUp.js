import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import firebase from 'firebase';
import { db } from '../../firebase';

import Button from '@material-ui/core/Button';

import './SignUp.css';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');

    const history = useHistory();

    const handleSignUp = (e) => {
        e.preventDefault();

        if (password !== checkPassword) {
            return alert('Passwords do not match');
        }

        if (!password) {
            return alert('Please enter a password!');
        }

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
                db.collection('Users').doc(user.user.uid).set({
                    email: user.user.email,
                });
                alert('User Created');
                setEmail('');
                setPassword('');
                setCheckPassword('');
                history.push('/');
            })
            .catch((error) => alert(error));
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="signup__cardLabel">Password</div>
                    <div className="signup__cardInput">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="signup__cardLabel">Check Password</div>
                    <div className="signup__cardInput">
                        <input
                            type="password"
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
