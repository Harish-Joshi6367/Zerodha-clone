import React from 'react';

function Pricing() {
    return ( 
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-4 fs-2'>Unbeatable pricing</h1>
                    <p>We pointed the concept of discount broking and price transparency in india. Flat fees and no hidden charges</p>
                    <a href="" style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 text-center'>
                    <div className='row'>
                        <div className='col border p-2'>
                            <h1 className='mb-3 mt-3'><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                            <p>Free equality delivery and <br></br>direct mutual funds</p>
                        </div>
                        <div className='col border p-2'>
                            <h1 className='mb-3 mt-3'><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;