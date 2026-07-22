import type { Image, Project, Video } from "@/payload-types";

export type SerializedFeaturedImage = {
  id: number;
  alt: string;
  createdAt: string;
  filename: string | null | undefined;
  filesize: number | null | undefined;
  focalX: number | null | undefined;
  focalY: number | null | undefined;
  height: number | null | undefined;
  mimeType: string | null | undefined;
  prefix: string | null | undefined;
  sizes: Image["sizes"];
  thumbnailURL: string | null | undefined;
  updatedAt: string;
  url: string | null | undefined;
  width: number | null | undefined;
};

export type SerializedProjectVideo = {
  id: number;
  alt: string;
  createdAt: string;
  filename: string | null | undefined;
  filesize: number | null | undefined;
  focalX: number | null | undefined;
  focalY: number | null | undefined;
  height: number | null | undefined;
  mimeType: string | null | undefined;
  prefix: string | null | undefined;
  thumbnailURL: string | null | undefined;
  updatedAt: string;
  url: string | null | undefined;
  width: number | null | undefined;
  posterImage: SerializedFeaturedImage | number | null | undefined;
};

export type SerializedProjectGalleryItem =
  | {
      relationTo: "images";
      value: SerializedFeaturedImage;
    }
  | {
      relationTo: "videos";
      value: SerializedProjectVideo;
    };

export type SerializedProject = {
  id: number;
  name: string;
  slug: string;
  featuredImage: SerializedFeaturedImage | null;
  gallery: SerializedProjectGalleryItem[] | null;
};

function serializeFeaturedImage(image: Image): SerializedFeaturedImage {
  return {
    id: image.id,
    alt: image.alt,
    createdAt: image.createdAt,
    filename: image.filename,
    filesize: image.filesize,
    focalX: image.focalX,
    focalY: image.focalY,
    height: image.height,
    mimeType: image.mimeType,
    prefix: image.prefix,
    sizes: image.sizes,
    thumbnailURL: image.thumbnailURL,
    updatedAt: image.updatedAt,
    url: image.url,
    width: image.width,
  };
}

function serializeVideo(video: Video): SerializedProjectVideo {
  const posterImage =
    video.posterImage && typeof video.posterImage === "object"
      ? serializeFeaturedImage(video.posterImage)
      : (video.posterImage ?? null);

  return {
    id: video.id,
    alt: video.alt,
    createdAt: video.createdAt,
    filename: video.filename,
    filesize: video.filesize,
    focalX: video.focalX,
    focalY: video.focalY,
    height: video.height,
    mimeType: video.mimeType,
    prefix: video.prefix,
    thumbnailURL: video.thumbnailURL,
    updatedAt: video.updatedAt,
    url: video.url,
    width: video.width,
    posterImage,
  };
}

export function serializeProject(project: Project): SerializedProject {
  const featuredImage =
    project.featuredImage && typeof project.featuredImage === "object"
      ? serializeFeaturedImage(project.featuredImage)
      : null;
  const gallery =
    project.gallery?.map((item) => {
      if (item.relationTo === "images") {
        return {
          relationTo: "images" as const,
          value: serializeFeaturedImage(item.value as Image),
        };
      }

      return {
        relationTo: "videos" as const,
        value: serializeVideo(item.value as Video),
      };
    }) ?? null;

  return {
    id: project.id,
    name: project.name,
    slug: project.slug,
    featuredImage,
    gallery,
  };
}

export function serializeProjects(projects: Project[]): SerializedProject[] {
  return projects.map(serializeProject);
}
