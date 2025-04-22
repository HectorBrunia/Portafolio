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
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
} from "react-icons/fa6";
import { motion } from "framer-motion";
const Avilidades = () => {
  return (
    <motion.div className=" text-white flex flex-col items-center">
      <h2 className="text-4xl py-10">Mis avilidades</h2>
      <div className=" tecnologias  ">
        <p>Lenguajes de programacion</p>
        <motion.div className=" icon  " whileHover={{ scale: 1.2 }}>
          <FaJava size={50} color="white" />
          <p className="iconP">JAVA</p>
        </motion.div>
        <motion.div className=" icon  " whileHover={{ scale: 1.2 }}>
          <FaJs size={50} color="yellow" />
          <p className="iconP">JAVASCRIPT</p>
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
      <div className="tecnologias">
        <p>tecnologias Frontend</p>
        <motion.div className="icon" whileHover={{ scale: 1.2 }}>
          <FaReact size={50} color="#74C0FC" />
          <p className="iconP">REACT</p>
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
        <motion.div className="icon" whileHover={{ scale: 1.2 }}>
          <FaNodeJs size={57} color="green" className=" absolute bottom-6" />
          <p className="iconP">NODEJS</p>
        </motion.div>
      </div>
      <div className="tecnologias ">
        <p>Bases de datos</p>
        <motion.div className=" icon  " whileHover={{ scale: 1.2 }}>
          <BiLogoPostgresql size={60} className=" " />
          <p className="iconP">POSTGRESQL</p>
        </motion.div>
        <motion.div className=" icon  " whileHover={{ scale: 1.2 }}>
          <BiLogoMongodb size={60} color="green" className=" " />
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
    </motion.div>
  );
};

export default Avilidades;
