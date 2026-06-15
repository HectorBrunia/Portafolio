import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
//
import { SiGmail } from "react-icons/si";
const icon = {
  hidden: {
    textShadow: "0 0 0 rgb(127 29 29)",
  },
  visible: {
    textShadow: "0 0 30px rgb(127 29 29)",
  },
};
const SobreMi = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1  gap-8 text-white max-w-[1280px] items-center justify-center">
        <div className="col-span-1 mx-auto flex gap-0 flex-col mt-40">
          <div className="w-48 h-48 rounded-full overflow-hidden mx-auto shadow-lg ">
            <motion.img
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className=" w-60 h-60 object-cover scale-150 "
              src="images/avatar.png"
              alt="yo"
            />
          </div>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold"
          >
            Héctor Bruña
          </motion.h1>
          <motion.h1
            variants={icon}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-3xl font-bold text-red-900 "
          >
            Desarrollador Full-Stack
          </motion.h1>
        </div>

        <div className="col-span-2 lg:mt-40 px-4">
          <p className="lg:text-left">
            Soy desarrollador{" "}
            <b className="font-extrabold  text-red-900">Full Stack </b>,
            especializado en{" "}
            <b className="font-extrabold text-red-900">
              React, Java y Spring Boot.{" "}
            </b>
            . Me formé como{" "}
            <b className="font-extrabold text-red-900">
              {" "}
              Técnico en Desarrollo de Aplicaciones Informáticas en la UNICEN
              (Tandil, Argentina),{" "}
            </b>{" "}
            donde descubrí mi pasión por crear soluciones útiles y bien
            estructuradas.<br></br> Disfruto enfrentar desafíos que combinan
            lógica y diseño, y continuamente busco mejorar mis habilidades a
            través de proyectos personales y experiencias prácticas en el
            desarrollo de aplicaciones web modernas.
          </p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex gap-12 mt-12 items-center justify-center"
          >
            <motion.a
              whileHover={{
                scale: 1.2,
                color: "rgb(127 29 29 )",
                y: -10,
              }}
              className="flex items-center flex-col"
              target="_blank"
              href="https://github.com/HectorBrunia"
            >
              <FaGithub size={40} />
              <p>GitHub</p>
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.2,
                color: "rgb(127 29 29 )",
                y: -10,
              }}
              className="flex items-center flex-col"
              target="_blank"
              href="https://www.linkedin.com/in/h%C3%A9ctor-bru%C3%B1a/"
            >
              <FaLinkedin size={40} />
              <p>LinkedIn</p>
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.2,
                color: "rgb(127 29 29 )",
                y: -10,
              }}
              className="flex items-center flex-col"
              target="_blank"
              href="mailto:hectorbct.2002@gmail.com"
            >
              <SiGmail size={40} />
              <p>Email</p>
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.2,
                color: "rgb(127 29 29 )",
                y: -10,
              }}
              className="flex items-center flex-col"
              target="_blank"
              href="pdf/HectorBruña.pdf"
              download="HectorBruña.pdf"
            >
              <FaDownload size={40} />
              <p>Descargar CV</p>
            </motion.a>
          </motion.div>
          <div className="disponible mt-12">
            <p className="text-white font-karla font-bold ">DISPONIBLE</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SobreMi;
