import React from "react";
import "../sheets/backgroundImg.css"


function backgroundImage()
{
    return (
    <div id="background">
        <img className="backgroundMountain" 
        src={require("../images/redmountain.jpg")} alt="mountain"/>
        <p className="bigText"> Hi! I'm Sam.
            <br/> Welcome to my
            <br/>
            website
        </p>
    </div>
    );
}





export default backgroundImage