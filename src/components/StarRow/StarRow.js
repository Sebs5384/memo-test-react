import ImageContainer from "../ImageContainer/ImageContainer";
import Star from "../../assets/images/misc/star.png";
import "./StarRow.css";
import PropTypes from "prop-types";
import cx from "classnames";

function StarRow({ matchedPairs }) {
    return (
        <>
            <div className="star-row">
                <ImageContainer 
                    src={Star} 
                    alt={"Star"} 
                    className={cx("star")}
                />
                <ImageContainer 
                    src={Star} 
                    alt={"Star"} 
                    className={cx("star")}
                />
                <ImageContainer 
                    src={Star} 
                    alt={"Star"} 
                    className={cx("star")}
                />
            </div>
        </>
    );
};
StarRow.propTypes = {
    matchedPairs: PropTypes.array
};

export default StarRow;

