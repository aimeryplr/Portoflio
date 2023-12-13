import MinecraftServer from "../assets/minecraft-server.png"
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { useState, useEffect, useRef, forwardRef } from "react";
import ProjectPreview from "../components/ProjectPreview";


function Projects() {

    const projectRef = useRef([]);

    useLayoutEffect(() => {
        gsap.to(projectRef.current, {opacity: 1, duration: 1, stagger: 0.25});
    }, []);

    const minecraftServerText = "Serveur Minecraft Mini-Jeux"

    return (
        <>
          <section className="flex justify-center align-middle relative" style={{height: window.innerHeight - 80}}>
            {/*3 Projects*/}
            <div className="flex justify-between items-center mx-32">
                <ProjectPreview ref={e => (projectRef.current[0] = e)} image={MinecraftServer} text={minecraftServerText} bgColor="bg-cyan-400" />
                <ProjectPreview ref={e => (projectRef.current[2] = e)} image={MinecraftServer} text={minecraftServerText} bgColor="bg-slate-400" />
                <ProjectPreview ref={e => (projectRef.current[1] = e)} image={MinecraftServer} text={minecraftServerText} bgColor="bg-cyan-400" />
            </div>
         </section>
        </>
  )
}

export default Projects
