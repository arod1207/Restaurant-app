import React, { useContext } from 'react';
import { db } from '../../firebase';

import { userContext } from '../../userContext';

import Button from '@material-ui/core/Button';

import './Items.css';

function Items({ id, name, price, image }) {
    const [user] = useContext(userContext);

    // function to add to shopping cart //
    const addToCart = () => {
        if (user) {
            db.collection('Users').doc(user.uid).collection('Items').add({
                image: image,
                name: name,
                price: price,
            });
        }
    };

    return (
        <div className="items" key={id}>
            <div className="items__card">
                <div className="items__image">
                    <img src={image} alt="" />
                </div>
                <div className="items__name">{name}</div>
                <div className="item__price">{price}</div>
                <div className="items__orderButton">
                    {!user ? (
                        <Button type="disable" />
                    ) : (
                        <Button
                            onClick={addToCart}
                            variant="contained"
                            color="primary"
                        >
                            Order
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Items;
