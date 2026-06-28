"use client";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("main > section");
    if (!hero) return;

    const io = new IntersectionObserver(
      (entries) => {
        setVisible(!entries[0].isIntersecting);
      },
      { root: null, threshold: 0 },
    );

    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <button
      aria-label="Back to top"
      title="Back to top"
      aria-hidden={!visible}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={
        "fixed bottom-6 right-6 z-50 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/95 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-500 ease-in-out text-zinc-500 hover:text-zinc-900 " +
        (visible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-4 scale-95 pointer-events-none") +
        " cursor-pointer"
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 transition-colors duration-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
