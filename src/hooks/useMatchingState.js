import { useState, useEffect } from "react";

function useMatchingState() {
    const [activeCards, setActiveCards] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [gameEnded, setGameEnded] = useState(false);
    const MAX_MATCHED_PAIRS = 12;
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
                    setMatchedPairs([...matchedPairs, `${previousCard}-${previousCardSuffix}`, `${currentCard}-${currentCardSuffix}`]);
                    setActiveCards([]);
                } else {
                    setTimeout(() => {setActiveCards([])}, 1000);
                };
            };
        };
    };

    useEffect(() => {
        if(matchedPairs.length === MAX_MATCHED_PAIRS) {
            setGameEnded(true);
        };
    }, [matchedPairs]);

    return { activeCards, matchedPairs, gameEnded, handleMatching }
};

export default useMatchingState;