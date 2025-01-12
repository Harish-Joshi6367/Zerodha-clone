import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row  border-top mt-5 mb-5">
        <div className="col-8 mt-5">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-4 text-center mb-4">Brokerage Calculator</h3>
          </a>
          <ul style={{textAlign:"left", lineHeight:"2.5", fontSize:"12px"}} className="text-muted">
            <li>₹100 per order for futures and options.</li>
            <li>
              For a non-PIS account, 0.5% or ₹100 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              ₹500 + GST as yearly account maintenance charges (AMC) charges.
            </li>
            <li>
              Equity and Futures - ₹10 per crore + GST of the traded value.
            </li>
            <li>Options - ₹50 per crore + GST traded value (premium value).</li>
            <li>
              Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
              lakh + GST of premium for Options.
            </li>
          </ul>
        </div>
        <div className="col-4 mt-5">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-4">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
