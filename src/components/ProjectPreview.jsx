import { gsap } from "gsap";
import React, { useLayoutEffect } from "react";
import { useState, useEffect, useRef, forwardRef } from "react";
import Dot from "./Dot.jsx";

const ProjectPreview = forwardRef((props, ref) => {

    let textRef = useRef();
    let imageRef = useRef();

    let wave = useRef()
    let wave1 = useRef()
    let wave2 = useRef()

    let waveTimeLine1 = gsap.timeline({repeat: -1, paused: true})
    let waveTimeLine2 = gsap.timeline({repeat: -1, paused: true})

    useLayoutEffect(() => {
        waveTimeLine1.to(wave1.current, {duration: 5, ease: "none", x: "50%"})
        waveTimeLine2.to(wave2.current, {duration: 8, ease: "none", x: "50%"})
    }, [])

    const onEnter = ({currentTarget}) => {
        gsap.to(textRef.current, {opacity: 1, duration: 0.5, bottom: "4%", ease: "expo"})
        gsap.to(currentTarget, {scale: 1.05, ease: "slow", duration: 0.2, y: 20})
        gsap.to(wave.current, {duration: 0.5, ease: "circ.out", y: "30%"})

        waveTimeLine1.play()
        waveTimeLine2.play()

        imageRef.current.style.filter = "brightness(0.5)"
        console.log("enter")
    }

    const onLeave = ({currentTarget}) => {
        gsap.to(textRef.current, {opacity: 0, duration: 0.5, bottom: "-4%", ease: "expo"})
        gsap.to(currentTarget, {scale: 1, ease: "circ", duration: 0.2, y: 0})
        gsap.to(wave.current, {duration: 0.5, ease: "circ.out", y: "60%"})

        waveTimeLine1.paused(true)
        waveTimeLine2.paused(true)

        imageRef.current.style.filter = "brightness(1)"
    }

    return (
        <div onClick={props.onClick} ref={ref} onMouseEnter={onEnter} onMouseLeave={onLeave}
             className={"overflow-clip w-[350px] h-[350px] relative flex flex-col items-center border-0 rounded-xl aspect-square drop-shadow-md cursor-pointer bg-slate-100"}>
            <figure className={
                "my-[12.5%] flex flex-col justify-center items-center space-y-4 w-full"}>
                <img src={props.icon} ref={imageRef} className="w-3/4 rounded-lg" alt="souka"/>
                <figcaption ref={textRef}
                            className="absolute opacity-0 -bottom-10 text-slate-50 font-bold text-2xl">{props.text}</figcaption>
            </figure>
            <div className="bottom-0 h-fit w-full absolute translate-y-full" ref={wave}>
                <svg width="120" height="180" viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <g>
                        <g ref={wave1}>
                            <path
                                d="M16 79.5519C9.5 76.4897 4 78.8752 0 79.0419V178.552H120V78.9897C120 78.9897 116 79.0519 114 79.4897C112 79.9274 109.7 80.6519 108.5 81.0519C107 81.5519 99 84.0519 92 81.0519C85 78.0519 78.5 78.0519 75 79.5519C71.5 81.0519 68 82.5519 62.5 81.0519C57 79.5519 53 82.0519 52 82.4897C51 82.9274 48.3333 82.6563 46 81.9897C44.1946 81.4738 38.5 78.6142 35.5 79.5519C32.5 80.4897 22.5 82.6142 16 79.5519Z"
                                fill="#22d3ee" opacity="0.72"/>
                            <path
                                d="M-104 79.5519C-110.5 76.4897 -116 78.8752 -120 79.0419V178.552H0V78.9897C0 78.9897 -4 79.0519 -6 79.4897C-8 79.9274 -10.3 80.6519 -11.5 81.0519C-13 81.5519 -21 84.0519 -28 81.0519C-35 78.0519 -41.5 78.0519 -45 79.5519C-48.5 81.0519 -52 82.5519 -57.5 81.0519C-63 79.5519 -67 82.0519 -68 82.4897C-69 82.9274 -71.6667 82.6563 -74 81.9897C-75.8054 81.4738 -81.5 78.6142 -84.5 79.5519C-87.5 80.4897 -97.5 82.6142 -104 79.5519Z"
                                fill="#22d3ee" opacity="0.72"/>
                        </g>
                        <g ref={wave2}>
                            <path
                                d="M112 83.5235C113.2 83.1172 117.5 82 120 82V180H0V82C0 82 3.5 81.9974 8.5 82.5053C13.5 83.0131 17.5 84.0159 22.5 85.0316C27.5 86.0472 34 83.5235 36.5 83.0157C39 82.5078 43 84.5391 50.5 85.047C58 85.5548 66 82 68 82C70 82 73.5 82 74.5 83.0157C75.3 83.8282 79.5 84.3699 81.5 84.5391C88.5 84.5391 88.5 82.5078 93.5 82.5078C98.5 82.5078 100 83.5235 103 84.0313C106 84.5391 110.5 84.0313 112 83.5235Z"
                                fill="#38bdf8" opacity="0.85"/>
                            <path
                                d="M-8 83.5235C-6.8 83.1172 -2.5 82 0 82V180H-120V82C-120 82 -116.5 81.9974 -111.5 82.5053C-106.5 83.0131 -102.5 84.0159 -97.5 85.0316C-92.5 86.0472 -86 83.5235 -83.5 83.0157C-81 82.5078 -77 84.5391 -69.5 85.047C-62 85.5548 -54 82 -52 82C-50 82 -46.5 82 -45.5 83.0157C-44.7 83.8282 -40.5 84.3699 -38.5 84.5391C-31.5 84.5391 -31.5 82.5078 -26.5 82.5078C-21.5 82.5078 -20 83.5235 -17 84.0313C-14 84.5391 -9.5 84.0313 -8 83.5235Z"
                                fill="#38bdf8" opacity="0.85"/>
                        </g>
                    </g>
                </svg>
                <p className="absolute z-10 text-center w-full top-[50%] text-slate-100 font-bold text-3xl">{props.name}</p>
                {/*<img className="absolute z-10 w-20 top-1/4 right-1/2 translate-x-1/2" src={downArrow}/>*/}
                <div
                    className="absolute z-10 top-[60%] flex justify-center items-center right-1/2 translate-x-1/2 gap-1">
                    {props.competences.slice(0, Math.min(3, props.competences.length)).map((competence, index) => {
                        return (
                            <>
                                <p className="text-slate-100 font-medium text-xl">{competence}</p>
                                {index < Math.min(2, props.competences.length - 1) &&
                                    <Dot color="bg-[#2C3233]"/>}
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
});

export default ProjectPreview
