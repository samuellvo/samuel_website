import React from "react";
import { useRef} from "react";
import ShowAboutMe from "../Scripts/AboutMe.jsx";
import "../sheets/AboutMe.css"
import HomepageTyping from "./HomepageTyping.tsx";
import HomepageTypingScript from "../Scripts/HomepageTypingScript.jsx";

function AboutMe() {
    const aboutMeTopRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const aboutMeRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const typingRef = useRef();
    ShowAboutMe(aboutMeTopRef, aboutMeRef)
    HomepageTypingScript(typingRef)
    // above works similar to .getElementById("ID") but is now an arg
    return (
        <>
        <div id ="aboutMeTop" ref={aboutMeTopRef}>
            <HomepageTyping ref={typingRef}/>
        </div>
        <div id="aboutMe">
        <div className="aboutMeContainer" ref={aboutMeRef}>
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