import backgroundOcean from '/src/assets/about/seaBackground.jpg'
import { gsap } from "gsap";
import {useLayoutEffect, useRef} from "react";


function Home() {

    let titleRef = useRef();
    let nameRef = useRef();

    useLayoutEffect(() => {
        gsap.from(titleRef.current, {x: "-25%", duration: 0.5})
        gsap.from(nameRef.current, {x: "-25%", duration: 0.5});
    }, []);


    return (
        <div className="h-[91vh] overflow-clip flex items-center">
            <img src={backgroundOcean} className="h-full w-full object-cover" alt=""/>
            <div className="flex flex-col justify-center left-[2%] absolute">
                <h1 ref={titleRef} className="text-8xl font-bold font-dev text-slate-100">DÉVELOPPEUR FULL STACK</h1>
                <h1 ref={nameRef} className="text-5xl font-bold font-ocean text-slate-100">PELLERIN Aimery</h1>
                <p className="my-10 w-[40%] text-slate-200 text-xl">Hello! I'm [Your Name], a
                    dedicated and versatile
                    full-stack developer with a passion for building innovative web applications that make a difference.
                    With [X] years of experience in the industry, I bring a strong foundation in both front-end and
                    back-end
                    development, along with a commitment to continuous learning and improvement.</p>
            </div>
        </div>
    );
}

export default Home;