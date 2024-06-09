import React, {useRef} from "react";
import HomepageTyping from "./HomepageTyping.tsx";
import HomepageTypingScript from "../Scripts/HomepageTypingScript.jsx";
import "../sheets/backgroundImg.css"


export default function BackgroundImage()
{   const typingRef = useRef();
    HomepageTypingScript(typingRef)
    return (
    <div id="background">
        <img className="backgroundMountain" 
        src={require("../images/redmountain.jpg")} alt="mountain"/>
        <HomepageTyping ref={typingRef}/>
    </div>
    );
}