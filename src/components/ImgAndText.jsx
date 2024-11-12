import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useLayoutEffect, useRef} from "react";

function textWithBullet(text) {
    let newText = "•  "
    for (let i = 0; i < text.length; i++) {
        newText += text[i]
        if (text[i] === "." && i !== text.length - 1) newText += "\n• "
    }
    return <pre>{newText}</pre>
}

function ImgAndText(props) {
    let imgRef = useRef()
    let textRef = useRef()

    let imgDiv = <div ref={imgRef} className="flex items-center rounded-lg my-2 border-4 border-slate-50 sm:drop-shadow-[0_0_25px_rgba(6,182,212,0.3)] drop-shadow-[0_0_5px_rgba(6,182,212,0.2)] sm:max-h-screen max-h-44 h-[60%] w-[30em] overflow-clip">
        <img src={props.image} className="h-full w-full object-cover"/>
    </div>
    let textElement = <h2 ref={textRef} className={"text-gray sm:text-2xl text:sm text-justify sm:w-[60%] "}>{textWithBullet(props.text)}</h2>

    gsap.registerPlugin(ScrollTrigger)

    useLayoutEffect(() => {
        gsap.from(imgRef.current, {
            scrollTrigger: {
            trigger: imgRef.current,
            start: "center bottom",
            markers: false,
            end: "top top",
            toggleActions: "play reverse restart reverse"
        },
        x: props.isImageLeft ? "-40%" : "40%",  opacity: 0, duration: 0.5, ease: "circ"});
        // props.setPos(sectionRef.current.getBoundingClientRect().top - (window.innerHeight - sectionRef.current.getBoundingClientRect().height + 80) / 2)
    }, []); 

    return (
        <span className="px-[8%] h-5/6 gap-7 flex justify-center items-center overflow-x-hidden flex-wrap">
            {
            props.isImageLeft ?
            <>{imgDiv}
            {textElement}</>
            :
            <>{textElement}
            {imgDiv}</>}
        </span>
    )
}

export default ImgAndText
