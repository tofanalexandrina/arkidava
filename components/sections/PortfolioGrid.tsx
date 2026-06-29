"use client";

import Image from "next/image";
import Link from "next/link";
import type { SerializedCategory } from "@/lib/payload/serializers/categories";

type Props = {
  categories: SerializedCategory[];
};

export default function PortfolioGrid({ categories }: Props) {
  const rezidential = categories.filter((c) => c.type === "rezidential");
  const industrial = categories.filter((c) => c.type === "industrial");

  return (
    <section className="bg-white text-zinc-900 w-full py-24 px-4 md:px-12">
      {/* Page title */}
      <div className="max-w-7xl mx-auto mb-24 text-center">
        <h1 className="text-4xl md:text-5xl font-light tracking-widest uppercase text-zinc-800">
          Portofoliu
        </h1>
        <div className="w-16 h-px bg-zinc-400 mx-auto mt-6" />
      </div>

      <div className="max-w-7xl mx-auto space-y-24">
        {/* Rezidential */}
        {rezidential.length > 0 && (
          <div className="space-y-10">
            <div className="border-b border-zinc-200 pb-4">
              <h2 className="text-3xl md:text-4xl font-light tracking-wider uppercase text-zinc-500">
                Rezidențial
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {rezidential.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        )}

        {/* Industrial */}
        {industrial.length > 0 && (
          <div className="space-y-10">
            <div className="border-b border-zinc-200 pb-4 text-right">
              <h2 className="text-3xl md:text-4xl font-light tracking-wider uppercase text-zinc-500">
                Industrial
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {industrial.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function CategoryCard({ category }: { category: SerializedCategory }) {
  return (
    <Link
      href={`/portfolio/category/${category.slug}`}
      className="group relative block w-full aspect-3/4 overflow-hidden bg-zinc-100"
    >
      {category.featuredImage?.url ? (
        <Image
          src={category.featuredImage.url}
          alt={category.featuredImage.alt}
          fill
          className="object-cover object-center transition-transform duration-2000 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      ) : (
        // No image yet — placeholder matching card shape
        <div className="absolute inset-0 bg-zinc-200" />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Category name */}
      <div className="absolute bottom-0 left-0 w-full p-6 text-white">
        <h3 className="text-lg md:text-xl font-light tracking-widest uppercase">
          {category.name}
        </h3>
        <div className="mt-4 text-xs font-light text-white/80 uppercase tracking-[0.2em] flex items-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
          <span>Descoperă</span>
          <span className="w-12 h-px bg-white/80" />
        </div>
      </div>
    </Link>
  );
}
