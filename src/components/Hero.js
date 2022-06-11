import React from 'react';
import logo from '../assets/images/logo.png';

const Hero = () => {
    return ( 
        <section data-scroll-section className='hero'>
            <div data-scroll data-scroll-speed="6" className='hero__logo'>
                <img src={logo} />
            </div>
        </section>
     );
}

export default Hero;