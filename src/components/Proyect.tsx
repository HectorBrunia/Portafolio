import { proyecto } from "../utils/DataProyectos";
import { motion } from "framer-motion";
import IconosTecnologia from "./IconosTecnologia";
import { DiGithubFull } from "react-icons/di";
import { useState } from "react";
interface Props {
  proyecto: proyecto;
}

const Proyect = ({ proyecto }: Props) => {
  const [imgIndex, sectionIndex] = useState(0);
  return (
    <>
      <motion.div className="flex flex-col items-center space-y-4">
        <div className="img flex flex-col items-center gap-1 ">
          <div className="flex gap-1 justify-center items-center">
            <button
              disabled={imgIndex === 0}
              onClick={() => sectionIndex(imgIndex - 1)}
              className="p-2 text-black bg-resaltado rounded disabled:opacity-50"
            >
              ⬅
            </button>
            <motion.img
              src={proyecto.img[imgIndex]}
              alt={`Imagen ${imgIndex + 1}`}
              className="lg:w-[90%] w-[80%] p-1 lg:p-4"
            />
            <button
              disabled={imgIndex === proyecto.img.length - 1}
              onClick={() => sectionIndex(imgIndex + 1)}
              className="p-2 bg-resaltado text-black rounded disabled:opacity-50"
            >
              ➡
            </button>
          </div>
          <div className="flex gap-2 mt-4">
            {proyecto.img.map((_, index) => (
              <button
                key={index}
                onClick={() => sectionIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  imgIndex === index ? "bg-resaltado" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>

        <motion.div className="w-full p-4  space-y-4 text-left">
          <motion.h2 className="text-3xl font-bold text-gray-100">
            {proyecto.nombre}
          </motion.h2>
          <motion.p className="text-white">{proyecto.descripcion}</motion.p>
          <div className="flex justify-center lg:gap-4 items-center text-white">
            <IconosTecnologia text={true} tecnoogias={proyecto.tecnologias} />
          </div>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 bg-resaltado text-white rounded-lg hover:opacity-80">
              <a href={proyecto.link}>visitar sitio</a>
            </button>
            <a
              href={proyecto.link}
              className="flex items-center bg-resaltado rounded-lg  px-4 py-2 hover:opacity-80"
            >
              <DiGithubFull
                size={40}
                className="text-gray-400 hover:text-white"
              />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Proyect;
