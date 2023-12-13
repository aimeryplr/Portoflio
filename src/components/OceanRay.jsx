import RayImg from "../assets/OceanRay.png"
import {forwardRef} from "react";

const OceanRay = forwardRef((props, ref) => {
    return (
        <img src={RayImg} ref={ref}
            className={`absolute -top-10`}
            alt="OceanRay Image"
            style={{opacity: props.opacity / 100,
                    left: props.left,
                    transform: `rotate(${props.rotate}deg) scale${props.scale}`}}/>
    )
});

export default OceanRay;