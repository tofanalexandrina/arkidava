import Hero from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <main className="bg-white text-zinc-900">
      <Hero />

      {/* Content below hero — image does not repeat */}
      <section className="min-h-screen px-4 md:px-12 py-20">
        {/* Future page content goes here */}
      </section>
    </main>
  );
}
