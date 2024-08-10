import { FaCss3Alt, FaHtml5, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
const ProyectList = () => {
  return (
    <section id="proyectos" className="text-grayText">
      <h1 className="text-5xl font-semibold pt-32 text-white ">Proyectos</h1>
      <article className="proyecto">
        <div className="">
          <h2 className="text-3xl">Wiki sobre Elden Ring</h2>
          <p>Descripción del proyecto 1</p>
          <div className="flex ">
            <FaCss3Alt color="black" size={"30px"} />
            <FaHtml5 color="black" size={"30px"} />
            <IoLogoJavascript color="black" size={"30px"} />
          </div>
          <a className="flex items-center" href="">
            GitHub
            <FaGithub />
          </a>
        </div>
        <img
          src={"images/EldenRingHome.png"}
          alt="eldenring"
          className=" img  rounded-xl"
        />
      </article>

      <article className="proyecto">
        <div>
          <h2 className="text-3xl">Tienda de celulares</h2>
          <p>Descripción del proyecto 1</p>
          <div className="flex ">
            <FaCss3Alt color="black" size={"30px"} />
            <FaHtml5 color="black" size={"30px"} />
            <IoLogoJavascript color="black" size={"30px"} />
          </div>
          <a className="flex items-center" href="">
            GitHub
            <FaGithub />
          </a>
        </div>
        <img
          src={"images/SiphoneHome.png"}
          alt="eldenring"
          className=" img  rounded-xl"
        />
      </article>
      <article className="proyecto">
        <div>
          <h2 className="text-3xl">Pagina de juegos</h2>
          <p>Descripción del proyecto 1</p>
          <div className="flex ">
            <FaCss3Alt color="black" size={"30px"} />
            <FaHtml5 color="black" size={"30px"} />
            <IoLogoJavascript color="black" size={"30px"} />
          </div>
          <a className="flex items-center" href="">
            GitHub
            <FaGithub />
          </a>
        </div>
        <img
          src={"images/ElenemigosHome.png"}
          alt="eldenring"
          className=" img  rounded-xl"
        />
      </article>
    </section>
  );
};

export default ProyectList;
