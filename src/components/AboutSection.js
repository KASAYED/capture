import React from "react";
import home1 from '../img/home1.png';


const AboutSection = ()=>{
    return(
        <div className="discription">
            <div className='title'>
                <div className='hide'>
                    <h1>We work to make</h1>
                </div>
                <div className='hide'>
                    <h1>your <span>dremes</span> comes</h1>
                </div>
                <div className='hide'>
                    <h1>true.</h1>
                </div>
                <p>Contact us to any Photography & Videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </div>
            <div className='imgage'>
                <img src={home1} alt=''/>
            </div>
        </div>
    )
}


export default AboutSection;