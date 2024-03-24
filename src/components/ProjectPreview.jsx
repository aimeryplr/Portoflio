import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { useState, useEffect, useRef, forwardRef } from "react";

const ProjectPreview = forwardRef((props, ref) => {

    let textRef = useRef()
    let wave = useRef()
    let wave1_1 = useRef()
    let wave1_2 = useRef()
    let wave2_1 = useRef()
    let wave2_2 = useRef()

    const onEnter = ({currentTarget}) => {
        gsap.to(textRef.current, {opacity: 1, duration: 0.5, bottom: "4%", ease: "expo"})
        gsap.to(currentTarget, {scale: 1.05, ease: "slow", duration: 0.2, y: 20})
        gsap.to(wave.current, {duration: 1, ease: "circ", y: "40%"})
        gsap.to(wave1_1.current, {duration: 10, ease: "none", x: "100%", repeat: -1})
        gsap.to(wave1_2.current, {duration: 5, ease: "none", x: "100%"})
        gsap.to(wave2_1.current, {duration: 16, ease: "none", x: "100%", repeat: -1})
        gsap.to(wave2_2.current, {duration: 8, ease: "none", x: "100%"})

        gsap.to(wave1_2.current, {duration: 0, ease: "none", x: "-100%", delay: 5})
        gsap.to(wave2_2.current, {duration: 0, ease: "none", x: "-100%", delay: 8})
        gsap.to(wave1_2.current, {duration: 10, ease: "none", x: "100%", delay: 5, repeat: -1})
        gsap.to(wave2_2.current, {duration: 16, ease: "none", x: "100%", delay: 8, repeat: -1})
    }

    const onLeave = ({currentTarget}) => {
        gsap.to(textRef.current, {opacity: 0, duration: 0.5, bottom: "-4%", ease: "expo"})
        gsap.to(currentTarget, {scale: 1, ease: "circ", duration: 0.2, y: 0})
        gsap.to(wave.current, {duration: 1, ease: "expo", y: "100%"})

        
    }

    return (
        <div onClick={props.onClick} ref={ref} onMouseEnter={onEnter} onMouseLeave={onLeave}
             className={"opacity-0 overflow-clip border-slate-50 w-[350px] h-[467px] relative flex flex-col items-center border-0 rounded-xl aspect-square drop-shadow-md " + props.bgColor}>
            <figure className={
                "my-[12.5%] flex flex-col justify-center items-center space-y-4 w-full"}>
                <img src={props.icon} className="w-3/4 rounded-lg" alt="souka"/>
                <figcaption ref={textRef}
                            className="absolute opacity-0 -bottom-10 text-slate-50 font-bold text-2xl">{props.text}</figcaption>
            </figure>
            <div className="bottom-0 h-fit w-full absolute translate-y-full" ref={wave}>
                <svg viewBox="0 0 120 100" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <g id="wave">
                        <path id="wave2" fill="white" opacity="0.7" ref={wave1_2}
                              d="M16 1.55193C9.5 -1.51035 4 0.875222 0 1.04189V100.552H120V0.989652C120 0.989652 116 1.05193 114 1.48965C112 1.92737 109.7 2.65194 108.5 3.05194C107 3.55194 99 6.05194 92 3.05194C85 0.0519383 78.5 0.0519243 75 1.55193C71.5 3.05194 68 4.55195 62.5 3.05194C57 1.55193 53 4.05194 52 4.48965C51 4.92737 48.3333 4.65632 46 3.98965C44.1946 3.47382 38.5 0.614211 35.5 1.55193C32.5 2.48965 22.5 4.61421 16 1.55193Z"
                        />
                        <path id="wave2" className="-translate-x-full" fill="white" opacity="0.7" ref={wave1_1}
                              d="M16 1.55193C9.5 -1.51035 4 0.875222 0 1.04189V100.552H120V0.989652C120 0.989652 116 1.05193 114 1.48965C112 1.92737 109.7 2.65194 108.5 3.05194C107 3.55194 99 6.05194 92 3.05194C85 0.0519383 78.5 0.0519243 75 1.55193C71.5 3.05194 68 4.55195 62.5 3.05194C57 1.55193 53 4.05194 52 4.48965C51 4.92737 48.3333 4.65632 46 3.98965C44.1946 3.47382 38.5 0.614211 35.5 1.55193C32.5 2.48965 22.5 4.61421 16 1.55193Z"
                        />
                        <path id="wave1" fill="white" ref={wave2_2}
                              d="M112 3.52348C113.2 3.11722 117.5 2 120 2V100H0V2C0 2 3.5 1.99743 8.5 2.50526C13.5 3.0131 17.5 4.01591 22.5 5.03157C27.5 6.04722 34 3.52348 36.5 3.01565C39 2.50783 43 4.53913 50.5 5.04695C58 5.55478 66 2 68 2C70 2 73.5 2 74.5 3.01565C75.3 3.82817 79.5 4.36985 81.5 4.53913C88.5 4.53913 88.5 2.50783 93.5 2.50783C98.5 2.50783 100 3.52348 103 4.0313C106 4.53913 110.5 4.0313 112 3.52348Z"
                        />
                        <path id="wave1" className="-translate-x-full" fill="white" ref={wave2_1}
                              d="M112 3.52348C113.2 3.11722 117.5 2 120 2V100H0V2C0 2 3.5 1.99743 8.5 2.50526C13.5 3.0131 17.5 4.01591 22.5 5.03157C27.5 6.04722 34 3.52348 36.5 3.01565C39 2.50783 43 4.53913 50.5 5.04695C58 5.55478 66 2 68 2C70 2 73.5 2 74.5 3.01565C75.3 3.82817 79.5 4.36985 81.5 4.53913C88.5 4.53913 88.5 2.50783 93.5 2.50783C98.5 2.50783 100 3.52348 103 4.0313C106 4.53913 110.5 4.0313 112 3.52348Z"
                        />
                    </g>
                </svg>
                <p className="absolute z-10 text-center w-full top-1/4 text-[#2C3233] font-bold text-3xl underline decoration-cyan-400">{props.name}</p>
            </div>
        </div>
    )
});

export default ProjectPreview
