import React from 'react'
import './HeroSection.css'
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className='hero-section'>
            <div className="left">
                <h2>Daily Quizes 
                   <br/> <i className='text-gradient'>1-vs-1 Challenges</i>
                   <br/> Earn Rewards <FaStar className='reward-icon' />
                </h2>
                <div className="buttons">
                <button className='button-20'><Link to="/challenges">Play Now</Link></button>
                <button className='button-21'><Link to="/challenges">Challenge</Link></button>
                </div>
            </div>

            <div className="right">
                <img src="https://www.98thpercentile.com/hubfs/Website%20Images/qw_Images/qw-ele-7.png" alt="" />
            </div>
        </section>
    )
}

export default HeroSection