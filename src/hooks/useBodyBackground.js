import { useEffect } from "react";
import initialBackground from "../assets/images/misc/world-cup-qatar-2022-logo.png";
import finalBackground from "../assets/images/misc/argentinianTeam.png";

function useBodyBackground({ gameHasEnded }) {
    useEffect(() => {
        if(gameHasEnded) {
            document.body.style.backgroundImage = `url(${finalBackground})`
        } else {
            document.body.style.backgroundImage = `url(${initialBackground})`
        };
    }, [gameHasEnded]);
};

export default useBodyBackground;