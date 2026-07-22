import { getAllProjectsSerialized } from "@/lib/payload/projects";
import { Suspense } from "react";
import ProjectsGridSkeleton from "@/components/sections/ProjectsGridSkeleton";
import ProjectsGrid from "@/components/sections/ProjectsGrid";

export default async function ProjectsPage() {
  const projects = await getAllProjectsSerialized();

  return (
    <main className="min-h-screen bg-white">
      <Suspense fallback={<ProjectsGridSkeleton />}>
        <ProjectsGrid projects={projects} />
      </Suspense>
    </main>
  );
}
