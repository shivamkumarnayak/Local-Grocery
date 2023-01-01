import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Address:- </h4>
        <p>Maharishi Markandeshwar Engineering College.</p>     
        <p>Mullana, Ambala, Haryana</p> 
        <p>Pin Code:- 133207</p>   
      </div>
      <div className="midFooter">
        <h1>Local Grocery</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; Local Grocery</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/thenayakshivam" >Instagram</a>
        <a href="https://www.linkedin.com/in/shivamkumarnayak/" >Linked IN</a>
        <a href="https://www.facebook.com/thenayakshivam" >Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
