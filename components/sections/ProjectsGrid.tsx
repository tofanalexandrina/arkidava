"use client";

import Image from "next/image";
import Link from "next/link";
import type { SerializedProject } from "@/lib/payload/serializers/projects";

type Props = {
  projects: SerializedProject[];
};

export default function ProjectsGrid({ projects }: Props) {
  return (
    <section className="bg-white text-zinc-900 w-full py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto mb-24 text-center">
        <h1 className="text-4xl md:text-5xl font-light tracking-widest uppercase text-zinc-800">
          Proiecte
        </h1>
        <div className="w-16 h-px bg-zinc-400 mx-auto mt-6" />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: SerializedProject }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block w-full aspect-[3/4] overflow-hidden bg-zinc-100"
    >
      {project.featuredImage?.url ? (
        <Image
          src={project.featuredImage.url}
          alt={project.featuredImage.alt || project.name}
          fill
          className="object-cover object-center transition-transform duration-[2000ms] ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      ) : (
        <div className="absolute inset-0 bg-zinc-200" />
      )}

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 w-full p-6 text-white">
        <h3 className="text-lg md:text-xl font-light tracking-widest uppercase">
          {project.name}
        </h3>
        <div className="mt-4 text-xs font-light text-white/80 uppercase tracking-[0.2em] flex items-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
          <span>Descoperă</span>
          <span className="w-12 h-px bg-white/80" />
        </div>
      </div>
    </Link>
  );
}
