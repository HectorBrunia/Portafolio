import NavBar from "./components/NavBar";

const Home = () => {
  return (
    <>
      <div className="bg-home text-center flex  flex-col items-center  font-karla">
        <NavBar></NavBar>
        <section id="sobreMi">
          <h1 className="text-6xl font-semibold pt-32 text-white ">
            Héctor Bruña
          </h1>
          <p className="text-s text-pretty pt-8  text-grayText  w-[700px]">
            Vivo en la ciudad de Tandil, Bs. As., Argentina. Mi carrera en la
            programación empezó a los 16 años, cuando mi interés en el mundo de
            los videojuegos y la informática en general me llevó a elegir la
            especialidad de informática en la escuela secundaria
            <b className="text-white"> N°2 "ING. FELIPE SENILLOSA" </b>, donde
            en 2020 me recibí de{" "}
            <b className="text-white">
              Técnico en informática personal y profesional{" "}
            </b>
            . Actualmente soy estudiante avanzado en la carrera de Tecnicatura
            Universitaria en Desarrollo de Aplicaciones Informáticas
            <b className="text-white"> TUDAI </b> en la Universidad Nacional del
            Centro de la Provincia de Buenos Aires{" "}
            <b className="text-white"> UNICEN </b>.
          </p>
        </section>
        <section id="proyectos" className="text-grayText">
          <h1 className="text-5xl font-semibold pt-32 text-white ">
            Proyectos
          </h1>
          <article className="py-8">
            <h2 className="text-3xl">Proyecto 1</h2>
            <p>Descripción del proyecto 1</p>
          </article>
          <article className="py-8">
            <h2 className="text-3xl">Proyecto 2</h2>
            <p>Descripción del proyecto 2</p>
          </article>
        </section>
      </div>
    </>
  );
};

export default Home;
