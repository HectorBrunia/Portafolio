import { useEffect, useState } from "react";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("sobreMi");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "sobreMi", label: "Sobre mí" },
    { id: "proyectos", label: "Proyectos" },
    { id: "estudios", label: "Estudios" },
  ];

  return (
    <nav className="z-30 w-3/4 xl:w-1/3 fixed top-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-md text-white border border-gray-600 rounded-full md:px-6 py-2 shadow-md">
      <ul className="flex items-center justify-center gap-6 md:text-lg text-sm font-medium">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`px-3 py-1 rounded-full transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-resaltado text-black shadow"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
