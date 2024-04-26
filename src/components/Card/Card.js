import { useCardState } from "../../hooks/index";
import ImageContainer from "../ImageContainer/ImageContainer";
import "./Card.css";
import cx from "classnames";
import PropTypes from "prop-types";

function Card({ image, unflippedCard, gameStarted }) {
    const { flipped, handleFlippedCard } = useCardState(false);

    return(
        <>
            <ImageContainer 
                src={unflippedCard} 
                alt={"unflipped-card"} 
                className={cx("memo-card front-card", {
                    "flipped" : flipped,
                    "unclickable": !gameStarted
                })} 
                onClick={handleFlippedCard}
            />
            <ImageContainer 
                src={image} 
                alt={"card"} 
                className={cx("memo-card overlay-card", {
                    "flipped": flipped,
                    "unclickable": !gameStarted
                })} 
                onClick={handleFlippedCard}
            />
        </>
    );
};
Card.propTypes = {
    image: PropTypes.string,
    unflippedCard: PropTypes.string
};

export default Card;