import { useState } from "react";

function useMatchingState() {
    const [activeCards, setActiveCards] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const MAX_FLIPPED_CARDS = 2;

    const handleMatching = (key) => {
        const BELOW_MAX_FLIPPED_CARDS = activeCards.length < MAX_FLIPPED_CARDS

        if(BELOW_MAX_FLIPPED_CARDS) {
            setActiveCards([...activeCards, key]);
                
            const updatedFlippedCardsLength = activeCards.length + 1;

            if(updatedFlippedCardsLength === MAX_FLIPPED_CARDS) {
                const previousCard = activeCards[0];
                const currentCard = key;

                if(previousCard === key) {
                    setMatchedPairs([...matchedPairs, previousCard, key]);
                    setActiveCards([])
                } else {
                    setActiveCards([])
                };
            };
        };
    };

    return { activeCards, matchedPairs, handleMatching }
};

export default useMatchingState;