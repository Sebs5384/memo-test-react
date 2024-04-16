import React, { Suspense, useState } from 'react';
import Card from '../Card/Card';
import './Board.css';
import unflippedCard from '../../assets/images/misc/unflipped-card.jpg';

function Board({ cards, flipped = false, setFlipped = () => {} }) { 
    return(
        <div className="container text-center">
            <div className="row gx-1">
                {cards.map((card, index) => {
                    const image = require('../../assets/images/players/player-1-martinez.jpg');
                    return <Card key={index + 1} image={image} className={"col-3 gy-1 cards-container"} flipped={flipped} onClick={() => setFlipped(!flipped)}/>;
                })}
            </div>
        </div>
    );
};

export default Board;