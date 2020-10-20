import React, { useState, useEffect, createContext } from 'react';

import firebase from 'firebase';

export const userContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, []);

    return (
        <userContext.Provider value={[user, setUser]}>
            {children}
        </userContext.Provider>
    );
};
