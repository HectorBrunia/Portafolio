import {
  BiLogoPostgresql,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import {
  FaAngular,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiSpringboot } from "react-icons/si";

interface Props {
  tecnoogias: string[];
  text: boolean;
}

const IconosTecnologia = ({ tecnoogias, text }: Props) => {
  let icono;
  return (
    <>
      {tecnoogias.map((tecno) => {
        switch (tecno) {
          case "HTML":
            icono = (
              <div className="px-4 flex flex-col items-center">
                <FaHtml5 color="#F16529" size={"30px"} />
                {text && <p className="text-xs">HTML</p>}
              </div>
            );

            break;
          case "CSS":
            icono = (
              <div className="px-4 flex flex-col items-center">
                <FaCss3Alt color="#0784e4" size={"30px"} />
                {text && <p className="text-xs">CSS</p>}
              </div>
            );
            break;
          case "Angular":
            icono = (
              <div className="px-4 flex flex-col items-center">
                <FaAngular color="#DD235B" size={"30px"} />
                {text && <p className="text-xs">Angular</p>}
              </div>
            );
            break;
          case "Javascript":
            icono = (
              <div className="px-4 flex flex-col items-center">
                <IoLogoJavascript color="yellow" size={"30px"} />
                {text && <p className="text-xs">JavaS</p>}
              </div>
            );
            break;
          case "React":
            icono = (
              <div className="px-4 flex flex-col items-center">
                <FaReact color="#74C0FC" size={"30px"} />
                {text && <p className="text-xs">React</p>}
              </div>
            );
            break;
          case "PHP":
            icono = (
              <div className="px-4 flex flex-col items-center">
                <FaPhp size={"30px"} />
                {text && <p className="text-xs">PHP</p>}
              </div>
            );
            break;
          case "Spring":
            icono = (
              <div className="px-4 flex flex-col items-center">
                <SiSpringboot color="green" size={30} />
                {text && <p className="text-xs">Spring</p>}
              </div>
            );
            break;
          case "PostgreSQL":
            icono = (
              <div className="px-4 flex flex-col items-center">
                <BiLogoPostgresql size={"30px"} />
                {text && <p className="text-xs">PostgreSQL</p>}
              </div>
            );
            break;
          case "MongoDB":
            icono = (
              <div className="px-4 flex flex-col items-center">
                <DiMongodb color="green" size={"30px"} />
                {text && <p className="text-xs">MongoDB</p>}
              </div>
            );
            break;
          case "Typescript":
            icono = (
              <div className="px-4 flex flex-col items-center">
                <BiLogoTypescript size={30} color="#1f7bc1" className="" />
                {text && <p className="text-xs">Typescript</p>}
              </div>
            );
            break;
          case "Tailwind":
            icono = (
              <div className="px-4 flex flex-col items-center">
                <BiLogoTailwindCss size={30} color="#1f7bc1" />
                {text && <p className="text-xs">Tailwind</p>}
              </div>
            );
            break;
          case "Nodejs":
            icono = (
              <div className="px-4 flex flex-col items-center">
                <FaNodeJs size={30} color="green" />
                {text && <p className="text-xs">NodeJS</p>}
              </div>
            );
            break;
          default:
            icono = (
              <div>
                {" "}
                <p>tecnologia no reconocida</p>
              </div>
            );
            break;
        }
        return icono;
      })}
    </>
  );
};

export default IconosTecnologia;
