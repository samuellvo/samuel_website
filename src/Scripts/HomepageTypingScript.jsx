import {useEffect} from "react";
import Typed from "typed.js";

export default function HomepageTyping(element1) {
    useEffect(() => 
    {
        // documents: https://github.com/mattboldt/typed.js
        const typed = new Typed(element1.current, {
            strings: ["Hi! I'm Sam. <br/> Welcome to my <br/> website."],
            typeSpeed: 50,
            loop: false
        })

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
    }); 
}