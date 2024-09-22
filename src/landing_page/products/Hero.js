import React from 'react';

function Hero() {
    return (
        <div className='container mt-5 text-center border-bottom'>
            <h1 className='fs-2 mb-4 mt-5' style={{paddingTop:"50px"}}>Technology</h1>
            <p className='fs-5 mb-4 text-muted'>Sleek, modern, and intuitive trading platforms</p>
            <p className='text-muted mb-5'  style={{paddingBottom:"80px"}}>Check out our <a href="" style={{textDecoration:"none"}}>investment offerings →</a></p>
        </div>
    );
}

export default Hero;