import { useState, useRef } from "react";

function useCardState({ initialValue, playerName }) {
    const [flipped, setFlipped] = useState(initialValue);
    const [matched, setMatched] = useState(false);
    const currentClickedCard = useRef("")
    const previousClickedCard = useRef("")

    const handleFlippedCard = () => {

        currentClickedCard.current = playerName;
        const matchedCards = previousClickedCard.current === currentClickedCard.current;

        if(matchedCards) {
            console.log(`${currentClickedCard.current} matched with ${previousClickedCard.current}`);
            setMatched(true);
        };
        previousClickedCard.current = currentClickedCard.current;
        
        setFlipped(!flipped);
    };


    return { flipped, matched, handleFlippedCard }
};

export default useCardState;