import { useState } from "react";
import { motion } from "framer-motion";
const NavBar = () => {
  const [sobreMi, setSobreMi] = useState(true);
  const [proyecto, setProyecto] = useState(false);
  const [estudios, setEstudios] = useState(false);

  const activeLink = () => {
    if (window.scrollY >= 0 && window.scrollY <= 100) {
      setSobreMi(true);
    } else {
      setSobreMi(false);
    }
    if (window.scrollY >= 101 && window.scrollY <= 500) {
      setProyecto(true);
    } else {
      setProyecto(false);
    }
    if (window.scrollY >= 501 && window.scrollY <= 800) {
      setEstudios(true);
    } else {
      setEstudios(false);
    }
  };
  window.addEventListener("scroll", activeLink);
  const variants = {
    noselected: {
      fontSize: "12px",
    },
    selected: {
      color: "rgb(255 255 255)",
      boxShadow: " 0 0 10px #fffcfc ",
      background: "radial-gradient(circle, #696666, rgb(73, 72, 72) 70%)",
      fontSize: "14px",
    },
  };
  return (
    <nav className="z-30 bg-navBar bg-opacity-80 fixed text-grayText  border-red-950 border rounded-full px-6 p-2 mt-3">
      <ul className="flex flex-row gap-10 ">
        <li>
          <motion.a
            href="#sobreMi"
            className={"rounded-full p-1"}
            initial="noselected"
            animate={sobreMi ? "selected" : "noselected"}
            transition={{ type: "spring", stiffness: 100, damping: 12 }}
            variants={variants}
          >
            Sobre mi
          </motion.a>
        </li>
        <li>
          <motion.a
            href="#proyectos"
            initial="noselected"
            animate={proyecto ? "selected" : "noselected"}
            transition={{ type: "spring", stiffness: 100 }}
            variants={variants}
            className={"rounded-full p-1"}
          >
            Proyectos
          </motion.a>
        </li>
        <li>
          <motion.a
            href="#estudios"
            initial="noselected"
            animate={estudios ? "selected" : "noselected"}
            transition={{ type: "spring", stiffness: 100 }}
            variants={variants}
            className={"rounded-full p-1"}
          >
            Estudios
          </motion.a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
