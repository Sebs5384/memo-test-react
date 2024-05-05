import { useState } from "react";

function useMatchingState() {
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const MAX_FLIPPED_CARDS = 2;

    const handleMatching = (key) => {
        const BELOW_MAX_FLIPPED_CARDS = flippedCards.length < MAX_FLIPPED_CARDS
        const isNewFlippedCard = !flippedCards.includes(key)

        if(isNewFlippedCard && BELOW_MAX_FLIPPED_CARDS) {
            setFlippedCards([...flippedCards, key]);
                
            const updatedFlippedCardsLength = flippedCards.length + 1;
            console.log(updatedFlippedCardsLength)

            if(updatedFlippedCardsLength === MAX_FLIPPED_CARDS) {
                const previousCard = flippedCards[0];

                console.log(previousCard)   
            };
        };
    };

    return { matchedPairs, handleMatching }
};

export default useMatchingState;