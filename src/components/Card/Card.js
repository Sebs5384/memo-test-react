import { useFlipState } from "../../hooks/index";
import ImageContainer from "../ImageContainer/ImageContainer";
import "./Card.css";
import cx from "classnames";
import PropTypes from "prop-types";

function Card({ cardKey, image, backCardSprite, gameStarted, matching }) {
    const { flipped, handleFlippedCard } = useFlipState({ initialValue: false });

    const cardOnClick = () => {
        matching(cardKey);
        handleFlippedCard();
    };

    return(
        <>
            <ImageContainer 
                src={backCardSprite} 
                alt={"unflipped-card"} 
                className={cx("memo-card front-card", {
                    "flipped" : flipped,
                    "unclickable": !gameStarted
                })} 
                onClick={cardOnClick}
            />
            <ImageContainer 
                src={image} 
                alt={"card"} 
                className={cx("memo-card overlay-card", {
                    "flipped": flipped,
                    "unclickable": !gameStarted
                })} 
                onClick={cardOnClick}
            />
        </>
    );
};
Card.propTypes = {
    image: PropTypes.string,
    unflippedCard: PropTypes.string
};

export default Card;