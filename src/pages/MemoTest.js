import React from "react";
import Banner from "../components/Banner/Banner"
import Board from "../components/Board/Board"
import { useMemotestGameState, useMatchingState, useOpacityState, useBodyBackground } from "../hooks/index";

function Memotest() {
    const { gameStarted, gameRestarted, cards, unflippedCardSprite, startGame, restartGame } = useMemotestGameState({ initialValue: false });
    const { activeCards, matchedPairs, gameEnded, handleMatching } = useMatchingState();
    const { opacity } = useOpacityState({ gameEnded });

    useBodyBackground({ gameHasEnded: gameEnded });

    return(
        <>
            <Banner 
                startGame={startGame} 
                restartGame={restartGame} 
                gameStarted={gameStarted}
                matchedPairs={matchedPairs}
                bannerOpacity={opacity}
            ></Banner>
            <Board 
                gameStarted={gameStarted} 
                gameEnded={gameEnded}
                cards={cards} 
                backCardSprite={unflippedCardSprite} 
                activeCards={activeCards} 
                matchedPairs={matchedPairs} 
                handleMatching={handleMatching}
                boardOpacity={opacity}
            ></Board>
        </>
    );
};

export default Memotest;