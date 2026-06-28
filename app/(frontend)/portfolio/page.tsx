import { Suspense } from "react";
import { getAllCategoriesSerialized } from "@/lib/payload/categories";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import PortfolioGridSkeleton from "@/components/sections/PortfolioGridSkeleton";

export default async function PortfolioPage() {
  const categories = await getAllCategoriesSerialized();

  return (
    <main className="min-h-screen bg-white">
      <Suspense fallback={<PortfolioGridSkeleton />}>
        <PortfolioGrid categories={categories} />
      </Suspense>
    </main>
  );
}
