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
    github: "https://github.com/HectorBrunia/InterfacesTP/tree/master/TP-3",
    link: "https://hectorbrunia.github.io/InterfacesTP/TP-3/index.html",
  },
  {
    id: 2,
    nombre: "Catalogo de celulares",
    img: ["images/siphone.png", "images/siphone_1.png"],
    descripcion:
      "Pagina web de venta de celulares utilizando angular con typescript y utilizando una api (MockAPI) para obtener los datos de los celulares.",
    tecnologias: ["Angular", "Typescript"],
    github: "https://github.com/HectorBrunia/Angular",
    link: "https://stackblitz.com/edit/angular-ivy-yzmvuo?authuser=1&file=src%2Fapp%2Fphone-data.service.ts",
  },
  {
    id: 3,
    nombre: "Página Tranquiliza.360° desarrollado en PLADEMA ",
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
    github: "https://github.com/Sergio-Dannunzio/Tranquiliza360-PPS",
    link: "https://www.tranquiliza360.com.ar/",
  },
  {
    id: 4,
    nombre: "Página Ares Steel Frame",
    img: [
      "images/ares_1.png",
      "images/ares_2.png",
      "images/ares_3.png",
      "images/ares_4.png",
    ],
    descripcion:
      "desarrolle una página web para la empresa Ares Steel Frame, una empresa de construcción en steel framing. La página cuenta con un diseño atractivo y moderno, dos formulario de contacto. La pagina fue desarrollada en React y Tailwind",
    tecnologias: ["React", "Tailwind", "CSS", "Javascript", "Nodejs"],
    github: "https://github.com/HectorBrunia/Ares-Steel-Frame",
    link: "https://aressteelframe.com/",
  },
];

export const experiencias = [
  {
    title: "Desarrollador Full Stack (Pasantía)",
    company: "NOS USINA DE IDEAS",
    date: "Oct 2024 – Mar 2025",
    description:
      "Pasantía profesional desarrollada en NOS USINA DE IDEAS, un consultorio de Neurorehabilitación Integral de Adultos, encolaboración con el laboratorio PLADEMA. El propósito principal fue diseñar y desarrollar una página web para Tranquiliza.360°, un producto destinado a mejorar la neurorehabilitación de personas mayores mediante experiencias inmersivas.",
  },
  {
    title: "Desarrollador Full Stack (Freelance)",
    company: "Ares Steel Frame",
    date: "Feb 2025 – Abr 2025",
    description:
      "Proyecto freelance: Desarrollo completo del sitio web institucional para una empresa de construcción en steel framing.",
  },
];

export const estudios = [
  {
    title: "Técnico en informática personal y profesional",
    company: "EEST N° 2  ING. FELIPE SENILLOSA",
    date: "mar. 2014 - dic. 2020",
    description:
      "durante mi estancia en la escuela secundaria Ing. Felipe Senillosa, desarrolle un interes por el gaming lo que me llevo a investigar y desarrollar habilidades en el área y elejir la especialidad de informática, donde encontre una pasion por la programación",
  },
  {
    title: "Técnico universitario en desarrollo de aplicaciones informáticas",
    company:
      "Universidad Nacional del Centro de la Provincia de Buenos Aires “UNICEN”",
    date: "2021 – 2025",
    description:
      "En mi formación académica he adquirido habilidades para desarrollar soluciones efectivas utilizando diversas tecnologías, una sólida capacidad para el trabajo en equipo y un entusiasmo constante por aprender y fortalecer mis conocimientos, siempre buscando aportar valor en cada proyecto",
  },
  {
    title: "Curso React y Next.js: Aprende Frontend y Backend FullStack",
    company: "Udemy",
    date: "2024 - 2025",
    description:
      "Curso de React y Next.js, donde aprendi a desarrollar aplicaciones web completas utilizando estas tecnologías y diversar bibliotecas y servicios como firebase, tailwind, render, cludynari, entre otros.",
  },
];
