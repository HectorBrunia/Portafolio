import { proyecto, proyectos } from "../utils/DataProyectos";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ImCross } from "react-icons/im";
import Proyect from "./Proyect";
import IconosTecnologia from "./IconosTecnologia";
const initialProyect: proyecto = {
  id: 0,
  nombre: "",
  descripcion: "",
  img: "",
  tecnologias: [""],
  github: "",
};
const ProyectList = () => {
  const [isSelected, setisSelected] = useState(false);
  const [selectedProyect, setSelectedProyect] = useState(initialProyect);
  return (
    <>
      <motion.h1>Proyectos</motion.h1>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="proyectos"
        className={
          isSelected
            ? "text-grayText lg:flex lg:flex-row lg:justify-between lg:w-[900px] opacity-50"
            : "text-grayText lg:flex lg:flex-row lg:justify-between lg:w-[900px]"
        }
      >
        {proyectos.map((proyecto) => (
          <motion.article
            whileHover={{
              scale: 1.2,
              boxShadow: "0 0 30px rgba(127, 29, 29, 0.7)",
            }}
            key={proyecto.id}
            className="proyecto"
            onClick={() => {
              setisSelected(true);
              setSelectedProyect(proyecto);
            }}
            layoutId={proyecto.id.toString()}
          >
            <Proyect proyecto={proyecto} />
          </motion.article>
        ))}
      </motion.section>

      <AnimatePresence>
        {isSelected && (
          <motion.div
            className="selected-proyect"
            layoutId={selectedProyect.id.toString()}
          >
            <motion.button
              whileHover={{ scale: 1.2 }}
              className="relative left-[45%] bottom-6 lg:left-[94%] "
              onClick={() => setisSelected(false)}
            >
              <ImCross />
            </motion.button>
            <div>
              <motion.img
                src={selectedProyect.img}
                className=" img  rounded-xl"
              />
              <motion.div className="flex">
                <IconosTecnologia
                  text={true}
                  tecnoogias={selectedProyect.tecnologias}
                />
              </motion.div>
            </div>

            <div className="px-2">
              <motion.h2 className="text-2xl">
                {selectedProyect.nombre}
              </motion.h2>
              <motion.h2 className="text-grayText text-xs">
                {selectedProyect.descripcion}
              </motion.h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProyectList;
