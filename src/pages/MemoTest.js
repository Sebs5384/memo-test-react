import React from "react";
import Banner from "../components/Banner/Banner"
import Board from "../components/Board/Board"
import { useMemotestGameState, useMatchingState } from "../hooks/index";

function Memotest() {
    const { gameStarted, gameRestarted, cards, unflippedCardSprite, startGame, restartGame } = useMemotestGameState({ initialValue: false });
    const { activeCards, matchedPairs, gameEnded, handleMatching } = useMatchingState();

    return(
        <>
            <Banner startGame={startGame} restartGame={restartGame}></Banner>
            <Board 
                gameStarted={gameStarted} 
                gameEnded={gameEnded}
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