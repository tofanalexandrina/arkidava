"use client";

import Image from "next/image";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

export default function AboutUs() {
  const {
    ref: titleRef,
    inView: titleInView,
    alreadyVisible: titleAlready,
  } = useScrollReveal({ threshold: 0.2 });

  const { ref, inView, alreadyVisible } = useScrollReveal({ threshold: 0.18 });
  const shouldAnimate = inView && !alreadyVisible;

  return (
    <section
      id="about"
      className="bg-white text-zinc-900 w-full py-24 px-4 md:px-12 overflow-hidden"
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
          Despre noi
        </h2>
        <div className="w-16 h-[1px] bg-zinc-400 mx-auto mt-6"></div>
      </div>

      <div
        ref={ref}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-12"
      >
        {/* Image Area - Left Side */}
        <div
          className={`group flex-1 w-full relative aspect-[4/3] bg-zinc-100 overflow-hidden reveal ${
            alreadyVisible
              ? "reveal-shown"
              : inView
                ? "animate-soft-image-reveal"
                : ""
          }`}
        >
          <Image
            src="/proiect-vs-realitate.jpg"
            alt="Arkidava Mobili - Despre noi"
            fill
            className="object-cover object-center transition-transform duration-[3000ms] ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div
          className={`flex-1 w-full space-y-4 reveal ${
            alreadyVisible
              ? "reveal-shown"
              : inView
                ? "animate-soft-reveal-up"
                : ""
          }`}
          style={{
            animationDelay: shouldAnimate ? "120ms" : "0ms",
          }}
        >
          <p className="text-zinc-700 leading-relaxed font-light">
            La <strong>Arkidava Mobili</strong>, realizăm mobilier la comandă
            care îmbină designul modern, funcționalitatea și atenția la detalii.
            Fiecare proiect este conceput pentru a răspunde nevoilor și stilului
            fiecărui client, folosind materiale de calitate și soluții
            personalizate.
          </p>

          <div className="w-12 h-[1px] bg-zinc-300 my-4"></div>

          <p className="text-zinc-700 leading-relaxed font-light">
            De la bucătării și dressinguri până la mobilier pentru living,
            dormitor sau birou, transformăm fiecare spațiu într-un loc practic,
            elegant și durabil. Ne dedicăm fiecărei etape a proiectului, de la
            idee și proiectare până la execuție și montaj, pentru a oferi
            mobilier realizat cu grijă și profesionalism.
          </p>

          <div className="w-12 h-[1px] bg-zinc-300 my-4"></div>

          <p className="text-zinc-600 font-light italic">
            <strong>Arkidava Mobili</strong> – mobilier creat pentru spații care
            inspiră confort și rafinament.
          </p>
        </div>
      </div>
    </section>
  );
}
