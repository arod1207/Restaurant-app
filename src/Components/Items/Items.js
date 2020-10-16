import React from 'react';
import { Button, Card } from 'react-bootstrap';

import './Items.css';

function Items() {
    return (
        <div className="items">
            <Card style={{ width: '18rem' }}>
                <Card.Img
                    variant="top"
                    src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/6/1/2/FNM_070112-Copy-That-Almost-Famous-Animal-Style-Burger-Recipe_s4x3.jpg.rend.hgtvcom.406.305.suffix/1382541460839.jpeg"
                />
                <Card.Body>
                    <Card.Title>Burger</Card.Title>
                    <Card.Text>Double Quarter Pounder with cheese</Card.Text>
                    <Button variant="primary">Order</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Items;
