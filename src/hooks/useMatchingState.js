import { useState, useEffect } from "react";
import goal from "../assets/audio/goal.mp3";
import whistleSound from "../assets/audio/whistle.mp3";

function useMatchingState() {
    const [activeCards, setActiveCards] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);

    const whistleBlow = new Audio(whistleSound);
    const goalSound = new Audio(goal);
    const MAX_FLIPPED_CARDS = 2;

    const handleMatching = (key, index) => {
            
        const belowMaxFlippedCards = activeCards.length < MAX_FLIPPED_CARDS
        if(belowMaxFlippedCards) {
            setActiveCards([...activeCards, key]);
                    
            const activeCardsLength = activeCards.length + 1;

            if(activeCardsLength === MAX_FLIPPED_CARDS) {
                const previousCardSuffix = activeCards[0].split("-")[3];
                const previousCard = activeCards[0].replace(/-[^-]*$/, "")
                const currentCardSuffix = key.split("-")[3];
                const currentCard = key.replace(/-[^-]*$/, "")
                    
                if(previousCard === currentCard) {
                    goalSound.play();
                    setMatchedPairs([...matchedPairs, `${previousCard}-${previousCardSuffix}`, `${currentCard}-${currentCardSuffix}`]);
                    setActiveCards([]);
                } else {
                    whistleBlow.play();
                    setTimeout(() => {setActiveCards([])}, 1000);
                };
            };
        };
    };

    return { activeCards, matchedPairs, handleMatching }
};

export default useMatchingState;