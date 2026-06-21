"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projectsRezidential = [
  { title: "Bucătărie", url: "#", image: "/test.jpg" },
  { title: "Baie", url: "#", image: "/test-2.jpg" },
  { title: "Dressing", url: "#", image: "/test.jpg" },
  { title: "Living", url: "#", image: "/test-2.jpg" },
];

const projectsIndustrial = [
  { title: "Birouri", url: "#", image: "/test-2.jpg" },
  { title: "Bucătărie", url: "#", image: "/test.jpg" },
  { title: "Baie", url: "#", image: "/test-2.jpg" }
];

export default function Portfolio() {
  const [resVisible, setResVisible] = useState(false);
  const [indVisible, setIndVisible] = useState(false);
  const resRef = useRef<HTMLDivElement>(null);
  const indRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const resObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setResVisible(true);
        resObserver.disconnect();
      }
    }, observerOptions);

    const indObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIndVisible(true);
        indObserver.disconnect();
      }
    }, observerOptions);

    if (resRef.current) resObserver.observe(resRef.current);
    if (indRef.current) indObserver.observe(indRef.current);

    return () => {
      resObserver.disconnect();
      indObserver.disconnect();
    };
  }, []);

  return (
    <section className="bg-white text-zinc-900 w-full py-24 px-4 md:px-12 overflow-hidden">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto mb-24 text-center">
        <Link href={"#"} className="text-4xl md:text-5xl font-light tracking-widest uppercase text-zinc-600 hover:text-zinc-900 transition-colors duration-300">
          Portofoliu
        </Link>
        <div className="w-16 h-[1px] bg-zinc-400 mx-auto mt-6"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-32">
        {/* REZIDENTIAL */}
        <div
          ref={resRef}
          className={`space-y-10 transition-opacity duration-1000 ${
            resVisible ? "opacity-100 animate-slide-right-in-scroll" : "opacity-0"
          }`}
        >
          <div className="text-left border-b border-zinc-200 pb-4">
            <Link href={"#"} className="text-3xl md:text-4xl font-light tracking-wider uppercase text-zinc-500 hover:text-zinc-900 transition-colors duration-300">
              Rezidențial
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectsRezidential.map((p, idx) => (
              <ProjectCard key={idx} title={p.title} url={p.url} image={p.image} />
            ))}
          </div>
        </div>

        {/* INDUSTRIAL */}
        <div
          ref={indRef}
          className={`space-y-10 transition-opacity duration-1000 ${
            indVisible ? "opacity-100 animate-slide-left-in-scroll" : "opacity-0"
          }`}
        >
          <div className="text-right border-b border-zinc-200 pb-4">
            <Link href={"#"} className="text-3xl md:text-4xl font-light tracking-wider uppercase text-zinc-500 hover:text-zinc-900 transition-colors duration-300">
              Industrial
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsIndustrial.map((p, idx) => (
              <ProjectCard key={idx} title={p.title} url={p.url} image={p.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, url, image }: { title: string; url: string; image: string }) {
  return (
    <Link href={url} className="group relative block w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-zinc-100">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-center transition-transform duration-[2000ms] ease-out group-hover:scale-105"
      />
      
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Title at the bottom */}
      <div className="absolute bottom-0 left-0 w-full p-6 text-white flex flex-col justify-end">
        <h4 className="text-lg md:text-xl font-light tracking-widest uppercase">{title}</h4>
        
        {/* Animated Discover label */}
        <div className="mt-4 text-xs font-light text-white/80 uppercase tracking-[0.2em] flex items-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
          <span>Descoperă</span>
          <span className="w-12 h-[1px] bg-white/80"></span>
        </div>
      </div>
    </Link>
  );
}