import { motion } from "framer-motion";
const Estudios = () => {
  return (
    <section id="estudios" className="text-white max-w-[900px]">
      <h1>Estudios y conocimientos</h1>
      <motion.article
        initial={{ borderRight: "1px solid", borderLeft: "1px solid" }}
        whileHover={{ border: "1px solid" }}
        className="flex flex-row p-4 rounded-xl my-12 border-grayText"
      >
        <div className="text-left">
          <p className="text-xl font-bold">
            Técnico en Informática Personal y Profesional
          </p>
          <p className="text-sm text-grayText">
            N°2 "ING. FELIPE SENILLOSA".<br></br>
            mar. 2014 - dic. 2020
          </p>
        </div>
        <div className="text-left font-light">
          <p className=" w-[600px]">
            Egresado en 2020, durante mi estancia en la escuela secundaria "Ing.
            Felipe Senillosa", desarrolle un interes por el gaming lo que me
            llevo a investigar y desarrollar habilidades en el área y elejir la
            especialidad de informática, donde encontre una pasion por la
            programación
          </p>
        </div>
      </motion.article>
      <article className="flex flex-row p-4 rounded-xl my-12 border border-grayText">
        <div className="text-left">
          <p className="text-xl font-bold">
            Técnico en Informática Personal y Profesional
          </p>
          <p className="text-sm text-grayText">
            N°2 "ING. FELIPE SENILLOSA".<br></br>
            mar. 2014 - dic. 2020
          </p>
        </div>
        <div className="text-left font-light">
          <p className=" w-[600px]">
            Egresado en 2020, durante mi estancia en la escuela secundaria "Ing.
            Felipe Senillosa", desarrolle un interes por el gaming lo que me
            llevo a investigar y desarrollar habilidades en el área y elejir la
            especialidad de informática, donde encontre una pasion por la
            programación
          </p>
        </div>
      </article>
      <article className="flex flex-row p-4 rounded-xl my-12 border border-grayText">
        <div className="text-left">
          <p className="text-xl font-bold">
            Técnico en Informática Personal y Profesional
          </p>
          <p className="text-sm text-grayText">
            N°2 "ING. FELIPE SENILLOSA".<br></br>
            mar. 2014 - dic. 2020
          </p>
        </div>
        <div className="text-left font-light">
          <p className=" w-[600px]">
            Egresado en 2020, durante mi estancia en la escuela secundaria "Ing.
            Felipe Senillosa", desarrolle un interes por el gaming lo que me
            llevo a investigar y desarrollar habilidades en el área y elejir la
            especialidad de informática, donde encontre una pasion por la
            programación
          </p>
        </div>
      </article>
    </section>
  );
};

export default Estudios;
