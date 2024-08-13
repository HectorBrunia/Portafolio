import { proyecto } from "../utils/DataProyectos";
import { motion } from "framer-motion";
import IconosTecnologia from "./IconosTecnologia";
interface Props {
  proyecto: proyecto;
}

const Proyect = ({ proyecto }: Props) => {
  return (
    <>
      <motion.img src={proyecto.img} alt="eldenring" className=" img" />
      <motion.h2>{proyecto.nombre}</motion.h2>
      <motion.div className="flex mt-8">
        <IconosTecnologia text={false} tecnoogias={proyecto.tecnologias} />
      </motion.div>
    </>
  );
};

export default Proyect;
