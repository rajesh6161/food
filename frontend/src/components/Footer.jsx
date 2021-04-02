import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 content">
            <div className="contact">
              <h3>CONTACT US</h3>
              <p>
                <i className="bi bi-geo-alt-fill"></i> Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
              <p>
                <i className="bi bi-telephone-fill"></i> +91 8972776267
              </p>
              <p>
                <i className="bi bi-envelope-fill"></i> contact@pristine.com
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="openingTimes">
              <h3>OPENING TIMES</h3>
              <p>10:00 AM-11:00 PM</p>
              <p>Monday-Sunday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
