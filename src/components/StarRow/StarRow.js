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
                    className={cx("star star-opacity-0", {
                        "star-opacity-0-5": matchedPairs.length === 2,
                        "star-opacity-1": matchedPairs.length === 4,
                    })}
                />
                <ImageContainer 
                    src={Star} 
                    alt={"Star"} 
                    className={cx("star star-opacity-0", { 
                        "star-opacity-0-5": matchedPairs.length === 2,
                        "star-opacity-1": matchedPairs.length === 4,
                    })}
                />
                <ImageContainer 
                    src={Star} 
                    alt={"Star"} 
                    className={cx("star star-opacity-0",{ 
                        "star-opacity-0-5": matchedPairs.length === 2,
                        "star-opacity-1": matchedPairs.length === 4,
                    })}
                />
            </div>
        </>
    );
};
StarRow.propTypes = {
    matchedPairs: PropTypes.array
};

export default StarRow;

