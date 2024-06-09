import React, { forwardRef } from "react";
import "../sheets/AboutMe.css";


const HomepageTyping =
// documented from https://legacy.reactjs.org/docs/forwarding-refs.html
    forwardRef((props, ref) => (
    <span className ="bigText"> <span ref={ref}></span> </span>))
export default  HomepageTyping;
