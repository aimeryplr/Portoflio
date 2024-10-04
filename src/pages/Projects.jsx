import React, { lazy } from "react";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { useState, useRef } from "react";
import ProjectPreview from "../components/ProjectPreview";
import OceanRay from "../components/OceanRay";
import ImgAndText from "../components/ImgAndText.jsx";
import HorizontalBar from "../components/HorizontalBar.jsx";
import projects from "../assets/projects/projects.json";
import Dot from "../components/Dot.jsx";
import Title from "../components/Title.jsx";
import lien from "../assets/projects/lien.png"

import {imageElydia, imagePlanetExplorer, imageMartialWorld, planetExplorer, martialWorld, elydia} from "/src/assets/projects/images.js"
import {div} from "three/nodes";

function Link(props) {
    return (
        <a href={props.lien}>
            <img src={lien} className="absolute right-[10%] w-10"/>
        </a>
    )
}

function Projects() {
    const projectRef = useRef([]);
    const rayRef = useRef([]);
    function scrollToPos(name) {
        var pos = document.getElementById(name).offsetTop - (window.innerHeight - document.getElementById(name).getBoundingClientRect().height + 80) / 2;
        window.scroll({top: pos, left: 0, behavior: "smooth"})
    }

    const [images, setImages] = useState([imageElydia, imageMartialWorld, imagePlanetExplorer]);
    const [icons, setIcons] = useState([elydia, martialWorld, planetExplorer])

    const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);

    useLayoutEffect(() => {
        console.log(new URL("/src/assets/projects/elidia.png", import.meta.url).href);
        let tl = gsap.timeline()
        tl.from(rayRef.current, {opacity: 0, duration: 0.5});
        tl.to(projectRef.current, {opacity: 1, duration: 1, stagger: 0.25}, 0.25);
    }, []);

    function OceansRay() {
        return (
            <section className="flex justify-center align-middle absolute w-full" style={{height: "98vh"}}>
                <OceanRay ref={e => (rayRef.current[0] = e)} rotate={"17"} left={"7%"} scale={"Y(2.25)"} opacity={55}/>
                <OceanRay ref={e => (rayRef.current[1] = e)} rotate={"13"} left={"25%"} scale={"(2.25)"} opacity={75}/>
                <OceanRay ref={e => (rayRef.current[2] = e)} rotate={"8"} left={"37%"} scale={"Y(1.9)"} opacity={45}/>
                <OceanRay ref={e => (rayRef.current[3] = e)} rotate={"3"} left={"45%"} scale={"(1.85)"} opacity={80}/>
                <OceanRay ref={e => (rayRef.current[4] = e)} rotate={"355"} left={"60%"} scale={"Y(2.3)"} opacity={30}/>
                <OceanRay ref={e => (rayRef.current[5] = e)} rotate={"350"} left={"73%"} scale={"Y(2)"} opacity={45}/>
                <OceanRay ref={e => (rayRef.current[6] = e)} rotate={"330"} left={"95%"} scale={"(2)"} opacity={75}/>
            </section>
        )
    }

    return (
        <>
            {!isMobileDevice ? (
                <>
                <OceansRay/>
                <Title title="Mes Projets"/>
                <div className="flex min-h-[88vh] gap-6 justify-center items-center mx-[8%] mb-6">
                    {Object.keys(projects.projects).map((key, index) => {
                        let project = projects.projects[key];
                        return (
                            <ProjectPreview
                                key={index}
                                ref={e => (projectRef.current[index] = e)}
                                onClick={() => scrollToPos(project.name)}
                                icon={icons[index]}
                                name={project.name}
                                competences={project.competences}
                            />
                        );
                    })}
                </div>
                </>
            ): (
                <div className="h-[8vh]"></div>
            )}
            {Object.keys(projects.projects).map((key, index) => {
                let project = projects.projects[key];
                return (
                    <section id={project.name}
                             className={"relative justify-between flex flex-col py-10 sm:h-[60vh] sm:min-h-0 min-h-[90vh] bg-slate-100"}>
                        <HorizontalBar color="bg-cyan-400"/>
                        {(project.hasOwnProperty("lien")) && <Link lien={project.lien} />}
                        <h1 className="text-center text-gray font-bold text-5xl">{project.name}</h1>
                        <ImgAndText
                            key={index}
                            image={images[index]}
                            text={project.desc}
                            isImageLeft={isMobileDevice ? true : index % 2 === 0}
                        />
                        <div className="flex flex-wrap gap-3 items-center justify-center">
                        {projects.projects[key].competences.map((competence, index) => {
                            return (
                                <>
                                    <p className="text-gray font-medium sm:text-2xl text-lg">{competence}</p>
                                    {index < projects.projects[key].competences.length - 1 &&
                                        <Dot color="bg-cyan-400"/>}
                                </>
                            );
                        })}
                    </div>
                </section>
            );
        })}
        </>
    )
}

export default Projects
