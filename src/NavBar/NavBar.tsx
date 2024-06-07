import React from "react";
import '../sheets/NavStyle.css'
import NavButton from "./NavButton.tsx"
import Logo from "./Logo.tsx";

function NavBar() {
    return(
        <div className="NavBar">
            <Logo></Logo>
            <NavButton style={{zIndex: 97, position: 'relative'}} text="About Me" link="#aboutMeTop"></NavButton>
            <NavButton style={{zIndex: 98, position: 'relative'}} text="Resume" link="#"></NavButton>
            <NavButton style={{zIndex: 99, position: 'relative'}} text="Github" link="#"></NavButton>
        </div>
    )
}

export default NavBar