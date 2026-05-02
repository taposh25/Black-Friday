import React from 'react';
import Hero from '../Hero/Hero';
import Banner from '../Banner/Banner';
import HeadphonePromo from '../HeadphonePromo/HeadphonePromo';
import Products from '../Products/Products';
import OfferBanner from '../Products/OfferBanner/OfferBanner';
import OrderTrack from '../OrderTrack/OrderTrack';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div >
            <Hero></Hero>
            <Banner></Banner>
            <HeadphonePromo></HeadphonePromo>
            <Products></Products>
            <OfferBanner></OfferBanner>
            <OrderTrack></OrderTrack>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;