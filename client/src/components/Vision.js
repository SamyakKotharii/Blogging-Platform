import React from "react";
export default function Vision(){
    return(
        <div>
            <nav className="about--us">
            <div className="container">
                <img className="about--logo" src={require("../images/darkhorse.png")} alt="" width="200px"/>
                <div className="centered">OUR VISION</div>
            </div>
            </nav>
            <div className="container--vision">
                <div >
                    <img className="image--vision" src={require("../images/vision.jpg")} alt=""/>
                </div>
            <div className="text--vision">
                <p>We want to reach a wider audience and provide them with access to the data therebyhelping them understand and analyze financial reports helping them make their own investment decisions from what they have learnt and the data available making them advisory independent.<br/><br/>
We also want to harness the computational power and foster in to Artificial Intelligence by mapping out data with the live market analysis which would further enhanced to create automatic trading algorithms</p>
            </div>
            </div>
        </div>
    )
}