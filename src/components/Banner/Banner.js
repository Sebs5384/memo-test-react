import './Banner.css';
import worldCupTrohpy from '../../assets/images/world-cup-trophy.png';

function Banner() {
    return(
        <div className="banner-container banner-background alert alert-dark container">
            <div className="row">
                <div className="banner-text col-4 text-end">
                    <img src={worldCupTrohpy} className="world-cup"/>
                </div>
                <div className="banner-text col-4 text-center">
                    <div>Memo Test</div>
                    <button className="btn btn-success">Start Game</button>
                </div>
                <div className="banner-text col-4 text-start">
                    <img src={worldCupTrohpy} className="world-cup"/>
                </div>
            </div>
        </div>
    );
};

export default Banner;