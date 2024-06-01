import StartButton from '../StartButton/StartButton';
import StarRow from '../StarRow/StarRow';
import ImageContainer from '../ImageContainer/ImageContainer';
import worldCupTrohpy from '../../assets/images/misc/world-cup-trophy.png';
import './Banner.css';
import PropTypes from 'prop-types';

function Banner({ startGame, restartGame, gameStarted, gameEnded, matchedPairs, bannerOpacity }) {
    return(
        <div id="banner" className="banner-container banner-background alert alert-dark container" style={{ opacity: bannerOpacity }}> 
            <div className="row">
                <div className="col-4 text-end">
                    <ImageContainer src={worldCupTrohpy} alt={"world-cup"} className={"world-cup"}/>
                </div>
                <div className="col-4 text-center">
                    <div className="banner-text">Memotest</div>
                    {gameStarted && !gameEnded && <StarRow matchedPairs={matchedPairs}/>}
                    {gameEnded && <StartButton value="Restart Game" onClick={restartGame}/>}
                    {<StartButton value="Start Game" onClick={startGame}/>}       
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