import React, { useContext, useEffect, useState } from 'react';

import { userContext } from '../../userContext';

import { db } from '../../firebase';

import Items from '../Items/Items';

import Banner from '../../Assets/Images/banner.jpg';

import './Home.css';

function Home() {
    const [user] = useContext(userContext);
    const [items, setItems] = useState([]);

    useEffect(() => {
        db.collection('Items').onSnapshot((snapshot) => {
            setItems(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name,
                    price: doc.data().price,
                    image: doc.data().image,
                }))
            );
        });
    }, []);

    return (
        <div className="home">
            <div className="home__banner"></div>
            <div className="home__title">
                {!user ? (
                    <h1>Welcome Guest</h1>
                ) : (
                    <h1>Welcome {user.displayName}</h1>
                )}
            </div>
            <div className="home__items">
                {items.map((item) => (
                    <Items
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
