import { gsap } from "gsap";

function Title(props) {
    return (
        <h1 className=" absolute text-6xl z-10 text-[#2C3233] my-10 left-1/2 -translate-x-1/2 font-bold underline decoration-cyan-400 text-center">{props.title}</h1>
    )
}

export default Title