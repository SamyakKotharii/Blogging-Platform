import React, { useState } from "react";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";


function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <div id="faq-page">
        <h1 className="faq">Frequently Asked Questions</h1>
        <div className="faq-page-container">
          <div className="accordion-container">
            <h4 className="accordion-title">MUTUAL FUND ANALYSIS TOOL</h4>
            <div className="accordion">
              <div
                className="title-container"
                onClick={() => handleAccordionClick(0)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                  <FontAwesomeIcon icon={activeIndex === 0 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    What is Mutual Fund analysis?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 0 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 0 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    Mutual Fund analysis is analysis of the mutual fund on the
                    basis of schemes, fund houses or fund managers to know what
                    they have been selling or buying. The selling or buying is
                    not related to just one month, it is over a long period
                    (Since the Inception).
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(1)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                  <FontAwesomeIcon icon={activeIndex === 1 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">What is MF Tool?</span>
                </div>
                <div
                  className={`content ${activeIndex === 1 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 1 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    MF tool is a unique analytical platform developed by
                    darkhorsestocks to do mutual fund analysis.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(2)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                <FontAwesomeIcon icon={activeIndex === 2 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    What are the features of MF Tools?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 2 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 2 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    With MF tools you can track a stock, Scheme, Sector, Fund
                    Manager or Fund House as a whole on their monthly buying and
                    selling activities. Also you can perform trend analysis
                    about their buying, continuously for 12 month period. More
                    features to follow
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(3)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                <FontAwesomeIcon icon={activeIndex === 3 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    What is unique about MF Tools compared to other sites or
                    service providers?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 3 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 3 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    MF tools is completely unique. No one in the market provides
                    with this kind of analytics.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(4)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                <FontAwesomeIcon icon={activeIndex === 4 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    Does MF Tools provide mutual fund advice?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 4 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 4 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    No, MF Tools is to perform Mutual Fund Analysis.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(5)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                <FontAwesomeIcon icon={activeIndex === 5 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    Can we buy/sell mutual Funds from MF tools?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 5 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 5 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    No, MF Tools is not an Investing platform.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(6)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                <FontAwesomeIcon icon={activeIndex === 6 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    What are the charges for MF Tools?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 6 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 6 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    Currently in the development stage , we intend to provide it
                    for free to all the darkhorsestocks user for at least 3-6
                    months after the active development is complete.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(7)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                <FontAwesomeIcon icon={activeIndex === 7 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    How long would it take for Active Development to be
                    complete?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 7 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 7 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    Our best estimate is 6-9 months but it can extend more.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(8)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                <FontAwesomeIcon icon={activeIndex === 8 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    Who can get access to MF Tools?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 8 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 8 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    Anyone who signs in with a valid Google account can have
                    access to MF Tools.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(9)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                <FontAwesomeIcon icon={activeIndex === 9 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    What are the charges post development?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 9 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 9 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    Currently no one else provides this kind of analytics as a
                    result it is very difficult to identify the charges. But if
                    we look at the best analytics provided it ranges somewhere
                    between 175k to 215k annually.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(10)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 10 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">How accurate is the Data?</span>
                </div>
                <div
                  className={`content ${activeIndex === 10 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 10 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    The data is completely accurate as all of the data is
                    sourced from SEBI Public disclosures which mutual funds are
                    required to file on monthly basis.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-container">
            <h4 className="accordion-title">DARKHORSESTOCKS DASHBOARD</h4>
            <div className="accordion">
              <div
                className="title-container"
                onClick={() => handleAccordionClick(11)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 11 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    What is darkhorsestocks dashboard?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 11 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 11 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    Dashboard is unique analytical tool developed only for
                    darkhorsestocks selected users which allows them to track
                    all the Darkhorsestocks ideas on a real time basis . This
                    help them to take quick and informed decisions about any
                    stock movements in the market relating specifically to
                    darkhorsestock ideas.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(12)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 12 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    What are different types of analytics provided?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 12 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 12 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    Please Click here to know more about darkhorsestocks
                    dashboard.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(13)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 13 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    How is the Data sourced for real time stock prices?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 13 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 13 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    Data is sourced from all the stocks that are listed on NSE .
                    For some of the stocks which are listed only on BSE their
                    data is sourced from BSE.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(14)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 14 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">Who can get access?</span>
                </div>
                <div
                  className={`content ${activeIndex === 14 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 14 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    Currently we have provided access to darkhorsestocks
                    dashboard to limited users. Soon it will be available to all
                    the users but post Nov we will be limiting dashboard access
                    to only those users who have participated in darkhorsestocks
                    payments.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(15)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 15 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    Does it contain List of all Darkhorsestocks recommendations?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 15 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 15 ? "500px" : "0" }}
                >
                  <div className="content-text"> Yes.</div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(16)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 16 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">What are the charges?</span>
                </div>
                <div
                  className={`content ${activeIndex === 16 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 16 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    As no one else provides this type of dashboard and operating
                    cost being very high we have not yet decided any fix sum but
                    we are expecting it in range of 10-15k more or less.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-container">
            <h4 className="accordion-title">
              DARKHORSESTOCK IDES/RECOMMEDATIONS
            </h4>
            <div className="accordion">
              <div
                className="title-container"
                onClick={() => handleAccordionClick(17)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 17 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">What is Darkhorsestocks?</span>
                </div>
                <div
                  className={`content ${activeIndex === 17 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 17 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    Darkhorsestocks is a unique platform which provides users
                    various different services related to the stock market.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(18)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 18 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    What are Darkhorsestocks ideas/ recommendations?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 18 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 18 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    Every week one fundamentally strong idea is suggested based
                    on our Research and Experience along with the information
                    compiled from various different sources to bring it to the
                    notice of users the company suggested , along with all the
                    relevant information and help them further carry out their
                    own research.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(19)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 19 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    Is DARKHORSESTOCKS SEBI registered?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 19 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 19 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    No, DARKHORSESTOCKS group is not a SEBI registered,
                    suggestions provided are for informational Purpose only.
                    Users are requested to take action after consulting their
                    respective Financial advisors since any member or group
                    would not be responsible for the loss.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(20)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 20 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    How to Join for suggestions?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 20 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 20 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    You can join by clicking on the Link provided on the website
                    for joining via WhatsApp.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(21)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 21 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    What should we do when the idea is suggested?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 21 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 21 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    Once the idea is suggested it is upto the users to do their
                    own research and take investing decision to invest or not to
                    invest in the stock.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(22)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 22 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    Do you provide Target Prices or Stop Loss or Entry/Exit
                    Price?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 22 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 22 ? "500px" : "0" }}
                >
                  <div className="content-text"> No.</div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(23)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 23 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    What are charges for Darkhorsestock ideas?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 23 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 23 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    They are completely free. However once a year
                    darkhorsestocks collects payments from the users where users
                    can participate in payments in the form of donations
                    whatever amount they choose to donate.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(24)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 24 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    What do other advisories charge?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 24 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 24 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    Other Advisories charge anywhere between 30,000 to 40,000 rs
                    per annum.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(25)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 25 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    How many stocks are suggested in Darkhorsestocks ideas?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 25 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 25 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    Normally new stock is suggested every Sunday . However
                    sometimes due to difficulty in finding stocks due to over
                    valuations or not so good fundamentals we may not suggest
                    the idea. Over the past 3 years on an average 50 stocks are
                    suggested in a year.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(26)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 26 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    What could be the holding period of the darkhorsestock
                    ideas?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 26 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 26 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    Normally most of the ideas are suggested with a long term
                    view of 2-3 years.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(27)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 27 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    What if the Stock is Down from the Recommended price?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 27 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 27 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    Generally companies suggested here may depend upon market
                    conditions, however if the stock is down we do hold our
                    conviction in most of the cases but its up to the individual
                    since we cannot advice to buy or sell.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-container">
            <h4 className="accordion-title">
              DARKHORSESTOCKS PREMIUM SERVICES
            </h4>
            <div className="accordion">
              <div
                className="title-container"
                onClick={() => handleAccordionClick(28)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 28 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    Do you have any premium service?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 28 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 28 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    No, currently we do not have any premium service. But we are
                    considering adding Dashboard and some other features to the
                    premium service.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-container">
            <h4 className="accordion-title">DARKHORSESTOCK PAYMENTS</h4>
            <div className="accordion">
              <div
                className="title-container"
                onClick={() => handleAccordionClick(29)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 29 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    How much amount would be appropriate?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 29 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 29 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    Normally any investment service providers charge
                    30,000-35,000 Rs annually for providing 8-10 ideas for
                    investments which would bring per idea cost around 3500Rs.
                    We at darkhorsestocks normally provide more than 50 ideas
                    for understanding in 1 year and we leave it upto the users
                    to decide whatever they think is the appropriate amount to
                    pay
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(30)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 30 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    Which payment gateway is available?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 30 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 30 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    We have partnered with Instamojo, Paytm and Razopay for
                    gateway services offered by them.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(31)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 31 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    What are the modes of Payment supported?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 31 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 31 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    We accept Payments by UPI, Wallets , NEFT , Internet Banking
                    , Credit and Debit Cards.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(32)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 32 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    Do you accept International Payments?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 32 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 32 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    Yes, International Users paying for darkhorsestocks are
                    requested to use Paytm or Razopay payment Gateway for
                    payments.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(33)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 33 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                    What if the amount has been deducted and no conformation
                    regarding the same has not been received?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 33 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 33 ? "500px" : "0" }}
                >
                  <div className="content-text">
                    Please contact {" "}
                    <a href="mailto:support@darkhorsestocks.in">
                      support@darkhorsestocks.in
                    </a>
                    {" "}
                    along with the message of the amount deducted.
                  </div>
                </div>
              </div>
              <div
                className="title-container"
                onClick={() => handleAccordionClick(34)}
              >
                <div className="title">
                  <div className="arrow-wrapper">
                    <FontAwesomeIcon icon={activeIndex === 34 ? faAngleUp : faAngleDown} />
                  </div>
                  <span className="title-text">
                  What if the money has been deducted?
                  </span>
                </div>
                <div
                  className={`content ${activeIndex === 34 ? "active" : ""}`}
                  style={{ maxHeight: activeIndex === 34 ? "500px" : "0" }}
                >
                  <div className="content-text">
                  {" "}
                    Please contact{" "}
                    <a href="mailto:support@darkhorsestocks.in">
                      support@darkhorsestocks.in
                    </a>
                    {" "}
                    along with the message of the amount deducted. Amount
                    deducted twice will be refunded in 7-10 working days.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default FAQPage;