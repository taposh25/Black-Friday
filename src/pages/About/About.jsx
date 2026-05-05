import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import OurStory from '../OurStory/OurStory';
import SaleBanner from '../../SaleBanner/SaleBanner';
import OurValues from '../OurValues/OurValues';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import HeroFinalSale from '../HeroFinalSale/HeroFinalSale';

const About = () => {
    return (
        <div>
            <AboutUs></AboutUs>
            <OurStory></OurStory>
            <SaleBanner></SaleBanner>
            <OurValues></OurValues>
            <WhyChooseUs></WhyChooseUs>
            <HeroFinalSale></HeroFinalSale>
        </div>
    );
};

export default About;