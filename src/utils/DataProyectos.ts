export interface proyecto {
  id: number;
  nombre: string;
  img: string;
  descripcion: string;
  tecnologias: string[];
  github: string;
}

export const proyectos = [
  {
    id: 1,
    nombre: "Elden Ring",
    img: "images/EldenRingHome.png",
    descripcion:
      "Juego de rol en primera persona diseñado por el estudio Aires.",
    tecnologias: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/eldenring/eldenring",
  },
  {
    id: 2,
    nombre: "Pagina de juegos",
    img: "images/SiphoneHome.png",
    descripcion: "Pagina web con varios juegos",
    tecnologias: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/games-page",
  },
  {
    id: 3,
    nombre: "Portfolio",
    img: "images/ElenemigosHome.png",
    descripcion: "Mi portafolio web",
    tecnologias: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/portfolio-web",
  },
];
