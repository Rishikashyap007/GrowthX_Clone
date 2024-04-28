import React from "react";
import fbk from "../Assets/fbk.webp";
import samsung from "../Assets/samsung.png";
import amzn from "../Assets/amzn.webp";
import zom from "../Assets/zom.webp";
import adobe from "../Assets/adobe.webp";
import razor from "../Assets/razor.webp";
import stripe from "../Assets/stripe.webp";
import phnpay from "../Assets/phnpay.webp";
import spot from "../Assets/spot.webp";
import swigg from "../Assets/swigg.webp";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_template">
      <div className="footer-text_template">
        <h1>The Best Products & Growth Templates</h1>
        <h4>
          We have worked with leaders from top companies to design these <br />
          templates, which they use in their day-to-day operations.
        </h4>
        <div className="img-all_template">
          <img src={fbk} />
          <img src={adobe} />
          <img src={samsung} />
          <img src={amzn} />
          <img src={zom} />
        </div>
        <div className="img-two_template">
          <img src={razor} />
          <img src={stripe} />
          <img src={phnpay} />
          <img src={spot} />
          <img src={swigg} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
