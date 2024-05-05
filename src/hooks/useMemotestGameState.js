import { useState } from "react";
import { getPlayerCards, getUnflippedCard } from "../utils/general"

function useMemotestGameState(initialValue) {
    const [gameStarted, setGameStarted] = useState(initialValue);
    const playerCards = getPlayerCards();
    const unflippedCardSprite = getUnflippedCard();
    const cards = gameStarted ? playerCards : Array(12).fill(unflippedCardSprite);

    const startGame = () => {    
        setGameStarted(!gameStarted);
    };
    

    return { gameStarted, cards, unflippedCardSprite, startGame };
};

export default useMemotestGameState;