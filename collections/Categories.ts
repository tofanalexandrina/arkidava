import { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  dbName: 'categories',
  labels: {
    singular: 'Categorie',
    plural: 'Categorii',
  },
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
    },
    {
      name: "type",
      type: "radio",
      required: true,
      options: [
        { label: "Rezidential", value: "rezidential" },
        { label: "Industrial", value: "industrial" },
      ],
      defaultValue: "rezidential",
      admin: {
        layout: "horizontal",
      },
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "images",
    },
    {
      name: "gallery",
      type: "relationship",
      relationTo: ["images", "videos"],
      hasMany: true,
      admin: {
        description: "Select multiple images or videos for the category gallery.",
      },
    },
  ],
};
