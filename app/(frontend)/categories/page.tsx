import configPromise from "@payload-config";
import { getPayload } from "payload";
import type { Category, Image as ImageType } from "@/payload-types";

export default async function CategoriesTestPage() {
  // 1. Get the Payload instance. This is the local API — no HTTP request,
  //    it talks directly to the database in the same process.
  const payload = await getPayload({ config: configPromise });

  // 2. Fetch all categories.
  //    depth: 1 tells Payload to populate one level of relationships,
  //    meaning featuredImage and gallery items become full objects
  //    (with url, width, height, etc.) instead of just IDs.
  const { docs: categories } = await payload.find({
    collection: "categories",
    depth: 1,
  });

  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <h1 className="text-3xl font-light tracking-wider mb-10">
        Categories — Data Test
      </h1>

      {categories.length === 0 && (
        <p className="text-zinc-400">
          No categories found. Create some in Payload admin first.
        </p>
      )}

      <div className="flex flex-col gap-16">
        {categories.map((category) => {
          // featuredImage is a full Image object because depth: 1 populated it
          const featuredImage = category.featuredImage as
            | ImageType
            | null
            | undefined;

          // gallery is an array of { relationTo: 'images' | 'videos', value: Image | Video }
          const gallery = category.gallery as
            | { relationTo: "images" | "videos"; value: ImageType }[]
            | null
            | undefined;

          return (
            <div
              key={category.id}
              className="border border-zinc-200 rounded-2xl p-8 space-y-6"
            >
              {/* Basic fields */}
              <div className="space-y-1">
                <h2 className="text-xl font-medium">{category.name}</h2>
                <p className="text-xs text-zinc-400 uppercase tracking-widest">
                  {category.type}
                </p>
                {category.description && (
                  <p className="text-zinc-500 text-sm">
                    {category.description}
                  </p>
                )}
              </div>

              {/* Featured Image */}
              {featuredImage?.url && (
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-zinc-400">
                    Featured Image
                  </p>
                  {/* Using a plain <img> here intentionally — this is a test page only.
                      In production use Next.js <Image> with the R2 domain whitelisted in next.config.ts */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featuredImage.url}
                    alt={featuredImage.alt}
                    className="w-full max-w-sm rounded-xl object-cover aspect-video"
                  />
                  <p className="text-xs text-zinc-400 break-all">
                    URL: {featuredImage.url}
                  </p>
                </div>
              )}

              {/* Gallery */}
              {gallery && gallery.length > 0 && (
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-widest text-zinc-400">
                    Gallery ({gallery.length} items)
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {gallery.map((item, index) => {
                      if (item.relationTo === "images" && item.value?.url) {
                        return (
                          <div key={index} className="space-y-1">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={item.value.url}
                              alt={item.value.alt}
                              className="w-40 h-28 rounded-lg object-cover"
                            />
                            <p className="text-xs text-zinc-300 w-40 truncate">
                              {item.value.url}
                            </p>
                          </div>
                        );
                      }

                      if (item.relationTo === "videos" && item.value?.url) {
                        return (
                          <div key={index} className="space-y-1">
                            <video
                              src={item.value.url}
                              controls
                              className="w-40 h-28 rounded-lg object-cover"
                            />
                            <p className="text-xs text-zinc-300 w-40 truncate">
                              {item.value.url}
                            </p>
                          </div>
                        );
                      }

                      return null;
                    })}
                  </div>
                </div>
              )}

              {/* Raw JSON dump for debugging */}
              <details className="text-xs">
                <summary className="cursor-pointer text-zinc-400 hover:text-zinc-600">
                  Raw data (debug)
                </summary>
                <pre className="mt-2 bg-zinc-50 rounded-lg p-4 overflow-auto text-zinc-500">
                  {JSON.stringify(category, null, 2)}
                </pre>
              </details>
            </div>
          );
        })}
      </div>
    </main>
  );
}
