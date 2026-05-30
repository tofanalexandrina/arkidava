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
      name: "description",
      type: "text",
    },
    {
      name: "thumbnail",
      type: "upload",
      relationTo: "media",
    },
  ],
};
