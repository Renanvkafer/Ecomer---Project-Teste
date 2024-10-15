import React from 'react';
import "./hero.css"
import hand_icon from "../Assents/hand_icon.png"
import arrow_icon from "../Assents/arrow.png"
import hero_image from "../Assents/hero_image.png"

const Hero = () =>{
    return(
        <div className="hero">
        <div className="hero-left">
                <h2>HOME</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt=""/>

                </div>
                <p>Collections</p>
                <p>For everyone</p>
            </div>
            <div className="hero-lateste-bnt">
                <div>Lattest Colection</div>
                <img src={arrow_icon} alt=""/>
            </div>
        </div>

            <div className="hero-right">
                <img src={hero_image} alt=""/>

            </div>
        </div>
    )
}

export default Hero