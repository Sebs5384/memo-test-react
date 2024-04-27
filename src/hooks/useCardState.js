import { useRef, useState } from "react";

function useCardState({ initialValue, playerName }) {
    const [flipped, setFlipped] = useState(initialValue);
    const [matched, setMatched] = useState(false);
    const previousClickedCard = useRef("");
    
    console.log(previousClickedCard.current)

    const handleFlippedCard = (event) => {
        const currentClickedCard = playerName;

        if(currentClickedCard === previousClickedCard.current) {
            console.log("matched")
            setMatched(true);
        } else {
            previousClickedCard.current = currentClickedCard;
        };
        setFlipped(!flipped);
    }
        
    console.log(previousClickedCard.current)

    return { flipped, matched, handleFlippedCard }
};

export default useCardState;