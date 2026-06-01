"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navItems = [
  { label: "PORTOFOLIU", href: "/portfolio" },
  { label: "PROIECTE", href: "/projects" },
  { label: "DESPRE NOI", href: "/about" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full font-light h-16 flex items-center justify-between px-6 md:px-12 z-50 bg-white transition-all">
      <div>
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

      <nav className="hidden md:flex items-center text-sm tracking-wide gap-8 text-zinc-500">
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

      <button
        className="md:hidden z-[60] flex items-center p-2 text-zinc-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
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
        ) : (
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
        )}
      </button>

      <div
        className={`fixed inset-0 bg-white z-50 flex flex-col transition-transform duration-700 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full h-16 flex items-center px-6 md:px-12">
          <div
            className={`transition-all duration-700 ease-in-out ${
              isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
          >
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src="/icon.png"
                alt="logo"
                width={120}
                height={32}
                className="object-contain"
              />
            </Link>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-start pt-24">
          <nav
            className={`flex flex-col items-center gap-10 text-xl font-light text-zinc-500 tracking-wider transition-transform duration-700 ease-in-out md:hidden ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
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
