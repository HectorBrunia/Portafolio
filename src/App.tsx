import NavBar from "./components/NavBar";
import { motion } from "framer-motion";
import ProyectList from "./components/ProyectList";
const Home = () => {
  return (
    <>
      <div className="bg-home ">
        <NavBar></NavBar>
        <section id="sobreMi">
          <motion.h1 className="text-6xl font-semibold pt-32 text-white ">
            Héctor Bruña
          </motion.h1>
          <p className="text-s text-pretty pt-8  text-grayText  w-[700px]">
            Vivo en la ciudad de Tandil, Bs. As., Argentina. Mi carrera en la
            programación empezó a los 16 años, cuando mi interés en el mundo de
            los videojuegos y la informática en general me llevó a elegir la
            especialidad de informática en la escuela secundaria
            <b className="text-white"> N°2 "ING. FELIPE SENILLOSA" </b>, donde
            en 2020 me recibí de{" "}
            <b className="text-white">
              Técnico en informática personal y profesional{" "}
            </b>
            . Actualmente soy estudiante avanzado en la carrera de Tecnicatura
            Universitaria en Desarrollo de Aplicaciones Informáticas
            <b className="text-white"> TUDAI </b> en la Universidad Nacional del
            Centro de la Provincia de Buenos Aires{" "}
            <b className="text-white"> UNICEN </b>.
          </p>
        </section>
        <ProyectList />
        <section id="estudios" className="text-white">
          <h1>Estudios</h1>
          <ul>
            <li>Técnico en Informática Personal y Profesional (T.I.P.P.)</li>
            <li>
              Tecnicatura Universitaria en Desarrollo de Aplicaciones
              Informáticas (TUDAI)
            </li>
            <li>
              Unicen - Universidad Nacional del Centro de la Provincia de Buenos
              Aires (UNICEN)
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Home;
