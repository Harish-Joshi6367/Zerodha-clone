import React from 'react';
import Hero from './Hero';
import Brakerage from './Brakerage';
import Footer from '../Footer';
import Navbar from '../Navbar';

function PricingPage() {
    return (
        <>
            <Navbar />
            <Hero/>
            <Brakerage />
            <Footer />
        </>
    );
}

export default PricingPage;