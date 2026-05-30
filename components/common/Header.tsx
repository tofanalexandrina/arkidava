import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Portofoliu", href: "/portfolio" },
  { label: "Proiecte", href: "/projects" },
  { label: "Despre noi", href: "/about" },
];

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between px-6 z-50 bg-transparent backdrop-blur-xs">
      <div>
        <Link href="/">
          <Image
            src="/logo-color.png"
            alt="logo"
            width={120}
            height={32}
            className="w-auto h-auto"
          />
        </Link>
      </div>

      <div className="flex items-center text-sm gap-8 text-black">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className=" hover:underline">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
