import React from "react";
import {FaFacebook,FaTwitter,FaGooglePlusG,FaYoutube,FaLinkedin} from "react-icons/fa";
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
          <a href="https://darkhorsestocks.in/About%20us.php">Blogs</a>
          <a href="https://darkhorsestocks.in/About%20us.php">Products</a>
          <a href="https://darkhorsestocks.in/About%20us.php">Subscription</a>
        </div>
        <div className="footcol--3">
          <a href="https://darkhorsestocks.in/About%20us.php">Privacy Policy</a>
          <a href="https://darkhorsestocks.in/About%20us.php">Terms and Condition</a>
          <a href="https://darkhorsestocks.in/About%20us.php">FAQ</a>
          <a href="https://darkhorsestocks.in/About%20us.php">Disclaimer</a>
          <a href="https://darkhorsestocks.in/About%20us.php">Refund Policy</a>
        </div>
        <div className="footcol--4">
          <h3>Contact us</h3>
          <div className="social--div">
          <ul className="socials">
            <li>
              <a href="https://darkhorsestocks.in/About%20us.php">
                <i ><FaFacebook/></i>
              </a>
            </li>
            <li>
              <a href="https://darkhorsestocks.in/About%20us.php">
                <i><FaTwitter/></i>
              </a>
            </li>
            <li>
              <a href="https://darkhorsestocks.in/About%20us.php">
                <i><FaGooglePlusG/></i>
              </a>
            </li>
            <li>
              <a href="https://darkhorsestocks.in/About%20us.php">
                <i><FaYoutube/></i>
              </a>
            </li>
            <li>
              <a href="https://darkhorsestocks.in/About%20us.php">
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
