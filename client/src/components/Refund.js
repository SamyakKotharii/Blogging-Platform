import React from "react";
import Footer from "./Footer";

const Refund = () => {
  return (
    <>
      <h1 className="privacy--policy">REFUND AND CANCELLATION POLICY</h1>
      <div className="privacy--div">
        <h2 className="privacy--title">Cancellation Policy</h2>
        <p className="privacy--para">
          For Cancellations please contact us via contact us link or on{" "}
          <a href="mailto:support@darkhorsestocks.in?body=My custom mail body">
            {" "}
            support@darkhorsestocks.in
          </a>{" "}
          .
        </p>
        <h2 className="privacy--title">Refund Policy</h2>
        <p className="privacy--para">
          We will try our best to create the suitable design concepts for our
          clients.
          <br />
          <br />
          We have no Refund Policy.
          <br />
          <br />
          Amounts paid in excess / Paid twice or have been deducted twice due to
          the technnical error will be refunded back within 7 working days.
          However for expidiated refund process users are requested to share the
          details of transaction at the{" "}
          <a href="mailto:support@darkhorsestocks.in?body=My custom mail body">
            {" "}
            support@darkhorsestocks.in
          </a>
          .
          <br />
          <br />
          If paid by credit card, refunds will be issued to the original credit
          card provided at the time of purchase and in case of payment gateway
          name payments refund will be made to the same account.
        </p>

        <hr />
        <h4 style={{ textAlign: "center" }}>
          Copyright © 2023 Darkhorsestocks.in. All Rights Reserved.
        </h4>
      </div>
      <Footer />
    </>
  );
};

export default Refund;
