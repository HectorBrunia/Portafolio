export interface proyecto {
  id: number;
  nombre: string;
  img: string[];
  descripcion: string;
  tecnologias: string[];
  github: string;
  link?: string;
}

export const proyectos = [
  {
    id: 1,
    nombre: "Pagina de juegos",
    img: [
      "images/elenemigos_1.png",
      "images/elenemigos_2.png",
      "images/elenemigos_3.png",
      "images/elenemigos_4.png",
      "images/elenemigos_5.png",
      "images/elenemigos_6.png",
    ],
    descripcion:
      "Pagina web de juegos utilizando HTML, CSS y Javascript. La pagina cuenta con un slider de imagenes, un menu de navegacion, un catalogo de juegos. Ademas implemente el juego de 4 en lineas",
    tecnologias: ["HTML", "CSS", "Javascript"],
    github: "https://hectorbrunia.github.io/InterfacesTP/TP-3/index.html",
    link: "https://hectorbrunia.github.io/InterfacesTP/TP-3/index.html",
  },
  {
    id: 2,
    nombre: "Catalogo de celulares",
    img: ["images/siphone.png", "images/siphone_1.png"],
    descripcion:
      "Pagina web de venta de celulares utilizando angular con typescript y utilizando una api (MockAPI) para obtener los datos de los celulares.",
    tecnologias: ["Angular", "Typescript"],
    github: "https://github.com/games-page",
    link: "https://hectorbrunia.github.io/InterfacesTP/TP-3/index.html",
  },
  {
    id: 3,
    nombre:
      "Página para promocionar el producto Tranquiliza.360° desarrollado en PLADEMA ",
    img: [
      "images/tranqui_1.png",
      "images/tranquiliza_2.png",
      "images/tranquiliza_3.png",
      "images/tranquiliza_4.png",
      "images/tranquiliza_5.png",
      "images/tranquiliza_6.png",
    ],
    descripcion:
      "Desarrolle una página web para visibilizar y promocionar el producto Tranquiliza.360° desarrollado en PLADEMA, facilitando la difusión del mismo a través de contenido multimedia atractivo (videos, imágenes, textos), un blog de novedades manejado con una base de datos en mongodb, y la implementación de una cuenta admin para gestionar los blogs",
    tecnologias: [
      "React",
      "Tailwind",
      "MongoDB",
      "CSS",
      "Javascript",
      "Nodejs",
    ],
    github: "https://github.com/portfolio-web",
    link: "https://hectorbrunia.github.io/InterfacesTP/TP-3/index.html",
  },
];
