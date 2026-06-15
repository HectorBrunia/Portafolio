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
const techIcons = [
  { icon: <FaJava size={50} color="white" />, name: "JAVA" },
  { icon: <FaJs size={50} color="yellow" />, name: "JAVASCRIPT" },
  { icon: <BiLogoTypescript size={50} color="#1f7bc1" />, name: "TYPESCRIPT" },
  { icon: <FaReact size={50} color="#74C0FC" />, name: "REACT" },
  { icon: <FaCss3Alt size={50} color="#0784e4" />, name: "CSS" },
  { icon: <FaHtml5 size={50} color="#F16529" />, name: "HTML" },
  { icon: <BiLogoTailwindCss size={50} color="#1f7bc1" />, name: "TAILWIND" },
  { icon: <BiLogoSpringBoot size={50} color="green" />, name: "SPRINGBOOT" },
  { icon: <FaNodeJs size={50} color="green" />, name: "NODEJS" },
  { icon: <BiLogoPostgresql size={50} />, name: "POSTGRESQL" },
  { icon: <BiLogoMongodb size={50} color="green" />, name: "MONGODB" },
  { icon: <BiLogoFlutter size={50} color="#74C0FC" />, name: "FLUTTER" },
];
const Avilidades = () => {
  return (
    <div className="relative overflow-hidden w-full  py-10">
      {/* Overlay de gradientes */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-[rgba(0,0,0,0.6)] to-transparent z-10" />

      {/* Slider animado */}
      <motion.div
        className="flex gap-16 w-max"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...techIcons, ...techIcons].map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-white min-w-[100px]"
          >
            {tech.icon}
            <p className="mt-2 text-sm">{tech.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Avilidades;
