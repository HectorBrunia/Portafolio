import { BiLogoPostgresql } from "react-icons/bi";
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
                <FaHtml5 size={"30px"} />
                {text && <p className="text-xs">HTML</p>}
              </div>
            );

            break;
          case "CSS":
            icono = (
              <div className={text ? "px-4" : ""}>
                <FaCss3Alt size={"30px"} />
                {text && <p className="text-xs">CSS</p>}
              </div>
            );
            break;
          case "Angular":
            icono = (
              <div>
                <FaAngular size={"30px"} />
                {text && <p className="text-xs">Angular</p>}
              </div>
            );
            break;
          case "Javascript":
            icono = (
              <div>
                <IoLogoJavascript size={"30px"} />
                {text && <p className="text-xs">JavaS</p>}
              </div>
            );
            break;
          case "React":
            icono = (
              <div>
                <FaReact size={"30px"} />
                {text && <p className="text-xs">React</p>}
              </div>
            );
            break;
          case "PHP":
            icono = (
              <div>
                <FaPhp size={"30px"} />
                {text && <p className="text-xs">HTML</p>}
              </div>
            );
            break;
          case "Spring":
            icono = (
              <div>
                <SiSpringboot size={"30px"} />
                {text && <p className="text-xs">HTML</p>}
              </div>
            );
            break;
          case "PostgreSQL":
            icono = (
              <div>
                <BiLogoPostgresql size={"30px"} />
                {text && <p className="text-xs">HTML</p>}
              </div>
            );
            break;
          case "MongoDB":
            icono = (
              <div>
                <DiMongodb size={"30px"} />
                {text && <p className="text-xs">HTML</p>}
              </div>
            );
            break;
          default:
            icono = <div></div>;
            break;
        }
        return icono;
      })}
    </>
  );
};

export default IconosTecnologia;
