import { proyectos } from "../utils/DataProyectos";

import { motion } from "framer-motion";
import Proyect from "./Proyect";

const ProyectList = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={"text-grayText w-full lg:w-[100vh]"}
      >
        <motion.h1>Proyectos</motion.h1>
        {proyectos.map((proyecto) => (
          <motion.article
            key={proyecto.id}
            className="proyecto"
            initial={{ opacity: 0, scale: 0 }} // Inicialmente invisible y más abajo
            whileInView={{ opacity: 1, scale: 1 }} // Se hace visible al entrar en pantalla
            viewport={{ once: false, amount: 0.8 }} // Se activa cuando el 30% del elemento es visible
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Proyect proyecto={proyecto} />
          </motion.article>
        ))}
      </motion.div>
    </>
  );
};

export default ProyectList;
