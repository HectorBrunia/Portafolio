import { proyectos } from "../utils/DataProyectos";

import { motion } from "framer-motion";
import Proyect from "./Proyect";

const ProyectList = () => {
  return (
    <>
      <motion.h1>Proyectos</motion.h1>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="proyectos"
        className={"text-grayText  p-4 lg:w-[100vh]"}
      >
        {proyectos.map((proyecto) => (
          <motion.article key={proyecto.id} className="proyecto">
            <Proyect proyecto={proyecto} />
          </motion.article>
        ))}
      </motion.section>
    </>
  );
};

export default ProyectList;
