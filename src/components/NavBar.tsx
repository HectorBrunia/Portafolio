import { useState } from "react";

const NavBar = () => {
  const [sobreMi, setSobreMi] = useState(false);
  const [proyecto, setProyecto] = useState(false);

  const activeLink = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 0 && window.scrollY <= 100) {
      setSobreMi(true);
    } else {
      setSobreMi(false);
    }
    if (window.scrollY >= 101 && window.scrollY <= 300) {
      setProyecto(true);
    } else {
      setProyecto(false);
    }
  };
  window.addEventListener("scroll", activeLink);
  return (
    <nav className=" bg-navBar fixed text-grayText  border-lightGray border rounded-full p-2 mt-3">
      <ul className="flex flex-row gap-4 text-[10px]">
        <li>
          <a
            href="#sobreMi"
            className={sobreMi ? "navBar-Link" : " hover:text-white "}
          >
            Sobre mi
          </a>
        </li>
        <li>
          <a
            href="#proyectos"
            className={proyecto ? "navBar-Link" : " hover:text-white "}
          >
            Proyectos
          </a>
        </li>
        <li>
          <a href="">Estudios</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
