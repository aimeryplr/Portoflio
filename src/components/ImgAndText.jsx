import { gsap } from "gsap";
import {useLayoutEffect, useRef} from "react";

function ImgAndText(props) {
    let sectionRef = useRef()

    useLayoutEffect(() => {
        gsap.from(sectionRef.current, {opacity: 0, duration: 3});
    }, []);

    return (
        <section className={"border-y-4 border-slate-50" + ` ${props.style}`}>
            <span ref={sectionRef} className="py-[15vh] px-[2%] h-[70vh] flex justify-around gap-7 items-center">
                <img src={props.image} className="rounded-lg" alt="placeholder"/>
                <h2 className="text-slate-50 text-5xl font-bold text-justify">{props.text}</h2>
            </span>
        </section>
    )
}

export default ImgAndText