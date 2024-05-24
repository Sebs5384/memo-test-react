import { useState, useEffect } from "react";

function useOpacityState({ gameEnded }) {
    const [opacity, setOpacity] = useState(1);
    const [opacityTransition, setOpacityTransition] = useState("decrease");

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

    return { opacity };
};