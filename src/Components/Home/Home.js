import React, { useContext } from 'react';

import { userContext } from '../../userContext';

import Items from '../Items/Items';

import './Home.css';

function Home() {
    const [user] = useContext(userContext);

    return (
        <div className="home">
            <div className="home__title">
                {!user ? <h1>Welcome Guest</h1> : <h1>Welcome {user.email}</h1>}
            </div>
            <div className="home__items">
                <Items />
            </div>
        </div>
    );
}

export default Home;
