import { useState, useEffect, useRef } from "react";
import { getCards } from "../utils/general"
import argentinianChantSound from "../assets/audio/argentina-chant.mp3";

function useMemotestGameState({ initialValue, matchedCards, cleanMatchedPairs }) {
    const [gameStarted, setGameStarted] = useState(initialValue);
    const [gameRestarted, setGameRestarted] = useState(initialValue);
    const [gameEnded, setGameEnded] = useState(initialValue);
    const [cards, setCards] = useState([]);
    const [unflippedCardSprite, setUnflippedCardSprite] = useState(null);
    const gameEndedSound = useRef(new Audio(argentinianChantSound));
    const MAX_MATCHED_CARDS = 12;

    const generateCards = (gameStatus) => {
        const { cards, unflippedCardSprite } = getCards(gameStatus);
        setCards(cards);
        setUnflippedCardSprite(unflippedCardSprite);
    };

    const startGame = () => {
        setGameStarted(true);
    };

    const restartGame = () => {
        setGameEnded(false);
        setGameStarted(true);
        setCards([]);
        cleanMatchedPairs();
        setUnflippedCardSprite(null);

        gameEndedSound.current.pause();
        gameEndedSound.current.currentTime = 0;
    };

    useEffect(() => {
        generateCards(gameStarted);
    }, [gameStarted, gameRestarted]);

    useEffect(() => {
        if (matchedCards.length === MAX_MATCHED_CARDS) {
            setGameStarted(false);
            setGameEnded(true);

            gameEndedSound.current.play();
        }
    }, [matchedCards]);

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