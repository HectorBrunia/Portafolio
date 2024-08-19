import {
  BiLogoFlutter,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoSpringBoot,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  FaJava,
  FaReact,
  FaJs,
  FaPhp,
  FaCss3Alt,
  FaHtml5,
  FaAngular,
} from "react-icons/fa6";
const SobreMi = () => {
  return (
    <section id="descripcion" className=" text-white">
      <h1>Sobre mi</h1>
      <p className="textoSimple mt-12">
        Vivo en la ciudad de Tandil, Bs. As., Argentina. Mi carrera en la
        programación empezó a los 16 años, cuando mi interés en el mundo de los
        videojuegos y la informática en general me llevó a elegir la
        especialidad de informática en la escuela secundaria
        <b className="text-white"> N°2 "ING. FELIPE SENILLOSA" </b>, donde en
        2020 me recibí de{" "}
        <b className="text-white">
          Técnico en informática personal y profesional{" "}
        </b>
        . Actualmente soy estudiante avanzado en la carrera de Tecnicatura
        Universitaria en Desarrollo de Aplicaciones Informáticas
        <b className="text-white"> TUDAI </b> en la Universidad Nacional del
        Centro de la Provincia de Buenos Aires{" "}
        <b className="text-white"> UNICEN </b>.
      </p>
      <h2 className="text-2xl py-10">Mis avilidades</h2>
      <div className="grid grid-cols-4 gap-4 items-center justify-center  ">
        <FaReact size={80} className="hover:scale-150 " color="#74C0FC" />
        <FaJava size={80} />
        <FaJs size={80} color="yellow" />
        <FaPhp size={80} />
        <FaCss3Alt size={80} color="#0784e4" />
        <FaHtml5 size={80} color="#F16529" />
        <BiLogoTypescript size={100} color="#1f7bc1" />
        <BiLogoPostgresql size={100} />
        <BiLogoMongodb size={100} color="green" />
        <BiLogoSpringBoot size={100} color="green" />
        <FaAngular size={80} color="#DD235B" />
        <BiLogoFlutter size={80} color="#74C0FC" />
      </div>
    </section>
  );
};

export default SobreMi;
