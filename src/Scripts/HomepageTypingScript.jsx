import {useEffect} from "react";
import Typed from "typed.js";

export default function HomepageTyping(element1) {
    useEffect(() => 
    {
        const typed = new Typed(element1.current, {
            strings: ['Coding . . .', 'Studying . . .', 'Eating . . .'],
            typeSpeed: 70,
            backSpeed: 50,
            loop: true
        })

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
    }); 
}