import type { Category } from "@/payload-types";
import { getPayloadClient } from "@/lib/payload/client";
import {
  serializeCategories,
  serializeCategory,
  type SerializedCategory,
} from "@/lib/payload/serializers/categories";

export async function getAllCategories() {
  const payload = await getPayloadClient();

  const { docs: categories } = await payload.find({
    collection: "categories",
    depth: 1,
  });

  return categories;
}

export async function getCategoryById(id: Category["id"]) {
  const payload = await getPayloadClient();

  const category = await payload.findByID({
    collection: "categories",
    depth: 1,
    id,
  });

  return category;
}

// these functions are used to serialize the data for the frontend, so that we can send it to the client without sending the entire Payload object.
// also they are COMPLETELY OPTIONAL
export async function getAllCategoriesSerialized(): Promise<SerializedCategory[]> {
  const categories = await getAllCategories();
  return serializeCategories(categories);
}

export async function getCategoryByIdSerialized(
  id: Category["id"],
): Promise<SerializedCategory | null> {
  const category = await getCategoryById(id);
  return category ? serializeCategory(category) : null;
}