import { proyecto, proyectos } from "../utils/DataProyectos";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Proyect from "./Proyect";
const initialProyect: proyecto = {
  id: 0,
  nombre: "Wiki sobre Elden Ring",
  descripcion: "Proyecto para aprender sobre Elden Ring",
  img: "https://example.com/wiki.jpg",
  tecnologias: ["CSS3", "HTML5", "Javascript"],
  github: "https://github.com/example/wiki-elden-ring",
};
const ProyectList = () => {
  const [selectedId, setSelectedId] = useState(false);
  const [selectedProyect, setSelectedProyect] = useState(initialProyect);

  console.log(selectedId);
  return (
    <>
      <motion.section
        id="proyectos"
        className={selectedId ? "text-grayText opacity-50" : "text-grayText"}
      >
        <motion.h1 className="text-5xl font-semibold pt-32 text-white ">
          Proyectos
        </motion.h1>
        {proyectos.map((proyecto) => (
          <motion.article
            key={proyecto.id}
            className="proyecto"
            onClick={() => {
              setSelectedId(true);
              setSelectedProyect(proyecto);
            }}
            layoutId={proyecto.id.toString()}
          >
            <Proyect proyecto={proyecto} />
          </motion.article>
        ))}
      </motion.section>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="selected-proyect"
            layoutId={selectedProyect.id.toString()}
          >
            <motion.h5>{selectedProyect.nombre}</motion.h5>
            <motion.h2>{selectedProyect.descripcion}</motion.h2>
            <motion.img
              src={selectedProyect.img}
              className=" img  rounded-xl"
            />
            <motion.button onClick={() => setSelectedId(false)}>
              salir
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProyectList;
