import React, { useState } from 'react';
import useVisibilityState from '../../hooks/useVisibilityState';
import StartButton from '../StartButton/StartButton';
import './Banner.css';
import worldCupTrohpy from '../../assets/images/world-cup-trophy.png';

function Banner() {
    const [visible, setVisible] = useVisibilityState(true);

    return(
        <div className="banner-container banner-background alert alert-dark container">
            <div className="row">
                <div className="banner-text col-4 text-end">
                    <img src={worldCupTrohpy} className="world-cup" alt="world-cup"/>
                </div>
                <div className="banner-text col-4 text-center">
                    <div>Memo Test</div>
                    <StartButton value="Start Game" visible={visible} onClick={setVisible}/>       
                </div>
                <div className="banner-text col-4 text-start">
                    <img src={worldCupTrohpy} className="world-cup" alt="world-cup"/>
                </div>
            </div>
        </div>
    );
};

export default Banner;