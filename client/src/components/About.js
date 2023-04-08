import React from "react";
export default function About(){
    return(
        <div>
            <nav className="about--us">
            <div className="container">
                <img className="about--logo" src={require("../images/darkhorse.png")} alt="" width="200px"/>
                <div className="centered">ABOUT US</div>
            </div>
            </nav>
            <p className="intro">Darkhorsestocks in educational service provided by us which includes presenting one company idea along with relevant/introductory information about the company which is filtered from the large pool of data based on the various suitable parameters indicating fundamental stability and consistent growth opportunities . This should in no way be taken as an Investment advice. It is neither a recommendation/advisory service nor a research service.
</p>
        </div>
    )
}