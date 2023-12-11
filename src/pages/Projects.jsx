import {ProjectPreview} from "../components/ProjectPreview.jsx";
import MinecraftServer from "../assets/minecraft-server.png"

function Projects() {
  return (
    <>
      <section className="flex justify-center align-middle relative h-screen">
        {/*3 Projects*/}
        <div className="flex justify-between items-center mx-32">
            <ProjectPreview image={MinecraftServer} bgColor="bg-cyan-400" />
            <ProjectPreview image={MinecraftServer} bgColor="bg-slate-200" />
            <ProjectPreview image={MinecraftServer} bgColor="bg-cyan-400" />
        </div>
      </section>
    </>
  )
}

export default Projects