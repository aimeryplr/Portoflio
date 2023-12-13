import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { useState, useEffect, useRef, forwardRef } from "react";

const ProjectPreview = forwardRef((props, ref) => {

    let hoverRef = useRef()
    const onEnter = ({currentTarget}) => {
        console.log(currentTarget)
        gsap.to(hoverRef.current, {opacity: 1, duration: 1, bottom: "5%", ease: "expo"})
        gsap.to(currentTarget, {scale: 1.05, ease: "slow", duration: 0.2, y: 15})
    }

    const onLeave = ({currentTarget}) => {
        gsap.to(hoverRef.current, {opacity: 0, duration: 1, bottom: 0, ease: "expo"})
        gsap.to(currentTarget, {scale: 1, ease: "circ", duration: 0.2, y: -15})
    }

    return (
        <div ref={ref} onMouseEnter={onEnter} onMouseLeave={onLeave} className={"opacity-0 border-slate-50 flex items-center border-2 rounded-xl aspect-square drop-shadow-md hover:border-cyan-500 " + props.bgColor}>
            <figure className={
                "flex flex-col justify-center items-center space-y-4 "}>
                <img src={props.image} className="w-5/6 rounded-lg" alt="souka"/>
                <figcaption ref={hoverRef} className="absolute opacity-0 bottom-0 text-slate-50 font-bold text-xl">{props.text}</figcaption>
            </figure>
        </div>
    )
});

export default ProjectPreview
