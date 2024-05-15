import React from "react";
import Banner from "../components/Banner/Banner"
import Board from "../components/Board/Board"
import { useMemotestGameState, useMatchingState } from "../hooks/index";

function Memotest() {
    const { gameStarted, cards, unflippedCardSprite, startGame, restartGame } = useMemotestGameState(false);
    const { activeCards, matchedPairs, handleMatching } = useMatchingState();

    return(
        <>
            <Banner startGame={startGame} restartGame={restartGame}></Banner>
            <Board 
                gameStarted={gameStarted} 
                cards={cards} 
                backCardSprite={unflippedCardSprite} 
                activeCards={activeCards} 
                matchedPairs={matchedPairs} 
                handleMatching={handleMatching}
            ></Board>
        </>
    );
};

export default Memotest;