import { useState } from "react";

function useMatchingState() {
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const MAX_FLIPPED_CARDS = 2;

    const handleMatching = (key) => {
        const BELOW_MAX_FLIPPED_CARDS = flippedCards.length < MAX_FLIPPED_CARDS

        if(BELOW_MAX_FLIPPED_CARDS) {
            setFlippedCards([...flippedCards, key]);
                
            const updatedFlippedCardsLength = flippedCards.length + 1;

            if(updatedFlippedCardsLength === MAX_FLIPPED_CARDS) {
                const previousCard = flippedCards[0];
                const currentCard = key;

                if(previousCard === currentCard) {
                    setMatchedPairs([...matchedPairs, previousCard, currentCard]);
                    setFlippedCards([]);
                } else {
                    setFlippedCards([]);    
                };
            };
        };
    };

    return { matchedPairs, handleMatching }
};

export default useMatchingState;