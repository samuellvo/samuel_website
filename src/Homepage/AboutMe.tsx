import React from "react";
import "../sheets/AboutMe.css"

function AboutMe() {
    return (
        <>
        <div id ="aboutMeTop"> </div>
        <div id="aboutMe">
        <div id="aboutMeContainer">
           <img className="portrait" src={require("../images/IMG_8245.png")} alt="portrait"/>
           <div className = "aboutMeText">
               <h5 id="aboutMeHey"> About Me </h5>
               <h1 id="aboutMeHeader"> Let's get acquainted. </h1>
               <p id="biography"> <br/> 
               I'm a CS student, interested in the realms of quantum computing.
                 <br/> Excellent to meet you!
                                </p>
           </div>
        </div>
    </div>
    </>
    )
}

export default AboutMe