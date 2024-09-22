import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row">
        <p className="fs-4 mb-5 text-center text-muted">
          Want to know more about our technology stack? Check out the{" "}
          <a href="">Zerodha.tech</a> blog.
        </p>
      </div>
      <div className="row mb-5">
        <h1 className="text-center fs-2 mt-5 mb-4">The Zerodha Universe</h1>
        <p className="text-muted text-center fs-6">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row">
        <div
          className="col-4 p-5"
          style={{ width: "350px", marginLeft: "50px" }}
        >
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div
          className="col-4 p-5"
          style={{ width: "350px", marginLeft: "50px" }}
        >
          <img src="media/images/streakLogo.png" style={{ width: "160px" }} />
          <p className="text-small text-muted mt-2">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div
          className="col-4 p-5"
          style={{ width: "350px", marginLeft: "50px" }}
        >
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "170px" }}
          />
          <p className="text-small text-muted mt-4">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row ">
        <div
          className="col-4 p-5"
          style={{ width: "350px", marginLeft: "50px" }}
        >
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "170px" }}
          />
          <p className="text-small text-muted mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div
          className="col-4 p-5"
          style={{ width: "350px", marginLeft: "50px" }}
        >
          <img src="media/images/goldenpiLogo.png" style={{ width: "190px" }} />
          <p className="text-small text-muted mt-2">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div
          className="col-4 p-5"
          style={{ width: "350px", marginLeft: "50px" }}
        >
          <img src="media/images/dittoLogo.png" style={{ width: "100px" }} />
          <p className="text-small text-muted mt-4">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <div className="row">
        <p className="btn btn-primary p-2 fs-5 text-center mb-5" style={{width:"20%", margin:"0 auto"}}>Sign up for free</p>
      </div>
    </div>
  );
}

export default Universe;
