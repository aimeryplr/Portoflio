import backgroundOcean from '../assets/about/seaBackground.jpg'
import {gsap} from "gsap";
import {useLayoutEffect, useRef} from "react";
import {Link, NavLink} from "react-router-dom";


function Home() {

    let titleRef = useRef();
    let nameRef = useRef();

    useLayoutEffect(() => {
        gsap.from(titleRef.current, {x: "-25%", duration: 0.5})
        gsap.from(nameRef.current, {x: "-25%", duration: 0.5});
    }, []);


    return (
        <div className="h-[95vh] sm:h-[84vh] overflow-clip flex items-center">
            <img src={backgroundOcean} className="h-full w-full object-cover" alt=""/>
            <div className="flex flex-col justify-center gap-8 pl-[2%] p-8 absolute mb-8 sm:w-[43%] rounded-r-2xl">
                <div>
                    <h1 ref={titleRef}
                        className="sm:text-8xl text-3xl sm:text-left text-center font-bold font-dev text-slate-100">DÉVELOPPEUR
                        FULL STACK</h1>
                    <h1 ref={nameRef}
                        className="sm:text-5xl text-2xl sm:text-left text-center font-bold font-ocean text-slate-100">PELLERIN
                        Aimery</h1>
                </div>
                <p className="text-white text-2xl text-justify">Au fil des années, j'ai développé un véritable
                    intérêt
                    pour l'exploration de nouveaux langages de programmation et l'utilisation d'applications innovantes,
                    stimulant ainsi ma créativité et nourrissant ma curiosité. Actuellement, je poursuis l'apprentissage
                    de ces compétences à l'IUT 2 de Grenoble.</p>
                <div className="flex justify-center">
                    <NavLink name="Projets" to="/projets" className="text-white p-2 underline font-ocean font-bold text-4xl w-1/6 rounded-xl text-center">Projets</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Home;
