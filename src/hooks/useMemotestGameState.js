import { useState, useEffect } from "react";
import { getCards } from "../utils/general"

function useMemotestGameState({ initialValue }) {
    const [gameStarted, setGameStarted] = useState(initialValue);
    const [gameRestarted, setGameRestarted] = useState(initialValue);
    const [cards, setCards] = useState([]);
    const [unflippedCardSprite, setUnflippedCardSprite] = useState(null);

    useEffect(() => {
        generateCards(gameStarted);
    }, [gameStarted]);

    const generateCards = (gameStatus) => {
        const { cards, unflippedCardSprite } = getCards(gameStatus);
        setCards(cards);
        setUnflippedCardSprite(unflippedCardSprite);
    };

    const startGame = () => {
        setGameStarted(true);
    };

    const restartGame = () => {
        setGameRestarted(prevState => !prevState);
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