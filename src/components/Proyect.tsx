import { proyecto } from "../utils/DataProyectos";
import { motion } from "framer-motion";
import IconosTecnologia from "./IconosTecnologia";
import { FaGithub } from "react-icons/fa";
interface Props {
  proyecto: proyecto;
}

const Proyect = ({ proyecto }: Props) => {
  return (
    <>
      <motion.div className="flex flex-col justify-between">
        <motion.h2 className="text-3xl">{proyecto.nombre}</motion.h2>
        <motion.p>Descripción del proyecto 1</motion.p>
        <motion.div className="flex ">
          <IconosTecnologia tecnoogias={proyecto.tecnologias} />
        </motion.div>
        <motion.a className="flex items-center" href="">
          GitHub
          <FaGithub />
        </motion.a>
      </motion.div>
      <motion.img
        src={proyecto.img}
        alt="eldenring"
        className=" img  rounded-xl"
      />
    </>
  );
};

export default Proyect;
