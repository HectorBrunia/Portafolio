import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

interface Props {
  tecnoogias: string[];
}

const IconosTecnologia = ({ tecnoogias }: Props) => {
  let icono;
  return (
    <>
      {tecnoogias.map((tecno) => {
        switch (tecno) {
          case "HTML":
            icono = <FaHtml5 color="black" size={"30px"} />;
            break;
          case "CSS":
            icono = <FaCss3Alt color="black" size={"30px"} />;
            break;
          case "JSON":
            icono = <p key={tecno}>JSON</p>;
            break;
          case "Javascript":
            icono = <IoLogoJavascript color="black" size={"30px"} />;
            break;
          case "React":
            icono = <p key={tecno}>React</p>;
            break;
          default:
            icono = <div key={tecno}></div>;
            break;
        }
        return icono;
      })}
    </>
  );
};

export default IconosTecnologia;
