"use client";

import Image from "next/image";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

const servicesData = [
  {
    title: "Design & Proiectare",
    subtitle: "Transformăm ideile tale în spații funcționale și armonioase.",
    description:
      "Analizăm nevoile, stilul și spațiul disponibil pentru a crea soluții de mobilier adaptate perfect locuinței sau afacerii tale.",
    image: "/design-proiectare.jpg",
    align: "right",
  },
  {
    title: "Mobilă la Comandă",
    subtitle: "Fiecare piesă este creată special pentru spațiul tău.",
    description:
      "Realizăm mobilier personalizat din materiale atent alese, cu atenție la detalii, calitate și durabilitate.",
    image: "/mobila-la-comanda.jpg",
    align: "left",
  },
  {
    title: "Livrare & Montaj",
    subtitle: "Ne ocupăm de tot, până la ultimul detaliu.",
    description:
      "Transportăm și montăm mobilierul cu grijă, astfel încât tu să te bucuri de un rezultat impecabil, fără bătăi de cap.",
    image: "/montaj-profesional.jpg",
    align: "right",
  },
];

export default function Services() {
  const {
    ref: titleRef,
    inView: titleInView,
    alreadyVisible: titleAlready,
  } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      id="services"
      className="bg-white text-zinc-900 w-full py-12 px-4 md:px-12 overflow-hidden"
    >
      <div
        ref={titleRef}
        className={`max-w-7xl mx-auto mb-16 text-center reveal ${
          titleAlready
            ? "reveal-shown"
            : titleInView
              ? "animate-soft-reveal-up"
              : ""
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase text-zinc-800 transition-colors duration-300">
          Servicii
        </h2>
        <div className="w-16 h-[1px] bg-zinc-400 mx-auto mt-6"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-20">
        {servicesData.map((service, index) => (
          <ServiceRow key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}

function ServiceRow({
  service,
  index,
}: {
  service: (typeof servicesData)[number];
  index: number;
}) {
  const { ref, inView, alreadyVisible } = useScrollReveal({ threshold: 0.18 });
  const isImageRight = service.align === "right";
  const animationDelay = `${Math.min(index * 80, 160)}ms`;
  const shouldAnimate = inView && !alreadyVisible;

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-8 lg:gap-12 ${
        !isImageRight ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text Area */}
      <div
        className={`flex-1 w-full space-y-4 reveal ${
          alreadyVisible
            ? "reveal-shown"
            : inView
              ? "animate-soft-reveal-up"
              : ""
        }`}
        style={{
          animationDelay: shouldAnimate ? animationDelay : "0ms",
        }}
      >
        <h3 className="text-3xl md:text-4xl font-light tracking-wider uppercase text-zinc-800">
          {service.title}
        </h3>
        <p className="text-xl text-zinc-600 font-light mt-2">
          {service.subtitle}
        </p>
        <div className="w-12 h-[1px] bg-zinc-300 my-4"></div>
        <p className="text-zinc-500 leading-relaxed max-w-lg font-light">
          {service.description}
        </p>
      </div>

      {/* Image Area */}
      <div
        className={`group flex-1 w-full relative aspect-[4/3] bg-zinc-100 overflow-hidden reveal ${
          alreadyVisible
            ? "reveal-shown"
            : inView
              ? "animate-soft-image-reveal"
              : ""
        }`}
        style={{
          animationDelay: shouldAnimate ? animationDelay : "0ms",
        }}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover object-center transition-transform duration-[3000ms] ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
