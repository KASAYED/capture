import React from "react";
import home2 from '../img/home2.png';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import teamwork from '../img/teamwork.svg';
import money from '../img/money.svg';


const ServicesSection = ()=>{
    return(
        <div className='services'>
            <div className='descreption'>
                <h2>High <span>High</span> Services</h2>
                <div className='cards'>
                    <div className='card'>
                        <div className='icon'>
                            <img src={clock} alt='icon'/>
                            <h3>Efficient</h3>
                        </div>
                        <p>lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <div className='icon'>
                            <img src={teamwork} alt='icon'/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <div className='icon'>
                            <img src={diaphragm} alt='icon'/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>lorem ipsum dolor sit amet</p>
                    </div>
                </div>

                <div className='cards'>
                    <div className='card'>
                        <div className='icon'>
                            <img src={money} alt='icon'/>
                            <h3>Affordable</h3>
                        </div>
                        <p>lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
            <img src={home2} alt='camera'/>
        </div>
    )
}


export default ServicesSection;