import { motion } from "framer-motion";
const Estudios = () => {
  return (
    <>
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
          <p className=" xl:w-[600px] px-4">
            Egresado en 2020, durante mi estancia en la escuela secundaria "Ing.
            Felipe Senillosa", desarrolle un interes por el gaming lo que me
            llevo a investigar y desarrollar habilidades en el área y elejir la
            especialidad de informática, donde encontre una pasion por la
            programación
          </p>
        </div>
      </motion.article>
      <motion.article className=" estudio ">
        <div className="xl:text-left">
          <p className="text-xl text-red-900 font-bold">
            Técnico en Desarrollo de Aplicaciones Informáticas
          </p>
          <p className="xl:text-sm pt-2 text-grayText">
            Universidad Nacional del Centro de la Provincia de Buenos Aires
            “UNICEN”<br></br>
            2021 – 2024
          </p>
        </div>
        <div className="xl:text-left">
          <p className=" xl:w-[600px] px-4">
            En mi formación académica he adquirido habilidades para desarrollar
            soluciones efectivas utilizando diversas tecnologías, una sólida
            capacidad para el trabajo en equipo y un entusiasmo constante por
            aprender y fortalecer mis conocimientos, siempre buscando aportar
            valor en cada proyecto
          </p>
        </div>
      </motion.article>
    </>
  );
};

export default Estudios;
