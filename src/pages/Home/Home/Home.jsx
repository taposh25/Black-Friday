import React from 'react';
import Hero from '../Hero/Hero';
import Banner from '../Banner/Banner';
import HeadphonePromo from '../HeadphonePromo/HeadphonePromo';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Banner></Banner>
            <HeadphonePromo></HeadphonePromo>
            <Products></Products>
        </div>
    );
};

export default Home;