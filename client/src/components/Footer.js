import React from "react";
import {FaFacebook,FaTwitter,FaTelegram,FaYoutube,FaLinkedin} from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer--container">
      <footer className="footer--items">
        <div className="footcol--1">
          <h3>Darkhorsestocks</h3>
          <h4 className="address" width="40px">
            <span>Address:</span>
            <br />2 Parimiti Apartment, Near Anjali Cross road, Bhatta,Ahmedabad
            - 380007
          </h4>
        </div>
        <div className="footcol--2">
        <NavLink onClick={() => window.scrollTo(0, 0)} to="/blogs">Blogs</NavLink>
        <NavLink onClick={() => window.scrollTo(0, 0)} to="/Products">Products</NavLink>
        <NavLink onClick={() => window.scrollTo(0, 0)} to="/Subscription">Subscription</NavLink>
          
        </div>
        <div className="footcol--3">
          <NavLink onClick={() => window.scrollTo(0, 0)} to="/privacy">Privacy Policy</NavLink>
          <NavLink onClick={() => window.scrollTo(0, 0)} to="/terms">Terms and Condition</NavLink>
          <NavLink onClick={() => window.scrollTo(0, 0)} to="/faq">FAQ</NavLink>
          <NavLink onClick={() => window.scrollTo(0, 0)} to="/disclaimer">Disclaimer</NavLink>
          <NavLink onClick={() => window.scrollTo(0, 0)} to="/refund">Refund Policy</NavLink>
        </div>
        <div className="footcol--4">
          <h3>Contact us</h3>
          <div className="social--div">
          <ul className="socials">
            <li>
              <a href="https://www.facebook.com/DARKHORSESTOCKS">
                <i ><FaFacebook/></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/DARKHORSESTOCKS">
                <i><FaTwitter/></i>
              </a>
            </li>
            <li>
              <a href="https://telegram.me/darkhorsestocks">
              <i><FaTelegram/></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCKNoxoowoWYZEfKk8zIe8vQ/featured">
                <i><FaYoutube/></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/darkhorsestocks">
                <i><FaLinkedin/></i>
              </a>
            </li>
            </ul>
          </div>
          <h4 className="whatsapp--no">Whatsapp No. :<span>+91-7874999975</span></h4>
        <h4 className="email">Email :<a style={{color: "white"}} href="mailto:support@darkhorsestocks.in">support@darkhorsestocks.in</a></h4>
        </div>
      </footer>
    </div>
  );
}
