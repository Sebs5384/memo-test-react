import React, { useState } from "react";
import useVisibilityState from "./useVisibilityState";
import { getPlayerCards } from "../utils/general"

function useMemotestGameState({ initialValue }) {
    const [gameStarted, setGameStarted] = useState(initialValue);
    const [visibility, setVisibility] = useVisibilityState(true);
    const cards = gameStarted ? getPlayerCards() : [];

    const startGame = () => {    
        setVisibility(false);
        setGameStarted(!gameStarted);
    };
    

    return { gameStarted, cards, visibility, startGame };
};

export default useMemotestGameState;