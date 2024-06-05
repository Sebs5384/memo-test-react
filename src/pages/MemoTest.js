import React from "react";
import Banner from "../components/Banner/Banner"
import Board from "../components/Board/Board"
import { useMemotestGameState, useMatchingState, useOpacityState, useBodyBackground } from "../hooks/index";

function Memotest() {
    const { activeCards, matchedPairs, handleMatching, cleanMatchedPairs } = useMatchingState();
    const { 
        gameStarted,  
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
    const { opacity, isNullOpacity } = useOpacityState({ gameEnded, gameStarted });

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
                nullOpacity={isNullOpacity}
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