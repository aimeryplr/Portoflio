import { gsap } from "gsap";

function HorizontalBar(props) {
    return (
        <div className={"h-2 w-2 rounded-2xl" + " " + props.color}></div>
    )
}

export default HorizontalBar