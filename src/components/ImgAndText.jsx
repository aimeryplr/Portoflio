import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useLayoutEffect, useRef} from "react";

function ImgAndText(props) {
    let imgRef = useRef()
    let textRef = useRef()
    let sectionRef = useRef()

    gsap.registerPlugin(ScrollTrigger)
    
    useLayoutEffect(() => {
        gsap.from(imgRef.current, {scrollTrigger: {
            trigger: textRef.current, 
            start: "center bottom",
            markers: false,
            end: "top top",
            toggleActions: "play reverse restart reverse"
        },
        x: props.isImageLeft ? "-40%" : "40%",  opacity: 0, duration: 0.5, ease: "circ"});
        props.setPos(sectionRef.current.getBoundingClientRect().top - (window.innerHeight - sectionRef.current.getBoundingClientRect().height + 80) / 2)
    }, []); 

    return (
        <section ref={sectionRef} className={"relative" + ` ${props.style}`}>
            <h1 className="text-center text-slate-[#2C3233] font-bold text-5xl absolute left-1/2 top-10 transform -translate-x-1/2">{props.name}</h1>
            <span className="px-[4%] h-[70vh] flex justify-around gap-7 items-center overflow-x-hidden">
                {props.isImageLeft ? 
                <><img src={props.image} ref={imgRef} className="rounded-lg border-4 border-slate-50 drop-shadow-xl w-1/3" alt="placeholder"/>
                <h2 ref={textRef} className="text-slate-[#2C3233] text-4xl font-semibold text-justify w-2/3">{props.text}</h2></>
                :
                <><h2 ref={textRef} className="text-slate-[#2C3233] text-4xl font-semibold text-justify w-2/3">{props.text}</h2>
                <img src={props.image} ref={imgRef} className="rounded-lg border-4 border-slate-50 w-1/3 drop-shadow-xl" alt="placeholder"/></>}
            </span>
        </section>
    )
}

export default ImgAndText