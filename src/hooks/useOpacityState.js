import { useState, useEffect } from "react";

function useOpacityState({ gameEnded, gameStarted }) {
    const [opacity, setOpacity] = useState(1);
    const [opacityTransition, setOpacityTransition] = useState("decrease");
    const [isNullOpacity, setIsNullOpacity] = useState(gameEnded);

    useEffect(() => {
        if(gameEnded) {
            const opacityChange = setInterval(() => {
                setOpacity(prevOpacity => {
                    if(opacityTransition === "decrease") {
                        const newOpacity = prevOpacity - 0.1;
                        if(newOpacity <= 0) {
                            setOpacityTransition('increase');
                            return 0;
                        };
                        return newOpacity;
                    } else  {
                        const newOpacity = prevOpacity + 0.1;
                        if(newOpacity >= 1) {
                            clearInterval(opacityChange);
                            return 1;
                        };
                        return newOpacity;
                    };
                });
            }, 1500);

            return () => clearInterval(opacityChange);
        };
    }, [gameEnded, opacityTransition]);

    useEffect(() => {
        setOpacity(1);
        setOpacityTransition("decrease");
    }, [gameEnded]);

    useEffect(() => {
        const NULL_OPACITY = opacity === 0;
        
        if(NULL_OPACITY && isNullOpacity) {
            setIsNullOpacity(true);
        } else if(gameStarted) {
            setIsNullOpacity(false);
        };

    }, [opacity]);

    return { opacity, isNullOpacity };
};

export default useOpacityState;
