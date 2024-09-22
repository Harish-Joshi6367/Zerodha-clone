import React from 'react';

function Hero() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row text-center'>
                <h1 className='fs-1 mt-5'>Charges</h1>
                <p className='text-muted fs-5 mb-5'>List of all charges and taxes</p>
            </div>
            <div className='row mt-5 p-5 '>
                <div className='col-4 p-5'>
                    <img  src="media/images/pricing0.svg"/>
                    <h1 className='fs-3 mb-4'>Free equity delivery</h1>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-5'>
                    <img  src="media/images/intradayTrades.svg"/>
                    <h1 className='fs-3 mb-4'>Intraday and F&O trades</h1>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-5'>
                    <img  src="media/images/pricing0.svg"/>
                    <h1 className='fs-3 mb-4'>Free direct MF</h1>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;