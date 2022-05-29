import React, {Component} from 'react';
import Game from "./Game";
import newGame from "./Game";

class Start extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            deck: [],
            compCards: [],
            playerCards: [],
        }
    }

    deckBuilder = () => {
        const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",];
        const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
        const cards = [];
        for (let s = 0; s < suits.length; s++) {
            for (let v = 0; v < values.length; v++) {
                const value = values[v];
                const suit = suits[s];
                cards.push({value, suit});
            }
        }
        return cards;

    }

    shuffledArr = (deck) => {
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            let temp = deck[i]
            deck[i] = deck[j]
            deck[j] = temp
        }
        this.setState(
            {
                compCards: deck.slice(0, deck.length / 2),
                playerCards: deck.slice(deck.length / 2, deck.length)
            }
        )
    }

    handleClick = () => {

        console.log(this.state.name);
        console.log(...this.state.deck)
        console.log(...this.state.compCards)


    }

    handleChange = (event) => {
        this.setState({name: event.target.value.trim()})
        this.setState({deck: this.deckBuilder()})
        this.shuffledArr(this.state.deck)
    }

    render() {

        return (
            <div className={'container'}>
                <h1>Let's START</h1>
                <h3>Enter your name</h3>
                <input onChange={this.handleChange} type="text" placeholder={'Enter your name'}/>
                <button onClick={this.handleClick}>Start</button>
            </div>
        );
    }
}

export default Start;