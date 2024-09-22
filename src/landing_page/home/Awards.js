import React from 'react';

function Awards() {
    return ( 
        <div className='container'>
            <div className='row mt-5 mb-5'>
                <div className='col-6 p-5'>
                    <img src="media/images/largestBroker.svg" alt='broker' />
                </div>
                <div className='row col-6 p-5'>
                    <h1 className='mt-2'>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients. contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <ul className='col-6'>
                        <li>
                            <p>Features and Options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            <p>Currency derivatives</p>
                        </li>
                    </ul>
                    <ul className='col-6'>
                        <li>
                            <p>Stocks & IPOs</p>
                        </li>
                        <li>
                            <p>Direct mutual funds</p>
                        </li>
                        <li>
                            <p>Bounds and Govt. Securities</p>
                        </li>
                    </ul>
                    <img src="media/images/pressLogos.png" style={{width:'70%'}} />
                </div>
            </div>
        </div>
    );
}

export default Awards;