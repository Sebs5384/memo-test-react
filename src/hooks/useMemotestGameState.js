import { useState, useEffect } from "react";
import { getCards } from "../utils/general"

function useMemotestGameState(initialValue) {
    const [gameStarted, setGameStarted] = useState(initialValue);
    const [gameRestarted, setGameRestarted] = useState(initialValue);
    const [cards, setCards] = useState([]);
    const [unflippedCardSprite, setUnflippedCardSprite] = useState(null);

    const generateCards = (gameStatus) => {
        const { cards, unflippedCardSprite } = getCards(gameStatus);
        setCards(cards);
        setUnflippedCardSprite(unflippedCardSprite);
    };

    useEffect(() => {
        generateCards(!gameStarted);
    }, [gameRestarted]);

    const startGame = () => {
        setGameStarted(!gameStarted);
    };

    const restartGame = () => {
        setGameRestarted(!gameRestarted);
    };

    return {
        gameStarted,
        gameRestarted,
        cards,
        unflippedCardSprite,
        startGame,
        restartGame
    };

};

export default useMemotestGameState;