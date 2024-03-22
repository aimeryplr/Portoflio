import { gsap } from "gsap";

function HorizontalBar(props) {
    return (
        <div className={"h-1 w-5/6 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 " + props.color}></div>
    )
}

export default HorizontalBar