import { useState } from "react";
import { getPlayerCards } from "../utils/general"

function useMemotestGameState({ initialValue }) {
    const [gameStarted, setGameStarted] = useState(initialValue);
    const cards = gameStarted ? getPlayerCards() : [];

    const startGame = () => {    
        setGameStarted(!gameStarted);
    };
    

    return { gameStarted, cards, startGame };
};

export default useMemotestGameState;