import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { useState, useEffect, useRef, forwardRef } from "react";

const ProjectPreview = forwardRef((props, ref) => {

    let textRef = useRef()

    const onEnter = ({currentTarget}) => {
        gsap.to(textRef.current, {opacity: 1, duration: 1, bottom: "4%", ease: "expo"})
        gsap.to(currentTarget, {scale: 1.05, ease: "slow", duration: 0.2, y: 20})
    }

    const onLeave = ({currentTarget}) => {
        gsap.to(textRef.current, {opacity: 0, duration: 1, bottom: "-4%", ease: "expo"})
        gsap.to(currentTarget, {scale: 1, ease: "circ", duration: 0.2, y: 0})
    }

    return (
        <div onClick={props.onClick} ref={ref} onMouseEnter={onEnter} onMouseLeave={onLeave} className={"opacity-0 border-slate-50 w-[380px] flex items-center justify-center border-0 rounded-xl aspect-square drop-shadow-md hover:border-cyan-500 " + props.bgColor}>
            <figure className={
                "flex flex-col justify-center items-center space-y-4 w-full"}>
                <img src={props.image} className="w-3/4 rounded-lg" alt="souka"/>
                <figcaption ref={textRef} className="absolute opacity-0 -bottom-10 text-slate-50 font-bold text-2xl">{props.text}</figcaption>
            </figure>
        </div>
    )
});

export default ProjectPreview
