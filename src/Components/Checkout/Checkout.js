import React, { useContext } from 'react';

import db from '../../firbase';

import { basketContext } from '../../basketContext';

import Button from '@material-ui/core/Button';

import './Checkout.css';

function Checkout() {
    const [items, setItems] = useContext(basketContext);

    return (
        <>
            <div className="checkout__title">Checkout</div>
            <div className="checkout">
                {items.map((item) => (
                    <div className="checkout__card" key={item.id}>
                        <div className="checkout__image">
                            <img src={item.item.image} alt="" />
                        </div>
                        <div className="checkout__name">{item.item.name}</div>

                        <div className="checkout__price">{item.item.price}</div>
                        <div className="checkout__removeButton">
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={(e) =>
                                    db.collection('Items').doc(item.id).delete()
                                }
                            >
                                Remove
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="checkout__total">{`${items.price}`}</div>
        </>
    );
}

export default Checkout;
