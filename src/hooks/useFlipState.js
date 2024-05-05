import { useState } from "react";

function useFlipState({ initialValue = false }) {
    const [flipped, setFlippedCard] = useState(initialValue);

    const handleFlippedCard = () => {
        setFlippedCard(!flipped);
    };

    return { flipped, handleFlippedCard };
};

export default useFlipState;