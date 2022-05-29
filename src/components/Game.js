import React from 'react';

const Game = (props) => {

    return (
        <div className={'container'}>
            <h1>Let's PLAY {`${props.name}`}</h1>
            <h3>game in progress</h3>
            <div className={'cardHolder'}>
                <div className={'card'}> card name</div>
                <div className={'card'}> card name</div>
            </div>
            <button>NEXT</button>
        </div>
    );
};

export default Game;