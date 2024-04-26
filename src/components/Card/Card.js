import { useCardState } from "../../hooks/index";
import ImageContainer from "../ImageContainer/ImageContainer";
import "./Card.css";
import cx from "classnames";
import PropTypes from "prop-types";

function Card({ image, unflippedCard, className }) {
    const { flipped, handleFlippedCard } = useCardState(false);

    return(
        <>
            <ImageContainer src={unflippedCard} alt={"unflipped-card"} className={cx("memo-card", className, {"flipped" : flipped})} onClick={handleFlippedCard}/>
            <ImageContainer src={image} alt={"card"} className={cx("memo-card", className, {"flipped": flipped})} onClick={handleFlippedCard}/>
        </>
    );
};
Card.propTypes = {
    image: PropTypes.string,
    unflippedCard: PropTypes.string,
    className: PropTypes.string
};

export default Card;