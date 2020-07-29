import React, { Component } from 'react';
import { Container } from './CardsAreaStyles'
import Card from '../components/Card'
class CardsArea extends Component {
    render() {
        return (
            <Container>
                <Card></Card>
            </Container>
        )
    }
}


export default CardsArea;
