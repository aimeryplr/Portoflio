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
            markers: true,
            end: "top top",
            toggleActions: "play reverse restart reverse"
        },
        x: props.isImageLeft ? "-80%" : "80%",  opacity: 0, duration: 0.5, ease: "circ"});
        props.setPos(sectionRef.current.getBoundingClientRect().top)
    }, []); 

    return (
        <section ref={sectionRef} className={"relative border-y-4 border-slate-50" + ` ${props.style}`}>
            <h1 className="text-center text-slate-50 font-bold text-5xl absolute left-1/2 top-10 transform -translate-x-1/2">{props.name}</h1>
            <span className="px-[2%] h-[70vh] flex justify-around gap-7 items-center overflow-y-hidden">
                {props.isImageLeft ? 
                <><img src={props.image} ref={imgRef} className="rounded-lg border-4 border-slate-50 w-5/6" alt="placeholder"/>
                <h2 ref={textRef} className="text-slate-50 text-4xl font-semibold text-justify w-full">{props.text}</h2></>
                :
                <><h2 ref={textRef} className="text-slate-50 text-4xl font-semibold text-justify w-full">{props.text}</h2>
                <img src={props.image} ref={imgRef} className="rounded-lg border-4 border-slate-50 w-5/6" alt="placeholder"/></>}
            </span>
        </section>
    )
}

export default ImgAndText