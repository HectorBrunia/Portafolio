import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const NavBar = () => {
  const [activeSection, setActiveSection] = useState("sobreMi");

  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Selecciona todas las secciones
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Actualiza la sección activa al intersectarse
          }
        });
      },
      { threshold: 0.3 } // Ajusta el porcentaje de visibilidad requerido
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Limpia el observer al desmontar
  }, []);

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
            animate={activeSection === "sobreMi" ? "selected" : "noselected"}
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
            animate={activeSection === "proyectos" ? "selected" : "noselected"}
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
            animate={activeSection === "estudios" ? "selected" : "noselected"}
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
