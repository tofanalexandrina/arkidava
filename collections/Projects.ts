import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "images",
      required: false,
    },
    {
      name: "gallery",
      type: "relationship",
      relationTo: ["images", "videos"],
      hasMany: true,
      admin: {
        description: "Select multiple images or videos for the project gallery.",
      },
    },
  ],
};
