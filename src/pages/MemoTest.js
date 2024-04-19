import React, { useState } from "react";
import Banner from "../components/Banner/Banner"
import Board from "../components/Board/Board"
import useMemotestGameState from "../hooks/useMemotestGameState";

function Memotest() {
    const {cards, visibility, startGame } = useMemotestGameState(false);

    return(
        <>
            <Banner visibility={visibility} startGame={startGame}></Banner>
            <Board cards={cards} flipped={flipped} setFlipped={setFlipped}></Board>
        </>
    );
};

export default Memotest;