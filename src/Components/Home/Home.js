import React from 'react';

import { Container, Jumbotron, Row } from 'react-bootstrap';

import Items from '../Items/Items';

import './Home.css';

function Home() {
    return (
        <div className="home">
            <Jumbotron>
                <h1>Welcome to my Restaurant</h1>
            </Jumbotron>
            <Container>
                <Row className="home__item">
                    <Items />
                    <Items />
                    <Items />
                    <Items />
                    <Items />
                    <Items />
                </Row>
            </Container>
        </div>
    );
}

export default Home;
