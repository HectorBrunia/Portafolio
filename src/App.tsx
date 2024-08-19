import NavBar from "./components/NavBar";
import { motion } from "framer-motion";
import ProyectList from "./components/ProyectList";
import Estudios from "./components/Estudios";
import SobreMi from "./components/SobreMi";

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
            <motion.h1 className="text-4xl">Héctor Bruña</motion.h1>
            <motion.h1
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{ duration: 3 }}
              className="text-6xl font-bold text-red-900"
            >
              Desarrollador <br></br> FullStak
            </motion.h1>
          </div>
        </section>
        <SobreMi />
        <ProyectList />
        <Estudios />
      </div>
    </>
  );
};

export default Home;
