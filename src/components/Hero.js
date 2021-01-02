import React from 'react';
import logo from '../assets/images/logo.png';

const Hero = () => {
    return ( 
        <section className='hero'>
            <div className='hero__logo'>
                <img src={logo} />
            </div>
        </section>
     );
}

export default Hero;