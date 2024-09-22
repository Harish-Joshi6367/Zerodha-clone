import React from 'react';


function RightSection({imageURL, productName, productDescription, learnMore}) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mt-5 fs-2' style={{paddingTop:"70px"}}>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='mt-3'>
                        <a href="" style={{textDecoration:"none"}}>{learnMore}</a>
                    </div>
                </div>
                <div className='col-1'></div>
                <div className='col-7'>
                    <img src={imageURL} />
                </div>
            </div>
        </div>


        // <div className='container mt-5'>
        //     <div className='row'>
        //         <div className='col-4 mt-5' style={{ paddingLeft:"5%"}}>
        //             <h1 className='fs-2 mb-4'>{productName}</h1>
        //             <p style={{width:"85%"}}>{productDescription}</p>
        //             <a href="" style={{textDecoration:"none"}}>{learnMore}</a>
        //         </div>
        //         <div className='col-6'>
        //             <img src={imageURL} style={{width:"100%", paddingLeft:"50px", display:"inline", top:"0"}}/>
        //         </div>
        //     </div>
        // </div>
    );
}

export default RightSection;