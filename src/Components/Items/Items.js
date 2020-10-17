import React, { useContext } from 'react';
import db from '../../firbase';

import { basketContext } from '../../basketContext';

import Button from '@material-ui/core/Button';

import './Items.css';

function Items() {
    const [items, setItems] = useContext(basketContext);

    // function to add to shopping cart //
    const addToCart = (item) => {
        console.log(item);
        db.collection('Items')
            .add({
                image: item.item.image,
                name: item.item.name,
                price: item.item.price,
            })
            .then(console.log('🚀'));
    };

    return (
        <div className="items">
            {items.map((item) => (
                <div className="items__card" key={item.id}>
                    <div className="items__image">
                        <img src={item.item.image} alt="" />
                    </div>
                    <div className="items__name">{item.item.name}</div>
                    <div className="item__price">{item.item.price}</div>
                    <div className="items__orderButton">
                        <Button
                            onClick={(e) => addToCart(item)}
                            variant="contained"
                            color="primary"
                        >
                            Order
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Items;
