import React, { forwardRef } from "react";


const HomepageTyping =
// documented from https://legacy.reactjs.org/docs/forwarding-refs.html
    forwardRef((props, ref) => (
    <span> &gt; console.log(sam.Status()) <br/> 
    &gt; <span ref={ref}></span> </span>))
export default  HomepageTyping;
