import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-4 p-5'>
                    <img src={imageURL} />
                </div>
                <div className='col-4'></div>
                <div className='col-4 mt-5'>
                    <h1 className='mt-5 fs-2'>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='mt-3'>
                        <a href="" style={{textDecoration:"none"}}>{tryDemo}</a>
                        <a href="" style={{marginLeft:"50px", textDecoration:"none"}}>{learnMore}</a>
                    </div>  
                    <div className='mt-3'>
                        <a href=""><img src="media/images/googlePlayBadge.svg"/></a>
                        <a href="" style={{marginLeft:"50px"}}><img src="media/images/appStoreBadge.svg"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;