import './ImageContainer.css';

function ImageContainer({ src, alt, className }) {
    return(
        <img src={src} alt={alt} className={className}/>
    );  
};

export default ImageContainer;
