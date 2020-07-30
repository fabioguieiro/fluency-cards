
import React, { Component } from 'react'
import { DrawedCard, Icon, TurnText, ActiveSide, Content, Circle, Triangle, Wave } from './CardStyles'
import turnIcon from '../assets/icons/turn.png'
import triangle from '../assets/icons/triangle.svg'
import IconWave from '../assets/icons/wave.svg'
import ReactCardFlip from 'react-card-flip';



class Card extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} style={{position: "relative", top: "20%" }}>

                <DrawedCard  onClick={this.handleClick}>

                    <Icon src={turnIcon} ></Icon>
                    <TurnText>Virar Carta</TurnText>
                    <ActiveSide>A<span>\B</span></ActiveSide>
                    <Content>No problem, do you have your passport with you?</Content>
                    <Circle><Triangle src={triangle}></Triangle></Circle>
                    <Wave src={IconWave}></Wave>

                </DrawedCard>
                <DrawedCard  onClick={this.handleClick} >

                    <Icon src={turnIcon} ></Icon>
                    <TurnText>Virar Carta</TurnText>
                    <ActiveSide><span>A\</span>B</ActiveSide>
                    <Content>Costas do cartao</Content>
                    <Circle><Triangle src={triangle}></Triangle></Circle>
                    <Wave src={IconWave}></Wave>

                </DrawedCard>
            </ReactCardFlip>
        )
    }
}

export default Card;