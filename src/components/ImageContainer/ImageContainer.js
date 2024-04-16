import './ImageContainer.css';
import PropTypes from 'prop-types';

function ImageContainer({ src, alt, className }) {
    return(
        <img src={src} alt={alt} className={className}/>
    );  
};
ImageContainer.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string
}

export default ImageContainer;
