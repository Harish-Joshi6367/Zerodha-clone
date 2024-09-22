import React from "react";

function Footer() {
  return (
    <footer
      style={{ backgroundColor: "rgb(250, 250, 250)" }}
      className="border-top"
    >
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} />
            <p>
              &copy; 2010-2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col-3">
            <p>Company</p>
            <a
              href=""
              className="mb-4 pb-5 text-muted"
              style={{ textDecoration: "none", color: "black" }}
            >
              About
            </a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", color: "black", paddingBottom:"20px" }}>Products</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", color: "black", paddingBottom:"20px"}}>Pricing</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", color: "black" }}>Referral programs</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", color: "black" }}>Careers</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", color: "black" }}>Zerodha.tech</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", color: "black" }}>Press & media</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", color: "black" }}>Zerodha cares (CSR)</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", color: "black" }}>About</a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a href="" className="text-muted" style={{ textDecoration: "none", color: "black" }}>Contact</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", color: "black" }}>Support portal</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", color: "black" }}>Z-connect blog</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", color: "black" }}>List of charges</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", color: "black" }}>Downloads & resources</a>
            <br />
          </div>
          <div className="col">
            <p>Account</p>
            <a href="" className="text-muted" style={{ textDecoration: "none", color: "black" }}>Open an Account</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", color: "black" }}>Fund transfer</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", color: "black" }}>60 day challenge</a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-small text-muted fs-8">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX - SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances{" "}
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing. Attention
            investors: 1) Stock brokers can accept securities as margins from
            clients only by way of pledge in the depository system w.e.f
            September 01, 2020. 2) Update your e-mail and phone number with your
            stock broker / depository participant and receive OTP directly from
            depository on your e-mail and/or mobile number to create pledge. 3)
            Check your securities / MF / bonds in the consolidated account
            statement issued by NSDL/CDSL every month.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
