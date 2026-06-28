import Image from "next/image";

const servicesData = [
  {
    title: "Design & Proiectare",
    subtitle: "Transformăm ideile tale în spații funcționale și armonioase.",
    description: "Analizăm nevoile, stilul și spațiul disponibil pentru a crea soluții de mobilier adaptate perfect locuinței sau afacerii tale.",
    image: "/design-proiectare.jpg", 
    align: "right",
  },
  {
    title: "Mobilă la Comandă",
    subtitle: "Fiecare piesă este creată special pentru spațiul tău.",
    description: "Realizăm mobilier personalizat din materiale atent alese, cu atenție la detalii, calitate și durabilitate.",
    image: "/mobila-la-comanda.jpg",
    align: "left",
  },
  {
    title: "Livrare & Montaj",
    subtitle: "Ne ocupăm de tot, până la ultimul detaliu.",
    description: "Transportăm și montăm mobilierul cu grijă, astfel încât tu să te bucuri de un rezultat impecabil, fără bătăi de cap.",
    image: "/montaj-profesional.jpg",
    align: "right",
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-white text-zinc-900 w-full py-12 px-4 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase text-zinc-800 transition-colors duration-300">
          Servicii
        </h2>
        <div className="w-16 h-[1px] bg-zinc-400 mx-auto mt-6"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-20">
        {servicesData.map((service, index) => {
          const isImageRight = service.align === "right";

          return (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-8 lg:gap-12 ${
                !isImageRight ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Area */}
              <div className="flex-1 w-full space-y-4">
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
              <div className="flex-1 w-full relative aspect-[4/3] bg-zinc-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
