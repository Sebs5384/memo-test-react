import StartButton from '../StartButton/StartButton';
import ImageContainer from '../ImageContainer/ImageContainer';
import worldCupTrohpy from '../../assets/images/misc/world-cup-trophy.png';
import PropTypes from 'prop-types';
import './Banner.css';


function Banner({visibility, startGame}) {
    return(
        <div className="banner-container banner-background alert alert-dark container">
            <div className="row">
                <div className="banner-text col-4 text-end">
                    <ImageContainer src={worldCupTrohpy} alt={"world-cup"} className={"world-cup"}/>
                </div>
                <div className="banner-text col-4 text-center">
                    <div>Memotest</div>
                    <StartButton value="Start Game" visible={visibility} onClick={startGame}/>       
                </div>
                <div className="banner-text col-4 text-start">
                    <ImageContainer src={worldCupTrohpy} alt={"world-cup"} className={"world-cup"}/>
                </div>
            </div>
        </div>
    );
};
Banner.propTypes = {
    gameStarted: PropTypes.bool,
    startGame: PropTypes.func
};

export default Banner;