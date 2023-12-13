import MinecraftServer from "../assets/minecraft-icon.png"
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { useState, useEffect, useRef, forwardRef } from "react";
import ProjectPreview from "../components/ProjectPreview";
import OceanRayImg from "../assets/OceanRay.png"
import OceanRay from "../components/OceanRay"
import RayImg from "../assets/OceanRay.png";


function Projects() {

    const projectRef = useRef([]);
    const rayRef = useRef([]);

    useLayoutEffect(() => {
        let tl = gsap.timeline()
        tl.from(rayRef.current, {opacity: 0, duration: 0.5});
        tl.to(projectRef.current, {opacity: 1, duration: 1, stagger: 0.25}, 0.25);
    }, []);

    const minecraftServerText = "Serveur Minecraft Mini-Jeux"

    return (
        <section className="flex justify-center align-middle relative" style={{height: "70vh"}}>
            <OceanRay ref={e => (rayRef.current[0] = e)} rotate={"13"} left={"25%"} scale={"(2.25)"} opacity={75}/>
            <OceanRay ref={e => (rayRef.current[1] = e)} rotate={"8"} left={"37%"} scale={"Y(1.9)"} opacity={45}/>
            <OceanRay ref={e => (rayRef.current[2] = e)} rotate={"3"} left={"45%"} scale={"(1.85)"} opacity={80}/>
            <OceanRay ref={e => (rayRef.current[3] = e)} rotate={"355"} left={"60%"} scale={"Y(2.3)"} opacity={30}/>
            <OceanRay ref={e => (rayRef.current[4] = e)} rotate={"350"} left={"73%"} scale={"Y(2)"} opacity={45}/>
            {/*3 Projects*/}
            <div className="flex justify-between items-center space-x-10 mx-[10%] w-full">
                <ProjectPreview ref={e => (projectRef.current[0] = e)} image={MinecraftServer}
                                text={minecraftServerText} bgColor="bg-cyan-400"/>
                <ProjectPreview ref={e => (projectRef.current[2] = e)} image={MinecraftServer}
                                text={minecraftServerText} bgColor="bg-slate-400"/>
                <ProjectPreview ref={e => (projectRef.current[1] = e)} image={MinecraftServer}
                                text={minecraftServerText} bgColor="bg-cyan-400"/>
            </div>
        </section>
    )
}

export default Projects
