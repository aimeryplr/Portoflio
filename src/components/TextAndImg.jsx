import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useLayoutEffect, useRef} from "react";

function ImgAndText(props) {
    let imgRef = useRef()
    let textRef = useRef()
    let sectionRef = useRef()

    gsap.registerPlugin(ScrollTrigger)
    
    useLayoutEffect(() => {
        gsap.from(imgRef.current, {scrollTrigger: {trigger: textRef.current, start: "center bottom"}, x: "80%",  opacity: 0, duration: 0.5, ease: "circ"});
        props.setPos(sectionRef.current.getBoundingClientRect().top)
    }, []);

    return (
        <section ref={sectionRef} className={"border-y-4 border-slate-50" + ` ${props.style}`}>
            <span className="py-[15vh] px-[2%] h-[70vh] flex justify-around gap-7 items-center overflow-y-hidden">
                <h2 ref={textRef} className="text-slate-50 text-5xl font-bold text-justify">{props.text}</h2>
                <img src={props.image} ref={imgRef} className="rounded-lg" alt="placeholder"/>
            </span>
        </section>
    )
}

export default ImgAndText