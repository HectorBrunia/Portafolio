import { AnimatePresence, motion } from "framer-motion";
import { proyecto } from "../utils/DataProyectos";
import { useState } from "react";
interface Props {
  selectedProyect: proyecto;
  selectedId: boolean;
}
const SelectedProyect = ({ selectedProyect, selectedId }: Props) => {
  const [isSelected, setIsSelected] = useState(selectedId);
  return (
    <>
      <AnimatePresence>
        {isSelected && (
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
            <motion.button onClick={() => setIsSelected(false)}>
              salir
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SelectedProyect;
