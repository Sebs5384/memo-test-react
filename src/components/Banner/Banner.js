import StartButton from '../StartButton/StartButton';
import ImageContainer from '../ImageContainer/ImageContainer';
import worldCupTrohpy from '../../assets/images/misc/world-cup-trophy.png';
import './Banner.css';
import PropTypes from 'prop-types';

function Banner({ startGame }) {
    return(
        <div className="banner-container banner-background alert alert-dark container">
            <div className="row">
                <div className="col-4 text-end">
                    <ImageContainer src={worldCupTrohpy} alt={"world-cup"} className={"world-cup"}/>
                </div>
                <div className="col-4 text-center">
                    <div className="banner-text">Memotest</div>
                    <StartButton value="Start Game" onClick={startGame}/>       
                </div>
                <div className="col-4 text-start">
                    <ImageContainer src={worldCupTrohpy} alt={"world-cup"} className={"world-cup"}/>
                </div>
            </div>
        </div>
    );
};
Banner.propTypes = {
    startGame: PropTypes.func
};

export default Banner;