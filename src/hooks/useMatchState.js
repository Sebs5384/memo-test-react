import { useRef, useState } from "react";

function useMatchState({ initialValue, cardKey }) {
    const [matches, setMatches] = useState(initialValue);
    const previousClickedCard = useRef("");
    const currentClickedCard = useRef(cardKey);

    const handleMatches = () => {
        if(previousClickedCard.current === currentClickedCard.current) {
            setMatches(true);
            previousClickedCard.current = "";
            currentClickedCard.current = "";
        } else {
            previousClickedCard.current = currentClickedCard.current;
        }
        
    };

    return { matches, handleMatches };
};

export default useMatchState;