import React, { useState } from "react";
import Banner from "../components/Banner/Banner"
import Board from "../components/Board/Board"
import useMemotestGameState from "../hooks/useMemotestGameState";
import useVisibilityState from '../hooks/useVisibilityState';

function Memotest() {
    const {gameStarted, cards, startGame } = useMemotestGameState(false);
    const [visibility, setVisibility] = useVisibilityState(gameStarted);
    
    return(
        <>
            <Banner visibility={visibility} startGame={startGame}></Banner>
            <Board cards={cards}></Board>
        </>
    );
};

export default Memotest;