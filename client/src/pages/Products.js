import React from "react";
import Footer from "../components/Footer";
export default function Products() {
  return (
    <>
      <div className="container--funda">
        <div>
          <img
            className="image--funda"
            src="https://mf.darkhorsestocks.in/static/media/sign-up-in-background.8bba6b03.svg"
            alt=""
          />
        </div>
        <div className="text--funda">
          <p className="hashtag--funda">#darkhorsestocks</p>
          <h1>Fundalysis</h1>
          <p className="products--desc">
            Fundalitics is a mutual Fund Database. Data is fed into Fundalitics
            available from various different Public sources about Mutual Fund
            Schemes, Holdings, Sectorial Holdings etc. Further with this data
            various different kinds of reports are generated which is used in
            Research and Analysis.
            <br />
            <br />
            Currently Fundalitics covers more than 200 schemes spread across 21
            fund houses on a monthly basis. Reports of various types and also
            for each individual schemes are generated month on month basis. This
            reports generated are provided to the subscribers to carry their
            Individual analysis.
          </p>
          <a href="https://mf.darkhorsestocks.in/sign-in" className="btn btn-primary">
                  Go To Fundalysis
                </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
