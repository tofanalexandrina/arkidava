import type { Project } from "@/payload-types";
import { getPayloadClient } from "@/lib/payload/client";
import {
  serializeProjects,
  serializeProject,
  type SerializedProject,
} from "@/lib/payload/serializers/projects";

export async function getAllProjects() {
  const payload = await getPayloadClient();

  const { docs: projects } = await payload.find({
    collection: "projects",
    depth: 1,
  });
  return projects;
}

export async function getProjectById(id: Project["id"]) {
  const payload = await getPayloadClient();

  const project = await payload.findByID({
    collection: "projects",
    depth: 1,
    id,
  });
  return project;
}

//serialization -- optional
export async function getAllProjectsSerialized(): Promise<SerializedProject[]> {
  const projects = await getAllProjects();
  return serializeProjects(projects);
}

export async function getProjectByIdSerialized(
  id: Project["id"],
): Promise<SerializedProject | null> {
  const project = await getProjectById(id);
  return project ? serializeProject(project) : null;
}
