import React from "react";
import Banner from "../components/Banner/Banner"
import Board from "../components/Board/Board"
import useMemotestGameState from "../hooks/useMemotestGameState";

function Memotest() {
    const { gameStarted, cards, unflippedCardSprite, startGame } = useMemotestGameState(false);

    return(
        <>
            <Banner startGame={startGame}></Banner>
            <Board gameStarted={gameStarted} cards={cards} backCardSprite={unflippedCardSprite}></Board>
        </>
    );
};

export default Memotest;