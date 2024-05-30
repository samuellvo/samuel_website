import React from 'react'
import '../sheets/NavStyle.css'

function NavButton( {text, link, style}: {text: string, link:string, style:any}) {
    return(
        <div className="NavButton">
            <a style={style} href={link}> {text} </a>
        </div>
    )
}

export default NavButton