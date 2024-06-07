import {useEffect} from "react"

export default function ShowAboutMe(element1, element2) { 
    useEffect(() => {
        window.addEventListener("scroll", () => {
            var triggerCount = 0
            if (document.scrollingElement.scrollTop > element1.current.offsetTop && triggerCount < 1)
            {
                element2.current.classList.add("visibleAboutMe")
                triggerCount++
            }
        })
    })
    }