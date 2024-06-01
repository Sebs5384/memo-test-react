import React from "react";
import Banner from "../components/Banner/Banner"
import Board from "../components/Board/Board"
import { useMemotestGameState, useMatchingState, useOpacityState, useBodyBackground } from "../hooks/index";

function Memotest() {
    const { activeCards, matchedPairs, handleMatching, cleanMatchedPairs } = useMatchingState();
    const { 
        gameStarted, 
        gameRestarted, 
        gameEnded, 
        cards, 
        unflippedCardSprite, 
        startGame, 
        restartGame 
    } = useMemotestGameState({ 
        initialValue: false, 
        matchedCards: matchedPairs, 
        cleanMatchedPairs 
    });
    const { opacity } = useOpacityState({ gameEnded });

    useBodyBackground({ gameHasEnded: gameEnded });

    return(
        <>
            <Banner 
                startGame={startGame}
                restartGame={restartGame} 
                gameStarted={gameStarted}
                gameEnded={gameEnded}
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