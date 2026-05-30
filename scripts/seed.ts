import { getPayload } from "payload";

const loadEnv = async () => {
  try {
    const nextEnv = await import("@next/env");
    const loadEnvConfig =
      nextEnv.default?.loadEnvConfig ?? nextEnv["module.exports"]?.loadEnvConfig;

    if (typeof loadEnvConfig === "function") {
      loadEnvConfig(process.cwd(), true);
      return;
    }
  } catch {
    // Best-effort env loading; continue if not available.
  }

  try {
    const dotenv = await import("dotenv");
    if (typeof dotenv.config === "function") {
      dotenv.config();
    }
  } catch {
    // No-op if dotenv is not installed.
  }
};

const seed = async () => {
  let payload: Awaited<ReturnType<typeof getPayload>> | undefined;

  try {
    await loadEnv();
    const { default: config } = await import("../payload.config.ts");
    payload = await getPayload({ config });

    // Add your project data here
    const projectsToCreate = [
      {
        name: "Marandi Restaurant",
        slug: "marandi-restaurant",
      },
      {
        name: "7 Rooms Penthouse",
        slug: "7-rooms-penthouse",
      },
      // Add more projects as needed
    ];

    for (const project of projectsToCreate) {
      const existingProject = await payload.find({
        collection: "projects",
        where: {
          slug: {
            equals: project.slug,
          },
        },
        limit: 1,
      });

      if (existingProject.docs.length === 0) {
        await payload.create({
          collection: "projects",
          data: project,
        });
        console.log(`✓ Created project: ${project.name}`);
      } else {
        console.log(`• Project already exists: ${project.name}`);
      }
    }

    console.log("✓ Seeding completed successfully!");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  } finally {
    if (payload) {
      await payload.destroy();
    }
    process.exit(0);
  }
};

seed();
