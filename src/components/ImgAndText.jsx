import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useLayoutEffect, useRef} from "react";

function ImgAndText(props) {
    let imgRef = useRef()
    let textRef = useRef()

    let imgDiv = <div ref={imgRef} className="flex items-center rounded-lg border-4 border-slate-50 drop-shadow-xl h-[60%] w-[30em] overflow-clip">
        <img src={props.image} className="h-full w-full object-cover"/>
    </div>
    let text = <h2 ref={textRef} className={"text-[#2C3233] text-4xl text-justify w-[60%] "}>{props.text}</h2>

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
            {text}</>
            :
            <>{text}
            {imgDiv}</>}
        </span>
    )
}

export default ImgAndText
