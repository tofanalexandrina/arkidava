"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

const projectsRezidential = [
  {
    title: "Bucătărie",
    url: "/portfolio/residential/kitchen",
    image: "/test.jpg",
  },
  {
    title: "Baie",
    url: "/portfolio/residential/bathroom",
    image: "/test-2.jpg",
  },
  {
    title: "Dressing",
    url: "/portfolio/residential/dressing",
    image: "/test.jpg",
  },
  {
    title: "Living",
    url: "/portfolio/residential/living",
    image: "/test-2.jpg",
  },
];

const projectsIndustrial = [
  {
    title: "Birouri",
    url: "/portfolio/industrial/offices",
    image: "/test-2.jpg",
  },
  {
    title: "Bucătărie",
    url: "/portfolio/industrial/kitchen",
    image: "/test.jpg",
  },
  {
    title: "Baie",
    url: "/portfolio/industrial/bathroom",
    image: "/test-2.jpg",
  },
];

export default function Portfolio() {
  const {
    ref: resRef,
    inView: resInView,
    alreadyVisible: resAlready,
  } = useScrollReveal({ threshold: 0.1, rootMargin: "0px" });

  const {
    ref: indRef,
    inView: indInView,
    alreadyVisible: indAlready,
  } = useScrollReveal({ threshold: 0.1, rootMargin: "0px" });

  return (
    <section className="bg-white text-zinc-900 w-full py-24 px-4 md:px-12 overflow-hidden">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <Link
          href="#"
          className="text-4xl md:text-5xl font-light tracking-widest uppercase text-zinc-600 hover:text-zinc-900 transition-colors duration-300"
        >
          Portofoliu
        </Link>
        <div className="w-16 h-[1px] bg-zinc-400 mx-auto mt-6"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-32">
        {/* REZIDENTIAL */}
        <div ref={resRef} className="space-y-10">
          <div className="text-left border-b border-zinc-200 pb-4">
            <Link
              href={"/portfolio/residential"}
              className="text-3xl md:text-4xl font-light tracking-wider uppercase text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              Rezidențial
            </Link>
          </div>

          <div
            className={`space-y-10 reveal ${
              resAlready
                ? "reveal-shown"
                : resInView
                  ? "animate-slide-right-in-scroll"
                  : ""
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectsRezidential.map((p, idx) => (
                <ProjectCard
                  key={idx}
                  title={p.title}
                  url={p.url}
                  image={p.image}
                />
              ))}
            </div>
          </div>
        </div>

        {/* INDUSTRIAL */}
        <div ref={indRef} className="space-y-10">
          <div className="text-right border-b border-zinc-200 pb-4">
            <Link
              href={"/portfolio/industrial"}
              className="text-3xl md:text-4xl font-light tracking-wider uppercase text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              Industrial
            </Link>
          </div>

          <div
            className={`space-y-10 reveal ${
              indAlready
                ? "reveal-shown"
                : indInView
                  ? "animate-slide-left-in-scroll"
                  : ""
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsIndustrial.map((p, idx) => (
                <ProjectCard
                  key={idx}
                  title={p.title}
                  url={p.url}
                  image={p.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  url,
  image,
}: {
  title: string;
  url: string;
  image: string;
}) {
  return (
    <Link
      href={url}
      className="group relative block w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-zinc-100"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-center transition-transform duration-[2000ms] ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute bottom-0 left-0 w-full p-6 text-white flex flex-col justify-end">
        <h4 className="text-lg md:text-xl font-light tracking-widest uppercase">
          {title}
        </h4>

        <div className="mt-4 text-xs font-light text-white/80 uppercase tracking-[0.2em] flex items-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
          <span>Descoperă</span>
          <span className="w-12 h-[1px] bg-white/80"></span>
        </div>
      </div>
    </Link>
  );
}
