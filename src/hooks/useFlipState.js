import { useState, useEffect } from "react";

function useFlipState({ active, playerName }) {
    const [flipped, setFlippedCard] = useState(false);

    useEffect(() => {
        if(active.includes(playerName)) {
            setFlippedCard(true);
        }
    }, [active, playerName]);

    return { flipped };
};

export default useFlipState;