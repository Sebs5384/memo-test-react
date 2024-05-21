import { useEffect } from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import Star from "../../assets/images/misc/star.png";
import "./StarRow.css";
import PropTypes from "prop-types";
import cx from "classnames";

function StarRow({ matchedPairs }) {
    return (
        <>
            <div>
                <ImageContainer 
                    src={Star} 
                    alt={"Star"} 
                    className={cx("star", {
                        "opacity-0": matchedPairs.length < 4,
                        "opacity-1": matchedPairs.length >= 4,
                    })}
                />
                <ImageContainer 
                    src={Star} 
                    alt={"Star"} 
                    className={cx("star", { 
                        "opacity-0": matchedPairs.length < 8,
                        "opacity-1": matchedPairs.length >= 8
                    })}
                />
                <ImageContainer 
                    src={Star} 
                    alt={"Star"} 
                    className={cx("star", { 
                        "opacity-0": matchedPairs.length < 12,
                        "opacity-1": matchedPairs.length >= 12 
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

