import './ImageContainer.css';
import PropTypes from 'prop-types';

function ImageContainer({ src, alt, className, onClick = () => {} }) {
    return(
        <img src={src} alt={alt} className={className} onClick={onClick}/>
    );  
};
ImageContainer.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default ImageContainer;
