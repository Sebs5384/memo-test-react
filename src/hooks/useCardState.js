import { useState } from "react";

function useCardState({initialValue}) {
    const [flipped, setFlipped] = useState(initialValue);
    const [matchedCards, setMatchedCards] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const MAX_FLIPPED_CARDS = 2;

    const handleFlippedCard = (key) => {
        if(!matchedCards.includes(key) && matchedCards.length < MAX_FLIPPED_CARDS) {
            setMatchedCards([...matchedCards, key]);

            if(matchedCards.length === MAX_FLIPPED_CARDS) {
                const [card1, card2] = matchedCards;

                if(card1.split(".")[0] === card2.split(".")[0]) {
                    
                }
            }
        }
        setFlipped(!flipped);
    };

    return { flipped, handleFlippedCard }
};

export default useCardState;