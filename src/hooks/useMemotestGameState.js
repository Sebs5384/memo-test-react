import { useState } from "react";
import { getPlayerCards, getUnflippedCard } from "../utils/general"

function useMemotestGameState(initialValue) {
    const [gameStarted, setGameStarted] = useState(initialValue);
    const playerCards = getPlayerCards();
    const unflippedCard = getUnflippedCard();
    const cards = gameStarted ? playerCards : Array(12).fill(unflippedCard);

    const startGame = () => {    
        setGameStarted(!gameStarted);
    };
    

    return { gameStarted, cards, unflippedCard, startGame };
};

export default useMemotestGameState;