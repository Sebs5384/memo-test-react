import React, { useState } from "react";
import Banner from "../components/Banner/Banner"
import Board from "../components/Board/Board"
import useMemotestGameState from "../hooks/useMemotestGameState";

function Memotest() {
    const { cards, startGame } = useMemotestGameState(false);

    return(
        <>
            <Banner startGame={startGame}></Banner>
            <Board cards={cards}></Board>
        </>
    );
};

export default Memotest;