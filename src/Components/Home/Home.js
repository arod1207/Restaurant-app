import React from 'react';

import Items from '../Items/Items';

import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home__title">
                <h1>Welcome to my Restaurant</h1>
            </div>
            <div className="home__items">
                <Items />
            </div>
        </div>
    );
}

export default Home;
