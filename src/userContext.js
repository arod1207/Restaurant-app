import React, { useState, useEffect, createContext } from 'react';

import firebase from 'firebase';

export const userContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [googleUser, setGoogleUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, []);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((googleUser) => {
            if (googleUser) {
                setGoogleUser(googleUser);
            } else {
                setGoogleUser(null);
            }
        });
    }, []);

    return (
        <userContext.Provider
            value={[user, setUser, googleUser, setGoogleUser]}
        >
            {children}
        </userContext.Provider>
    );
};
