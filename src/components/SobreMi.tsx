import {
  BiLogoFlutter,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoSpringBoot,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  FaJava,
  FaReact,
  FaJs,
  FaPhp,
  FaCss3Alt,
  FaHtml5,
  FaAngular,
} from "react-icons/fa6";
import { motion } from "framer-motion";
const SobreMi = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      id="descripcion"
      className=" text-white"
    >
      <h1>Sobre mi</h1>
      <p className="textoSimple mt-12 w-[900px]">
        Vivo en la ciudad de Tandil, Bs. As., Argentina. Mi carrera en la
        programación empezó a los 16 años, cuando mi interés en el mundo de los
        videojuegos y la informática en general me llevó a elegir la
        especialidad de informática en la escuela secundaria
        <b className="text-white"> N°2 "ING. FELIPE SENILLOSA" </b>, donde en
        2020 me recibí de{" "}
        <b className="text-white">
          Técnico en informática personal y profesional{" "}
        </b>
        . Actualmente soy estudiante avanzado en la carrera de Tecnicatura
        Universitaria en Desarrollo de Aplicaciones Informáticas
        <b className="text-white"> TUDAI </b> en la Universidad Nacional del
        Centro de la Provincia de Buenos Aires{" "}
        <b className="text-white"> UNICEN </b>.
      </p>
      <h2 className="text-4xl py-10">Mis avilidades</h2>
      <div className=" tecnologias  ">
        <p className="">Lenguajes de programacion</p>
        <motion.div className=" icon  " whileHover={{ scale: 1.2 }}>
          <FaJava size={50} color="white" />
          <p className="iconP">JAVA</p>
        </motion.div>
        <motion.div className=" icon  " whileHover={{ scale: 1.2 }}>
          <FaJs size={50} color="yellow" />
          <p className="iconP">JAVASCRIPT</p>
        </motion.div>
        <motion.div className=" icon  " whileHover={{ scale: 1.2 }}>
          <FaPhp size={50} />
          <p className="iconP">PHP</p>
        </motion.div>
        <motion.div className=" icon  " whileHover={{ scale: 1.2 }}>
          <BiLogoTypescript
            size={60}
            color="#1f7bc1"
            className=" icono absolute bottom-6 "
          />
          <p className="iconP">TYPESCRIPT</p>
        </motion.div>
      </div>
      <div className="tecnologias ">
        <p>tecnologias Frontend</p>
        <motion.div className=" icon  " whileHover={{ scale: 1.2 }}>
          <FaReact size={50} color="#74C0FC" />
          <p className="iconP">REACT</p>
        </motion.div>
        <motion.div className=" icon  " whileHover={{ scale: 1.2 }}>
          <FaAngular size={50} color="#DD235B" />
          <p className="iconP">ANGULAR</p>
        </motion.div>
        <motion.div className=" icon  " whileHover={{ scale: 1.2 }}>
          <FaCss3Alt size={50} color="#0784e4" />
          <p className="iconP">CSS</p>
        </motion.div>
        <motion.div className=" icon  " whileHover={{ scale: 1.2 }}>
          <FaHtml5 size={50} color="#F16529" />
          <p className="iconP">HTML</p>
        </motion.div>
        <motion.div className=" icon  " whileHover={{ scale: 1.2 }}>
          <BiLogoTailwindCss
            size={60}
            color="#1f7bc1"
            className=" absolute bottom-6"
          />
          <p className="iconP">TAILWIND</p>
        </motion.div>
      </div>
      <div className="tecnologias ">
        <p>Frameworks Backend</p>
        <motion.div className="icon" whileHover={{ scale: 1.2 }}>
          <BiLogoSpringBoot
            size={60}
            color="green"
            className=" absolute bottom-6"
          />
          <p className="iconP">SPRINGBOOT</p>
        </motion.div>
      </div>
      <div className="tecnologias ">
        <p>Bases de datos</p>
        <motion.div className=" icon  " whileHover={{ scale: 1.2 }}>
          <BiLogoPostgresql size={60} className=" absolute bottom-6" />
          <p className="iconP">POSTGRESQL</p>
        </motion.div>
        <motion.div className=" icon  " whileHover={{ scale: 1.2 }}>
          <BiLogoMongodb
            size={60}
            color="green"
            className=" absolute bottom-6"
          />
          <p className="iconP">MONGODB</p>
        </motion.div>
      </div>
      <div className="tecnologias  ">
        <p>Frameworks Aplicaciones</p>
        <motion.div className=" icon  " whileHover={{ scale: 1.2 }}>
          <BiLogoFlutter size={50} color="#74C0FC" />
          <p className="iconP">FLUTTER</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SobreMi;
