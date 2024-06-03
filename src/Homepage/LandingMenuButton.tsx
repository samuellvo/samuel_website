import React from "react";
import "../sheets/LandingMenu.css";

function LandingMenuButton({img, text, link}: {img:string, text:string, link:string}) {
    return (
        <div className="landingItem">
            <a href={link}>
                <img src={require("../images/" + img)} alt="landing menu container"/>
                <p className="CTIText"> {text} </p>
            </a>
        </div>
    )
}

export default LandingMenuButton;