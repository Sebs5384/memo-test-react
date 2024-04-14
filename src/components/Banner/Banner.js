import React, { useState } from 'react';
import StartButton from '../StartButton/StartButton';
import ImageContainer from '../ImageContainer/ImageContainer';
import useVisibilityState from '../../hooks/useVisibilityState';
import worldCupTrohpy from '../../assets/images/world-cup-trophy.png';
import './Banner.css';


function Banner({value}) {
    const [visible, setVisible] = useVisibilityState(true);

    return(
        <div className="banner-container banner-background alert alert-dark container">
            <div className="row">
                <div className="banner-text col-4 text-end">
                    <ImageContainer src={worldCupTrohpy} alt={"world-cup"} className={"world-cup"}/>
                </div>
                <div className="banner-text col-4 text-center">
                    <div>{value}</div>
                    <StartButton value="Start Game" visible={visible} onClick={setVisible}/>       
                </div>
                <div className="banner-text col-4 text-start">
                    <ImageContainer src={worldCupTrohpy} alt={"world-cup"} className={"world-cup"}/>
                </div>
            </div>
        </div>
    );
};

export default Banner;