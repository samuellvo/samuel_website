import React from "react";
import SocialsButton from "./SocialsButton.tsx";
import "../../sheets/Socials.css"

function Socials(){
    return(
        <div id="ContactMe" className="socials">
            <SocialsButton text="@samuellvo" 
            link="https://www.instagram.com/samuellvo/"
            style={{zIndex: 103, position: 'relative'}} img="instagram.png"></SocialsButton>
            <SocialsButton text="@toothx" 
            link="https://www.discord.com"
            style={{zIndex: 102, position: 'relative'}} img="discordlogo.png"></SocialsButton>
            <SocialsButton text="@samuellvo" 
            link="mailto:masualov@gmail.com"
            style={{zIndex: 101, position: 'relative'}} img="iconEmail.png"></SocialsButton>
        </div>
    )
}

export default Socials;