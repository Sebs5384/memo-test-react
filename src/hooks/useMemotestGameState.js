import { useState, useEffect } from "react";
import { getCards } from "../utils/general"
import argentinianChantSound from "../assets/audio/argentina-chant.mp3";

function useMemotestGameState({ initialValue, matchedCards }) {
    const [gameStarted, setGameStarted] = useState(initialValue);
    const [gameRestarted, setGameRestarted] = useState(initialValue);
    const [gameEnded, setGameEnded] = useState(initialValue);
    const [cards, setCards] = useState([]);
    const [unflippedCardSprite, setUnflippedCardSprite] = useState(null);
    const gameEndedSound = new Audio(argentinianChantSound);
    const MAX_MATCHED_CARDS = 12;

    useEffect(() => {
        generateCards(gameStarted);
    }, [gameStarted]);

    useEffect(() => {
        if (matchedCards.length === MAX_MATCHED_CARDS) {
            gameEndedSound.play();
            setGameEnded(true);
        }
    }, [matchedCards]);

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
        gameEnded,
        cards,
        unflippedCardSprite,
        startGame,
        restartGame
    };
};

export default useMemotestGameState;