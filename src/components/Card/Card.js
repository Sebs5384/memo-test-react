import ImageContainer from "../ImageContainer/ImageContainer";
import "./Card.css";
import cx from "classnames";
import PropTypes from "prop-types";

function Card({ cardKey, image, backCardSprite, gameStarted, isMatching, isActive, handleMatching }) {

    const cardOnClick = () => {
        handleMatching(cardKey);
    };

    return(
        <>
            <ImageContainer 
                src={backCardSprite} 
                alt={"unflipped-card"} 
                className={cx("memo-card front-card", {
                    "flipped" : isActive || isMatching,
                    "unclickable": !gameStarted || isMatching || isActive
                })} 
                onClick={cardOnClick}
            />
            <ImageContainer 
                src={image} 
                alt={"card"} 
                className={cx("memo-card overlay-card", {
                    "flipped": isActive || isMatching,
                    "unclickable": !gameStarted || isMatching || isActive
                })} 
                onClick={cardOnClick}
            />
        </>
    );
};
Card.propTypes = {
    cardKey: PropTypes.string,
    image: PropTypes.string,
    backCardSprite: PropTypes.string,
    gameStarted: PropTypes.bool,
    isMatching: PropTypes.bool,
    isActive: PropTypes.bool,
    handleMatching: PropTypes.func
};

export default Card;