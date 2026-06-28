import type { Category, Image } from "@/payload-types";

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

export type SerializedCategory = {
  id: number;
  name: string;
  slug: string;
  type: Category["type"];
  featuredImage: SerializedFeaturedImage | null;
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

export function serializeCategory(category: Category): SerializedCategory {
  const featuredImage =
    category.featuredImage && typeof category.featuredImage === "object"
      ? serializeFeaturedImage(category.featuredImage)
      : null;

  return {
    id: category.id,
    name: category.name,
    slug: category.slug,
    type: category.type,
    featuredImage,
  };
}

export function serializeCategories(categories: Category[]): SerializedCategory[] {
  return categories.map(serializeCategory);
}
