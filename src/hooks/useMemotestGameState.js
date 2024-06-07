import { useState, useEffect, useRef } from "react";
import getCards from "../utils/general"
import argentinianChantSound from "../assets/audio/argentina-chant.mp3";

function useMemotestGameState({ initialValue, matchedCards, cleanMatchedPairs }) {
    const [gameStarted, setGameStarted] = useState(initialValue);
    const [gameRestarted, setGameRestarted] = useState(initialValue);
    const [gameEnded, setGameEnded] = useState(initialValue);
    const [cards, setCards] = useState([]);
    const [unflippedCardSprite, setUnflippedCardSprite] = useState(null);
    const gameEndedSound = useRef(new Audio(argentinianChantSound));
    const MAX_MATCHED_CARDS = 12;

    const generateCards = (gameStarted, gameEnded) => {
        if(gameEnded) return;
        
        const { cards, unflippedCardSprite } = getCards(gameStarted);
        setCards(cards);
        setUnflippedCardSprite(unflippedCardSprite);
    };

    const startGame = () => {
        setGameStarted(true);
    };

    const restartGame = () => {
        setGameEnded(false);
        setGameStarted(true);
        setGameRestarted(true);
        setCards([]);
        cleanMatchedPairs();
        setUnflippedCardSprite(null);

        gameEndedSound.current.pause();
        gameEndedSound.current.currentTime = 0;
    };

    useEffect(() => {
        generateCards(gameStarted, gameEnded);
    }, [gameStarted, gameRestarted, gameEnded]);

    useEffect(() => {
        if (matchedCards.length === MAX_MATCHED_CARDS) {
            setGameEnded(true);
            setGameStarted(false);
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