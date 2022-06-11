import React from 'react';
import ContentBlock from './ContentBlock';
import Hero from './Hero';

const Home = () => {
    return ( 
        <section>
            <Hero />
            <ContentBlock 
            text='We will brew you up a great site that will make your buisness stand out from the rest and give you a professional yet stylish look.' 
            title='Work with you'
            />
        </section>
     );
}

export default Home;