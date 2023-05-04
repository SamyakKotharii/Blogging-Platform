import React,{useContext} from "react";
// import {useNavigate} from "react-router-dom";
import Footer from "../components/Footer";
import { UserContext } from "../App";

export default function Products() {
  const { state, dispatch } = useContext(UserContext);
  console.log(dispatch);
  const Pro = ()=>{
    if(state){
      return(
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
          <a
            href="https://mf.darkhorsestocks.in/sign-in"
            className="btn btn-primary"
          >
            Go To Fundalysis
          </a>
        </div>
      </div>
      <div className="container--box">
        <div className="item--col--1">
          <div className="item--1">
            <h3>Monthly Scheme Report</h3>
          </div>
          <div className="item--1">
            <h3>Sectorial Analysis</h3>
          </div>
        </div>
        <div className="item--mid ">
          <h3>Economic Analysis</h3>
        </div>
        <div className="item--col--2">
          <div className="item--1">
            <h3>Company Analysis</h3>
          </div>
          <div className="item--1">
            <h3>Fund Manager Analysis</h3>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="container--funda">
        <div>
          <img
            className="image--dashboard"
            src="https://darkhorsestocks.in/img/db.png"
            alt=""
          />
        </div>
        <div className="text--funda">
          <p className="hashtag--funda">#darkhorsestocks</p>
          <h1>Dashboard</h1>
          <p className="products--desc">
            Dashboard is unique analytical tool developed only for
            darkhorsestocks selected users which allows them to track all the
            Darkhorsestocks ideas on a real time basis . This help them to take
            quick and informed decisions about any stock movements in the market
            relating specifically to darkhorsestock ideas. Data is sourced from
            all the stocks that are listed on NSE . For some of the stocks which
            are listed only on BSE their data is sourced from BSE.
          </p>
          <a
            href="https://mf.darkhorsestocks.in/sign-in"
            className="btn btn-primary"
          >
            Go To Dashboard
          </a>
        </div>
      </div>
      <div className="container--box">
        <div className="item--col--1">
          <div className="item--2">
            <h4>List of all the stocks suggested in past 2 years along  with its recommended price</h4>
          </div>
          <div className="item--2">
            <h4>Daily Top 5 gainers and Losers</h4>
          </div>
          <div className="item--2">
            <h4>Pie Chart showing total number of stocks suggested</h4>
          </div>
        </div>
        
        <div className="item--col--2">
          <div className="item--2">
            <h4>Bar Chart showing stocks giving returns in range of 30% to above 50%.</h4>
          </div>
          <div className="item--2">
            <h4>Pie Chart showing total number of stocks suggested</h4>
          </div>
          <div className="item--2 ">
          <h4>All time top 5 gainers and losers.</h4>
        </div>
        </div>
      </div>
      <Footer />
        </>
      )
    }else{
      return(
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
          <a
            href="https://mf.darkhorsestocks.in/sign-in"
            className="btn btn-primary"
          >
            Go To Fundalysis
          </a>
        </div>
      </div>
      <div className="container--box">
        <div className="item--col--1">
          <div className="item--1">
            <h3>Monthly Scheme Report</h3>
          </div>
          <div className="item--1">
            <h3>Sectorial Analysis</h3>
          </div>
        </div>
        <div className="item--mid ">
          <h3>Economic Analysis</h3>
        </div>
        <div className="item--col--2">
          <div className="item--1">
            <h3>Company Analysis</h3>
          </div>
          <div className="item--1">
            <h3>Fund Manager Analysis</h3>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="container--funda">
        <div>
          <img
            className="image--dashboard"
            src="https://darkhorsestocks.in/img/db.png"
            alt=""
          />
        </div>
        <div className="text--funda">
          <p className="hashtag--funda">#darkhorsestocks</p>
          <h1>Dashboard</h1>
          <p className="products--desc">
            Dashboard is unique analytical tool developed only for
            darkhorsestocks selected users which allows them to track all the
            Darkhorsestocks ideas on a real time basis . This help them to take
            quick and informed decisions about any stock movements in the market
            relating specifically to darkhorsestock ideas. Data is sourced from
            all the stocks that are listed on NSE . For some of the stocks which
            are listed only on BSE their data is sourced from BSE.
          </p>
          <a
            href="https://mf.darkhorsestocks.in/sign-in"
            className="btn btn-primary"
          >
            Go To Dashboard
          </a>
        </div>
      </div>
      <div className="container--box">
        <div className="item--col--1">
          <div className="item--2">
            <h4>List of all the stocks suggested in past 2 years along  with its recommended price</h4>
          </div>
          <div className="item--2">
            <h4>Daily Top 5 gainers and Losers</h4>
          </div>
          <div className="item--2">
            <h4>Pie Chart showing total number of stocks suggested</h4>
          </div>
        </div>
        
        <div className="item--col--2">
          <div className="item--2">
            <h4>Bar Chart showing stocks giving returns in range of 30% to above 50%.</h4>
          </div>
          <div className="item--2">
            <h4>Pie Chart showing total number of stocks suggested</h4>
          </div>
          <div className="item--2 ">
          <h4>All time top 5 gainers and losers.</h4>
        </div>
        </div>
      </div>
        </>
      )
    }
  }
  // const navigate = useNavigate()
  // const callAboutPage = async()=>{
  //   try{
  //     const res = await fetch("/Products",{
  //       method:"GET",
  //       headers:{
  //         Accept:"application/json",
  //         "Content-type":"application/json"
  //       },
  //       credentials:"include"
  //     });
  //     const data = await res.json();
  //     console.log(data)
  //     if(!res.status===200){
  //       const error  = new Error(res.error);
  //       throw error
  //     }
  //   }catch(e){
  //     console.log(e)
  //     navigate("/")
  //   }
  // }

  // useEffect(() => {
  //   callAboutPage();
  // }, );
  return (
    <>
      <Pro/>
    </>
  );
} 
