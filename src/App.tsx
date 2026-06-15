import NavBar from "./components/NavBar";

import ProyectList from "./components/ProyectList";
// import Estudios from "./components/Estudios";
import SobreMi from "./components/SobreMi";

import Particulas from "./components/Particulas";
import Timeline from "./components/TimeLine";
import { estudios, experiencias } from "./utils/DataProyectos";
import HorizontalTimeline from "./components/TimeLineEstudios";
import Avilidades from "./components/Avilidades";
import FormContacto from "./components/FormContacto";

const Home = () => {
  return (
    <>
      <div className="bg-home relative">
        <Particulas />
        <NavBar></NavBar>
        <section id="sobreMi" className="z-20">
          <SobreMi />
        </section>
        <Avilidades />
        <h2 className="text-2xl text-white font-karla font-bold mt-20  mb-6">
          Experiencia Laboral
        </h2>
        <Timeline items={experiencias} />
        <section id="proyectos" className="z-20">
          <ProyectList />
        </section>
        <section id="estudios" className="py-24 z-20">
          <h1 className="">Educacion</h1>
          <HorizontalTimeline items={estudios} />
        </section>
        <section>
          <FormContacto />
        </section>
      </div>
    </>
  );
};

export default Home;
