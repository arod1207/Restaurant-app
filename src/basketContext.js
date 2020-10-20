import React, { useState, useEffect, createContext, useContext } from 'react';
import { db } from './firebase';
import { userContext } from './userContext';

export const basketContext = createContext();

export const BasketProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const [user] = useContext(userContext);

    useEffect(() => {
        if (user) {
            db.collection('Users')
                .doc(user.uid)
                .collection('Items')
                .onSnapshot((snapshot) =>
                    setItems(
                        snapshot.docs.map((doc) => ({
                            name: doc.data(),
                        }))
                    )
                );
        }
    }, [user]);

    return (
        <basketContext.Provider value={[items, setItems]}>
            {children}
        </basketContext.Provider>
    );
};
