"use client";

import { exo2, vollkorn } from "@/styles/fonts";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa"; 
import { RiInstagramFill } from "react-icons/ri";

const AboutUs = () => {
  const developers = [
    {
      name: "Dylan Server",
      role: "Frontend Developer",
      image: "/clients/avatar-she-another.webp",
      description: "React y diseño de interfaces de usuario.",
      github: "https://github.com/Bird",
      linkedin: "https://www.linkedin.com/in/mait%C3%A9-de-le%C3%B3n/",
      instagram: "https://www.instagram.com/birdie.borda/",
      globe: "https://www.hexagono.xyz/",
    },
    {
      name: "Rojo Server",
      role: "Frontend Developer",
      image: "/clients/avatar-he.webp",
      description: "React y diseño de interfaces de usuario.",
      github: "https://github.com/GRAMAPHENIA",
      linkedin: "https://www.linkedin.com/in/dicoratojuanpablo/",
      instagram: "https://www.instagram.com/gramaphenia/",
      globe: "https://www.hexagono.xyz/",
    },
  ];

  return (
    <section className="flex flex-col items-center mx-auto text-center">
      <div className="mx-auto px-6 max-w-7xl">
        {/* Developers Section */}
        <div className="mb-20">
          <h2
            className={`${vollkorn.className} text-4xl lg:text-7xl font-extrabold text-slate-800 dark:text-slate-200 mb-6 my-20`}
          >
            Trabajan en Hexágono
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 my-20 ">
            {developers.map((dev, index) => (
              <div key={index} className="">
                <Image
                  src={dev.image}
                  alt={dev.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 border-4 border-slate-300 dark:border-slate-500"
                />
                <h3
                  className={`${exo2.className} text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-2`}
                >
                  {dev.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  {dev.role}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {dev.description}
                </p>
                <div className="flex justify-center space-x-2 pt-4">
                  <Link
                    href={dev.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-hexagon dark:hover:text-slate-200  border p-4 rounded-full bg-slate-500/10 hover:bg-slate-500/20"
                  >
                    <FaGithub size={20} /> {/* Icono de Github */}
                  </Link>
                  <Link
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-hexagon dark:hover:text-slate-200 border p-4 rounded-full bg-slate-500/10 hover:bg-slate-500/20"
                  >
                    <FaLinkedin size={20} />{" "}
                    {/* Icono de LinkedIn con ExternalLink */}
                  </Link>
                  <Link
                    href={dev.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-hexagon dark:hover:text-slate-200  border p-4 rounded-full bg-slate-500/10 hover:bg-slate-500/20"
                  >
                    <RiInstagramFill size={20} /> {/* Icono de Twitter */}
                  </Link>
                  <Link
                    href={dev.globe}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-hexagon dark:hover:text-slate-200 border p-4 rounded-full bg-slate-500/10 hover:bg-slate-500/20"
                  >
                    <FaGlobe size={20} /> {/* Icono de Globe */}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
