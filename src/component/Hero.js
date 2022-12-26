import React from "react";
import './Hero.css'
function Hero() {
    return (
        <div className='container-fluid hero'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 hero_left'>
                        <span className='hero_head'>
                            We are
                            <br/>
                            Designer
                        </span>
                        <br/>
                        <br />
                        <span className='hero_desc'>
                            Every business starts with a dream, a vision.
                             Every product/service has a story waiting to be
                              discovered, to be promoted. We at Antriksh help
                               you with the apt narration, representation & st
                               rategization of your product’s media creation & 
                               marketing.
                        </span>
                        <br />
                        <br />
                        <button className='main_button' >Let's connect</button>
                    </div>
                    <div className='col-6 hero_right'>
                        <img src='https://antrikshglobal.com/wp-content/uploads/2022/10/slide2.gif' width='300'/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero 