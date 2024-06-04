import React from "react";
import "../../sheets/LandingMenu.css"
import LandingMenuButton from "./LandingMenuButton.tsx";

function LandingMenu() {
    return(
        <div className="landingMenu">
            <LandingMenuButton img="bowloframen.png" text="//academics" link="#"></LandingMenuButton>
            <LandingMenuButton img="bowloframen2.png" text="//me" link="#"></LandingMenuButton>
            <LandingMenuButton img="bowloframen4.png" text="//my work" link="#"></LandingMenuButton>
        </div>
    )
}

export default LandingMenu;