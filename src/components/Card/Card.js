import ImageContainer from '../ImageContainer/ImageContainer';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './Card.css';

function Card({ image, className, flipped = false, onClick = () => {} }) {
    return(
        <div className={cx(className, { "flipped": flipped })} onClick={onClick}>
            <ImageContainer src={image} alt={"card"} className={"memo-card"}/>
        </div>
    );
};
Card.propTypes = {
    className: PropTypes.string,
    flipped: PropTypes.bool,
    onClick: PropTypes.func
};

export default Card;