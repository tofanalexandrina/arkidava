// Server component — no "use client" needed, no interactivity required.
// This is the fallback shown by <Suspense> in page.tsx while categories are being fetched.

const REZIDENTIAL_COUNT = 5;
const INDUSTRIAL_COUNT = 5;

function SkeletonCard() {
  return (
    <div className="relative w-full aspect-3/4 bg-zinc-100 overflow-hidden">
      <div className="absolute inset-0 animate-pulse bg-linear-to-r from-zinc-100 via-zinc-200 to-zinc-100 bg-size-[400%_100%]" />
      {/* Name placeholder strip at bottom */}
      <div className="absolute bottom-0 left-0 w-full p-6">
        <div className="h-4 w-2/3 bg-zinc-300/60 animate-pulse rounded" />
      </div>
    </div>
  );
}

function SkeletonSection({
  count,
  titleWidth,
  align = "left",
}: {
  count: number;
  titleWidth: string;
  align?: "left" | "right";
}) {
  return (
    <div className="space-y-10">
      <div
        className={`border-b border-zinc-200 pb-4 ${align === "right" ? "text-right" : ""}`}
      >
        <div
          className={`h-8 bg-zinc-200 animate-pulse rounded inline-block ${titleWidth}`}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}

export default function PortfolioGridSkeleton() {
  return (
    <section className="bg-white text-zinc-900 w-full py-24 px-4 md:px-12">
      {/* Page title skeleton */}
      <div className="max-w-7xl mx-auto mb-24 flex flex-col items-center gap-6">
        <div className="h-10 w-48 bg-zinc-200 animate-pulse rounded" />
        <div className="w-16 h-px bg-zinc-300" />
      </div>

      <div className="max-w-7xl mx-auto space-y-24">
        <SkeletonSection
          count={REZIDENTIAL_COUNT}
          titleWidth="w-40"
          align="left"
        />
        <SkeletonSection
          count={INDUSTRIAL_COUNT}
          titleWidth="w-32"
          align="right"
        />
      </div>
    </section>
  );
}
