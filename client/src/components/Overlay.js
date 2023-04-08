import React from "react";
export default function Overlay() {
  return (
    <div className="text-warn overlay--text">
      <p className="text--sebi">
        DARKHORSESTOCKS IS NEITHER SEBI REGISTERED NOR ANY KIND OF ADVISORY
        SERVICE
      </p>
      <div className="tooltip">
        Read More
        <span className="tooltiptext">
          DARKHORSESTOCKS is an online blogging platform through which we
          publish intresting ideas along with relevant data and information
          compiled from various sources. It is neither an advisory service nor a
          research service.
          <br />
          <br />
          Ideas are not any recommendations to buy/sell or Invest in any stock
          and all the subscribers are advised to do their own research.
          <br />
          <br />
          Due care is taken while presenting the idea published on the website
          however equity shares of the company may be affected by several
          dynamic, ever changing and unpredictable conditions which may lead to
          rise of fall in the price of shares. Darkhorsestocks or any of its
          members would not be responsible/liable for any losses suffered.
          <br />
          <br />
          The contents of the ideas published on this website is based
          completely on the information which is available in public domain and
          belong to the sources believed to be reliable. No representation is
          made that this information provided is Timely, Accurate or Complete.
        </span>
      </div>
    </div>
  );
}
