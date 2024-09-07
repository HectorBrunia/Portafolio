import NavBar from "./components/NavBar";
import { motion } from "framer-motion";
import ProyectList from "./components/ProyectList";
import Estudios from "./components/Estudios";
import SobreMi from "./components/SobreMi";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

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
      <div className="bg-home">
        <NavBar></NavBar>
        <section id="sobreMi">
          <div className="flex flex-col  text-white mt-28 items-center justify-center">
            <motion.h1 className="text-4xl p-8">Héctor Bruña</motion.h1>
            <motion.h1
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{ duration: 3 }}
              className="text-5xl font-bold text-red-900"
            >
              Desarrollador <br></br> Full-Stack
            </motion.h1>
            <div className="flex gap-8 mt-8 py-8 items-center justify-center">
              <motion.a
                className="flex items-center flex-col"
                whileHover={{ scale: 1.2, color: "rgb(127 29 29 )" }}
                target="_blank"
                href="https://github.com/HectorBrunia"
              >
                <FaGithub size={40} />
                <p>GitHub</p>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "rgb(127 29 29 )" }}
                className="flex items-center flex-col"
                target="_blank"
                href="https://www.linkedin.com/in/h%C3%A9ctor-bru%C3%B1a/"
              >
                <FaLinkedin size={40} />
                <p>LinkedIn</p>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "rgb(127 29 29 )" }}
                className="flex items-center flex-col"
                target="_blank"
                href="mailto:hectorbct.2002@gmail.com"
              >
                <SiGmail size={40} />
                <p>Email</p>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "rgb(127 29 29 )" }}
                className="flex items-center flex-col"
                target="_blank"
                href="pdf/HectorBruña.pdf"
                download="HectorBruña.pdf"
              >
                <FaDownload size={40} />
                <p>Descargar CV</p>
              </motion.a>
            </div>
          </div>
        </section>
        <div className="disponible ">
          <p className="text-white font-karla font-bold ">DISPONIBLE</p>
        </div>
        <SobreMi />
        <ProyectList />
        <Estudios />
      </div>
    </>
  );
};

export default Home;
