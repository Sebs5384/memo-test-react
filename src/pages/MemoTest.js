import React from "react";
import Banner from "../components/Banner/Banner"
import Board from "../components/Board/Board"
import useMemotestGameState from "../hooks/useMemotestGameState";

function Memotest() {
    const { cards, unflippedCard, startGame } = useMemotestGameState(false);

    return(
        <>
            <Banner startGame={startGame}></Banner>
            <Board cards={cards} unflippedCard={unflippedCard}></Board>
        </>
    );
};

export default Memotest;