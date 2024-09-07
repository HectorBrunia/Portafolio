import {
  BiLogoPostgresql,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaAngular, FaCss3Alt, FaHtml5, FaPhp, FaReact } from "react-icons/fa";
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
              <div>
                <FaHtml5 color="#F16529" size={"30px"} />
                {text && <p className="text-xs">HTML</p>}
              </div>
            );

            break;
          case "CSS":
            icono = (
              <div className={text ? "px-4" : ""}>
                <FaCss3Alt color="#0784e4" size={"30px"} />
                {text && <p className="text-xs">CSS</p>}
              </div>
            );
            break;
          case "Angular":
            icono = (
              <div>
                <FaAngular color="#DD235B" size={"30px"} />
                {text && <p className="text-xs">Angular</p>}
              </div>
            );
            break;
          case "Javascript":
            icono = (
              <div>
                <IoLogoJavascript color="yellow" size={"30px"} />
                {text && <p className="text-xs">JavaS</p>}
              </div>
            );
            break;
          case "React":
            icono = (
              <div>
                <FaReact color="#74C0FC" size={"30px"} />
                {text && <p className="text-xs">React</p>}
              </div>
            );
            break;
          case "PHP":
            icono = (
              <div>
                <FaPhp size={"30px"} />
                {text && <p className="text-xs">PHP</p>}
              </div>
            );
            break;
          case "Spring":
            icono = (
              <div>
                <SiSpringboot color="green" size={"30px"} />
                {text && <p className="text-xs">Spring</p>}
              </div>
            );
            break;
          case "PostgreSQL":
            icono = (
              <div>
                <BiLogoPostgresql size={"30px"} />
                {text && <p className="text-xs">PostgreSQL</p>}
              </div>
            );
            break;
          case "MongoDB":
            icono = (
              <div>
                <DiMongodb color="green" size={"30px"} />
                {text && <p className="text-xs">MongoDB</p>}
              </div>
            );
            break;
          case "Typescript":
            icono = (
              <div>
                <BiLogoTypescript
                  size={"30px"}
                  color="#1f7bc1"
                  className=" icono absolute bottom-6 "
                />
                {text && <p className="text-xs">Typescript</p>}
              </div>
            );
            break;
          case "Tailwind":
            icono = (
              <div>
                <BiLogoTailwindCss
                  size={60}
                  color="#1f7bc1"
                  className=" absolute bottom-6"
                />
                {text && <p className="text-xs">Tailwind</p>}
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
