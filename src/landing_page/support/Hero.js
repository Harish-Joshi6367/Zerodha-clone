import React from 'react';

function Hero() {
    return (
        <div className='container1' id="supportHero">
            <div className='row' style={{color:"white", paddingBottom:"100px"}}>
                <div className='col-2'></div>
                <div className='col-5' style={{paddingTop:"70px"}}>
                    <a href="" style={{textDecoration:"none", color:"white"}}><h4>Support Portal</h4></a><br></br>
                    <p className='fs-3 mt-2'>Search for an answer or browse help topics to create a ticket</p>
                    <input style={{lineHeight:"50px"}} type="text" className="form-control mt-4" placeholder='Eg: how do i activate F&O, why is myorder getting rejected' autoFocus></input>
                    <a href="" style={{color:"white", fontSize:"18px", lineHeight:"60px"}}>Track account opening</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="" style={{color:"white", fontSize:"18px"}}>Track segment activation</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="" style={{color:"white", fontSize:"18px"}}>Intraday margins</a><br></br>
                    <a href="" style={{color:"white", fontSize:"18px"}}>Kite user manual</a>
                </div>
                <div className='col-5' style={{paddingTop:"70px"}}>
                    <a href="" style={{color:"white", padding:"0 250px"}}>Track Tickets</a><br></br><br></br><br></br><br></br><br></br>
                    <h3 className='fs-4' style={{marginLeft:"30px"}}>Featured</h3>
                    <ol style={{paddingLeft:"80px", lineHeight:"40px", fontSize:"17px"}}>
                        <li><a href="" style={{color:"white"}}>Surveillance measure on scrips - September 2024</a></li>
                        <li><a href="" style={{color:"white"}}>Rights Entitlements listing in September 2024</a></li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Hero;