import React, { useState, useEffect, createContext } from 'react';
import db from './firbase';

export const basketContext = createContext();

export const BasketProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    console.log('🔫', items);

    useEffect(() => {
        db.collection('Items').onSnapshot((snapshot) =>
            setItems(
                snapshot.docs.map((doc) => ({ id: doc.id, item: doc.data() }))
            )
        );
    }, []);

    return (
        <basketContext.Provider value={[items, setItems]}>
            {children}
        </basketContext.Provider>
    );
};
