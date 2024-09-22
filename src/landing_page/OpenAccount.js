import React from 'react';

function OpenAccount() {
    return (
        <div className='container'>
            <div className='row text-center mb-5'>
                <img src='media/images/homeHero.png' alt='horo image' className='mb-5'/>
                <h1 className='f-1 mb-3'>Open a Zerodha account</h1>
                <p>Modern platforms and apps, 0 investments, and flat 20 intraday and F&O trades.</p>
                <button className='btn btn-primary p-2 br-2 mb-5' style={{margin:"0 auto", width: '17%', fontSize:'18px'}}>Sign up now</button>
            </div>
        </div>
    );
}

export default OpenAccount;