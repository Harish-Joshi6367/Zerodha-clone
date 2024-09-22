import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row mt-5 text-center">
        <h1>People</h1>
      </div>

      <div className="people">
        <div className="col-5" style={{padding:"0 0 0 200px"}}>
            <img src="media/images/hs.jpg" style={{width:"80%", height:"80%", borderRadius:"50%"}}/>
            <p className="fs-3 text-center">Harish Sharma</p>
            <p className="fs-6 text-center text-muted">Founder, CEO</p>
        </div>
        <div className="col-7 text-muted" style={{padding:"0 200px 0 50px", fontSize:"18px"}}>
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Playing basketball is his zen.</p>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Team;
