import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-[200vh] flex-col items-center bg-white text-zinc-900 pb-20 pt-30">
      {/*Image for testing navbar */}
      <div className="relative z-10 w-full px-6 h-[800px] overflow-hidden shadow-2xl">
        <Image
          src="/test-2.jpg"
          alt="Arkidava showcase"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="pt-24 md:pt-32 pb-12">
        <h1 className="text-4xl md:text-5xl tracking-widest font-light uppercase text-center">
          Arkidava
        </h1>
      </div>
    </main>
  );
}
