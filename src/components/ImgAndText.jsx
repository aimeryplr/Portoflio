import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'
import {useLayoutEffect, useRef} from "react";

function ImgAndText(props) {
    let imgRef = useRef()
    let textRef = useRef()

    gsap.registerPlugin(ScrollTrigger)
    
    useLayoutEffect(() => {
        gsap.from(imgRef.current, {scrollTrigger: {trigger: textRef.current, start: "center bottom"}, x: "-80%",  opacity: 0, duration: 0.5, ease: "circ"});
        const ourText = SplitType.create(textRef, { types: 'chars' })
        console.log(ourText.chars)
    }, []);

    return (
        <section className={"border-y-4 border-slate-50" + ` ${props.style}`}>
            <span className="py-[15vh] px-[2%] h-[70vh] flex justify-around gap-7 items-center overflow-y-hidden">
                <img src={props.image} ref={imgRef} className="rounded-lg" alt="placeholder"/>
                <h2 ref={textRef} className="text-slate-50 text-5xl font-bold text-justify">{props.text}</h2>
            </span>
        </section>
    )
}

export default ImgAndText
