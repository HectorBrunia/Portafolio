import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SERVICE_ID = "service_tve2nrj";
const TEMPLATE_ID = "template_ggirzir";
const PUBLIC_KEY = "MbiAbGPFHhaTGc8nN";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    if (!formRef.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <div className="w-[300px] lg:w-[900px] mx-auto flex flex-col lg:flex-row p-4 mb-20 border rounded shadow">
      <div className="flex flex-col gap-5 text-center text-white  lg:w-1/2 p-4 ">
        <h1 className="p-4">Contactame</h1>
        <a
          className="flex items-center flex-row gap-10"
          target="_blank"
          href="https://github.com/HectorBrunia"
        >
          <FaGithub color="white" size={40} />
          <p>GitHub</p>
        </a>
        <a
          className="flex items-center gap-10 flex-row"
          target="_blank"
          href="https://www.linkedin.com/in/h%C3%A9ctor-bru%C3%B1a/"
        >
          <FaLinkedin color="white" size={40} />
          <p>LinkedIn</p>
        </a>
        <a
          className="flex items-center gap-10 flex-row"
          target="_blank"
          href="mailto:hectorbct.2002@gmail.com"
        >
          <SiGmail color="white" size={40} />
          <p>Email</p>
        </a>
      </div>
      <div className="lg:h-80 lg:w-1 h-1 bg-red-800"> </div>
      <div className=" p-4 ">
        <h1 className="p-4">Escríbeme</h1>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 text-white"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              required
              className="border p-2 rounded bg-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Tu correo"
              required
              className="border p-2 rounded bg-black"
            />
          </div>
          <textarea
            name="message"
            placeholder="Tu mensaje"
            required
            className="border p-2 rounded bg-black"
          />
          <button
            type="submit"
            className="bg-red-900 text-white p-2 rounded hover:bg-red-950"
          >
            {status === "sending" ? "Enviando..." : "Enviar"}
          </button>
          {status === "success" && (
            <p className="text-green-600">Mensaje enviado con éxito ✅</p>
          )}
          {status === "error" && (
            <p className="text-red-600">Error al enviar el mensaje ❌</p>
          )}
        </form>
      </div>
    </div>
  );
}
