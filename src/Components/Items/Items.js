import React, { useEffect, useState } from 'react';
import db from '../../firbase';

import Button from '@material-ui/core/Button';

import './Items.css';

function Items() {
    const [items, setItems] = useState([]);

    console.log('🔫', items);

    useEffect(() => {
        db.collection('Items').onSnapshot((snapshot) =>
            setItems(
                snapshot.docs.map((doc) => ({ id: doc.id, item: doc.data() }))
            )
        );
    }, []);

    // function to add to shopping cart //
    const addToCart = (e) => {
        setItems(e.target.value);
        console.log(items);
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
                            value={item.id}
                            onClick={addToCart}
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
