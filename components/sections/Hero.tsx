import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-dvh w-full overflow-hidden group">
      {/* Background image */}
      <Image
        src="/test-2-hq.png"
        alt="Arkidava showcase"
        fill
        className="object-cover object-center transition-transform duration-[4000ms] ease-out group-hover:scale-105"
        priority
      />

      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Text on top */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 space-y-5 animate-slide-right-in">
        <h1 className="text-5xl md:text-7xl tracking-wider font-light text-white">
          ARKIDAVA MOBILI
        </h1>
        <p className="text-lg md:text-xl text-white/80 font-light">
          Soluții personalizate pentru interioare moderne și rafinate.
        </p>
      </div>
    </section>
  );
}
