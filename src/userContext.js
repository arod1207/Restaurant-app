import React, { useState, useEffect, createContext } from 'react';

import firebase from 'firebase';

export const userContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    console.log('👱', user);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                console.log('no user signed in');
            }
        });
    }, []);

    return (
        <userContext.Provider value={[user, setUser]}>
            {children}
        </userContext.Provider>
    );
};
