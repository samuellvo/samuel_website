import React from "react";
import "../../sheets/Socials.css"

function SocialsButton({text, style, img, link}:
    {text:string, style:string, img:string,link:string}) 

{
    return(
        <div style={style} className="socialsAnimation">
            <a href={link} target="_blank" rel="noreferrer">
                <img src={require("../../images/" + img)} alt="social media logo"/>
                <br/>
                {text}
            </a>
        </div>
    )
}

export default SocialsButton;