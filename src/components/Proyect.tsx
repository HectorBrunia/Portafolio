import { useState } from "react";
import { motion } from "framer-motion";
import { DiGithubFull } from "react-icons/di";
import IconosTecnologia from "./IconosTecnologia";
import { proyecto } from "../utils/DataProyectos";

interface Props {
  proyecto: proyecto;
}

export default function Proyect({ proyecto }: Props) {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <motion.div className="bg-black border border-white text-white rounded-2xl shadow-lg p-6 w-full max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Galería de imágenes */}
        <div className="lg:w-1/2 w-full">
          <div className="relative w-full overflow-hidden rounded-lg">
            <img
              src={proyecto.img[imgIndex]}
              alt={`Imagen ${imgIndex + 1}`}
              className="w-full max-h-[400px] object-cover rounded-xl border border-neutral-700"
            />

            {/* Botones navegación */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
              <button
                disabled={imgIndex === 0}
                onClick={() => setImgIndex(imgIndex - 1)}
                className="bg-black/50 hover:bg-black/70 p-2 rounded-full text-white disabled:opacity-30"
              >
                ⬅
              </button>
              <button
                disabled={imgIndex === proyecto.img.length - 1}
                onClick={() => setImgIndex(imgIndex + 1)}
                className="bg-black/50 hover:bg-black/70 p-2 rounded-full text-white disabled:opacity-30"
              >
                ➡
              </button>
            </div>
          </div>

          {/* Miniaturas */}
          <div className="flex justify-center gap-2 mt-3 flex-wrap">
            {proyecto.img.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setImgIndex(index)}
                className={`w-10 h-10 rounded object-cover cursor-pointer border ${
                  imgIndex === index
                    ? "border-resaltado"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Info del proyecto */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center space-y-4">
          <h2 className="text-2xl text-red-900 font-bold text-resaltado">
            {proyecto.nombre}
          </h2>
          <p className="text-sm text-gray-300">{proyecto.descripcion}</p>

          <div className="flex justify-start">
            <IconosTecnologia text={true} tecnoogias={proyecto.tecnologias} />
          </div>

          <div className="flex gap-4 mt-4">
            <a
              target="_blank"
              href={proyecto.link}
              className="bg-resaltado px-6 py-2 rounded-lg text-black font-medium hover:opacity-90 transition"
            >
              Visitar sitio
            </a>
            <a
              target="_blank"
              href={proyecto.github}
              className="bg-white px-3 py-2 rounded-lg flex items-center gap-2 text-gray-800 hover:bg-gray-100 transition"
            >
              <DiGithubFull size={24} />
              Código
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
