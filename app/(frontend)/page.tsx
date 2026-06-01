import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-[200vh] flex-col items-center bg-white text-zinc-900 pb-20 pt-16">
      <div className="w-full max-w-[1400px] px-4 md:px-12 flex flex-col items-center">
        <div className="pt-16 pb-12 md:pt-20 md:pb-16 text-center space-y-5 max-w-3xl">
          <h1 className="text-5xl md:text-7xl tracking-wider font-light text-zinc-900">
            ARKIDAVA MOBILI
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 font-light">
            Soluții personalizate pentru interioare moderne și rafinate.
          </p>
        </div>
        <div className="relative z-10 w-full h-[60vh] md:h-[75vh] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-zinc-900/5 group bg-white">
          <Image
            src="/test-2.jpg"
            alt="Arkidava showcase"
            fill
            className="object-cover object-center transition-transform duration-[2s] ease-out group-hover:scale-105"
            priority
          />
        </div>
        
      </div>
    </main>
  );
}
