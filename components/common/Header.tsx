import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "PORTOFOLIU", href: "/portfolio" },
  { label: "PROIECTE", href: "/projects" },
  { label: "DESPRE NOI", href: "/about" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 md:px-12 z-50 bg-white transition-all">
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

      <nav className="flex items-center text-sm tracking-wide gap-8 text-zinc-500">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-zinc-900 transition-colors duration-300">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
