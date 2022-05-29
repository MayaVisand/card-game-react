import React, {Component} from 'react';
import Game from "./Game";
import newGame from "./Game";

class Start extends Component {

    constructor(props) {
        super(props);
        this.state = {name: ''}
    }
    handleClick = () =>
    {
        console.log(this.state.name);
    }

    handleChange = (event) =>
    {
        this.setState({name: event.target.value.trim()})
        // const name = event.target.value.trim()
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