import NavBar from "./components/NavBar";
import { motion } from "framer-motion";
import ProyectList from "./components/ProyectList";
// import Estudios from "./components/Estudios";
import SobreMi from "./components/SobreMi";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Particulas from "./components/Particulas";
import Timeline from "./components/TimeLine";
import { estudios, experiencias } from "./utils/DataProyectos";
import HorizontalTimeline from "./components/TimeLineEstudios";

const icon = {
  hidden: {
    textShadow: "0 0 0 rgb(127 29 29)",
  },
  visible: {
    textShadow: "0 0 30px rgb(127 29 29)",
  },
};

const Home = () => {
  return (
    <>
      <div className="bg-home relative">
        <Particulas />
        <NavBar></NavBar>
        <section id="sobreMi" className="z-20">
          <div className="flex flex-col  text-white mt-28 items-center justify-center">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-5xl p-6 "
            >
              Héctor Bruña
            </motion.h1>
            <motion.h1
              variants={icon}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="text-4xl font-bold text-red-900"
            >
              Desarrollador <br></br> Full-Stack
            </motion.h1>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex gap-8 mt-8 py-8 items-center justify-center"
            >
              <motion.a
                whileHover={{
                  scale: 1.2,
                  color: "rgb(127 29 29 )",
                  y: -10,
                }}
                className="flex items-center flex-col"
                target="_blank"
                href="https://github.com/HectorBrunia"
              >
                <FaGithub size={40} />
                <p>GitHub</p>
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.2,
                  color: "rgb(127 29 29 )",
                  y: -10,
                }}
                className="flex items-center flex-col"
                target="_blank"
                href="https://www.linkedin.com/in/h%C3%A9ctor-bru%C3%B1a/"
              >
                <FaLinkedin size={40} />
                <p>LinkedIn</p>
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.2,
                  color: "rgb(127 29 29 )",
                  y: -10,
                }}
                className="flex items-center flex-col"
                target="_blank"
                href="mailto:hectorbct.2002@gmail.com"
              >
                <SiGmail size={40} />
                <p>Email</p>
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.2,
                  color: "rgb(127 29 29 )",
                  y: -10,
                }}
                className="flex items-center flex-col"
                target="_blank"
                href="pdf/HectorBruña.pdf"
                download="HectorBruña.pdf"
              >
                <FaDownload size={40} />
                <p>Descargar CV</p>
              </motion.a>
            </motion.div>
          </div>
          <div className="disponible">
            <p className="text-white font-karla font-bold ">DISPONIBLE</p>
          </div>
          <div className="max-w-3xl mx-auto p-6">
            <h2 className="text-2xl text-white font-karla font-bold  mb-6">
              Experiencia Laboral
            </h2>
            <Timeline items={experiencias} />
          </div>
          <SobreMi />
        </section>
        <section id="proyectos" className="z-20">
          <ProyectList />
        </section>
        <section id="estudios" className="py-24 z-20">
          <h1 className="">Educacion</h1>
          <HorizontalTimeline items={estudios} />
        </section>
      </div>
    </>
  );
};

export default Home;
