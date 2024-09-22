import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row mt-5'>
                <div className='col-6'>
                    <img src="media/images/education.svg" style={{width:"70%"}} />
                </div>
                <div className='col-6'>
                    <h2 className='fs-2'>Free and open market education</h2>
                    <p>Versity the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" style={{textDecoration:"none"}}>Versity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className='mt-5'>Versity the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" style={{textDecoration:"none"}}>Trending Q&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;