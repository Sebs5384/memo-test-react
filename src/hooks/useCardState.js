import { useState } from "react";

function useCardState({ initialValue }) {
    const [flipped, setFlipped] = useState(initialValue);

    const handleFlippedCard = () => {
        setFlipped(!flipped);
    }

    return { flipped, handleFlippedCard }
};

export default useCardState;