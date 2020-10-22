import React, { useContext, useEffect, useState } from 'react';

import PayPal from '../PayPalButton/PayPalButton';

import { db } from '../../firebase';

import { userContext } from '../../userContext';

import Button from '@material-ui/core/Button';

import './Checkout.css';

function Checkout() {
    const [user] = useContext(userContext);
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (user) {
            db.collection('Users')
                .doc(user.uid)
                .collection('Items')
                .onSnapshot((snapshot) => {
                    setItems(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            name: doc.data().name,
                            price: doc.data().price,
                            image: doc.data().image,
                        }))
                    );
                });
        }
    }, [user]);

    const totalSum = items.map((item) => item.price);

    const reducer = (accumulator, item) => {
        return accumulator + item;
    };

    const total = totalSum.reduce(reducer, 0);

    return (
        <>
            <div className="checkout__title">Checkout</div>
            <div className="checkout">
                {items.map((item) => (
                    <div className="checkout__card" key={item.id}>
                        <div className="checkout__image">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="checkout__name ">{item.name}</div>

                        <div className="checkout__price">$ {item.price}</div>
                        <div className="checkout__removeButton">
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={(e) =>
                                    db
                                        .collection('Users')
                                        .doc(user.uid)
                                        .collection('Items')
                                        .doc(item.id)
                                        .delete()
                                }
                            >
                                Remove
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="checkout__total">
                {!user
                    ? `You are not signed in`
                    : items.length === 0
                    ? 'Your cart is empty'
                    : `Your Total is $ ${total.toFixed(2)}`}
            </div>
            {items.length === 0 ? null : (
                <div className="checkout__paypal">
                    <PayPal amount={total.toFixed(2)} />
                </div>
            )}
        </>
    );
}

export default Checkout;
