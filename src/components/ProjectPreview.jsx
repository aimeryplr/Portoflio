export function ProjectPreview(props) {
    return (
        <figure className= {"border-slate-50 border-2 w-1/4 rounded-md aspect-square flex items-center justify-center drop-shadow-2xl hover:border-slate-400 " + props.bgColor}>
            <img style={{objectFit: "cover"}} src={props.image} className="w-5/6 rounded-lg" alt="souka"/>
        </figure>
    )
}