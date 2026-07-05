"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const navItems = [
  { label: "PORTOFOLIU", href: "/portfolio" },
  { label: "PROIECTE", href: "/projects" },
  { label: "SERVICII", href: "/#services" },
  { label: "DESPRE NOI", href: "/#about" },
];

export default function Header() {
  // The mobile menu is driven by a native checkbox toggled via <label>s and
  // CSS (`peer-checked:`), NOT React state. This is deliberate: pressing the
  // browser Back button from a hard 404 restores this document WITHOUT
  // hydrating React, so any `onClick`/`useState` toggle would be dead. A
  // checkbox + label works purely in the DOM, so the menu keeps opening and
  // closing even when React never runs.
  const toggleRef = useRef<HTMLInputElement>(null);

  // Progressive enhancement: when React IS hydrated, uncheck on navigation so
  // the overlay closes during client-side (App Router) navigations, where the
  // Header persists. Without hydration, nav links do a full page load which
  // resets the checkbox anyway.
  const closeMenu = () => {
    if (toggleRef.current) toggleRef.current.checked = false;
  };

  return (
    <header className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 md:px-12 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200/50 transition-all">
      <div className="animate-slide-down-in">
        <Link href="/">
          <Image
            src="/icon.png"
            alt="logo"
            width={120}
            height={32}
            className="object-contain"
          />
        </Link>
      </div>

      <nav className="hidden md:flex items-center text-base tracking-wide gap-8 text-zinc-500 animate-slide-down-in">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:text-zinc-900 transition-colors duration-300"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Native toggle state for the mobile menu. Must precede the label and
          the overlay so Tailwind's `peer-checked:` (sibling selector) can
          reach them. */}
      <input
        ref={toggleRef}
        type="checkbox"
        id="mobile-nav-toggle"
        className="peer sr-only"
        aria-label="Deschide meniul"
      />

      {/* Hamburger button. A <label> toggles the checkbox with no JS. Hidden
          while the menu is open so the overlay's own close (X) button shows in
          its place. */}
      <label
        htmlFor="mobile-nav-toggle"
        className="md:hidden z-[60] flex items-center p-2 text-zinc-500 cursor-pointer animate-slide-down-in peer-checked:hidden"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
          />
        </svg>
      </label>

      <div className="fixed top-0 left-0 w-screen h-[100dvh] bg-white z-50 flex flex-col transition-transform duration-500 ease-in-out md:hidden -translate-x-full peer-checked:translate-x-0">
        <div className="w-full h-16 flex items-center justify-between px-6 md:px-12">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/icon.png"
              alt="logo"
              width={120}
              height={32}
              className="object-contain"
            />
          </Link>

          {/* Close (X) button — another label for the same checkbox. */}
          <label
            htmlFor="mobile-nav-toggle"
            className="z-[60] flex items-center p-2 text-zinc-500 cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
        </div>
        <div className="flex-1 flex flex-col justify-start pt-24">
          <nav className="flex flex-col items-center gap-10 text-base tracking-wide text-zinc-500 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="hover:text-zinc-900 transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
