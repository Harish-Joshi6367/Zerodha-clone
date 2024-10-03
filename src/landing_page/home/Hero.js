import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center mb-5'>
                <img src='media/images/homeHero.png' alt='hero image' className='mb-5'/>
                <h1>Invest in everything</h1>
                <p>Online platform to invets in stocks, derivatives, mutual funds, and more</p>
                <button className='btn btn-primary p-1 br-2 mb-5' style={{margin:"0 auto", width: '17%', fontSize:'18px'}}>Signup Now</button>
            </div>
        </div>
    );
}

export default Hero;