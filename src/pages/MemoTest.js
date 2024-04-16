import React, { useState } from 'react';
import Banner from "../components/Banner/Banner"
import Board from "../components/Board/Board"
import { getPlayerCards, getSetOfCards, shuffleArray } from "../utils/general"

function Memotest() {
    const playerCards = getPlayerCards();
    const shuffledPlayerCards = shuffleArray(playerCards);
    const setOfCards = getSetOfCards(shuffledPlayerCards);
    const shuffledSetOfCards = shuffleArray(setOfCards);

    console.log(shuffledSetOfCards);

    const [cards, setCards] = useState(shuffledSetOfCards);
    const [flipped, setFlipped] = useState(false);

    return(
        <>
            <Banner value={"Memotest"}></Banner>
            <Board cards={cards} flipped={flipped} setFlipped={setFlipped}></Board>
        </>
    );
};

export default Memotest;