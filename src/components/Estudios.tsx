import { motion } from "framer-motion";
const Estudios = () => {
  return (
    <section id="estudios" className="text-white max-w-[900px]">
      <h1>Estudios y conocimientos</h1>
      <motion.article className=" estudio ">
        <div className="xl:text-left">
          <p className="text-xl text-red-900 font-bold">
            Técnico en Informática Personal y Profesional
          </p>
          <p className="xl:text-sm pt-2 text-grayText">
            N°2 "ING. FELIPE SENILLOSA".<br></br>
            mar. 2014 - dic. 2020
          </p>
        </div>
        <div className="xl:text-left">
          <p className=" xl:w-[650px]">
            Egresado en 2020, durante mi estancia en la escuela secundaria "Ing.
            Felipe Senillosa", desarrolle un interes por el gaming lo que me
            llevo a investigar y desarrollar habilidades en el área y elejir la
            especialidad de informática, donde encontre una pasion por la
            programación
          </p>
        </div>
      </motion.article>
    </section>
  );
};

export default Estudios;
