import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-zinc-200/50 pt-10 pb-6 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        {/* Info Blocks */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-32 w-full max-w-3xl">
          <div className="flex flex-col items-start gap-3 text-sm tracking-wide text-zinc-500 font-light">
            <span className="text-zinc-900 tracking-wider text-xs font-medium uppercase mb-1">
              Contact
            </span>
            <a
              href="tel:+40740126930"
              className="hover:text-zinc-900 transition-colors duration-300"
            >
              +40 740 126 930
            </a>
            <a
              href="mailto:office.mobili@arkidava.com"
              className="hover:text-zinc-900 transition-colors duration-300"
            >
              office.mobili@arkidava.com
            </a>
          </div>

          <div className="flex flex-col items-start gap-3 text-sm tracking-wide text-zinc-500 font-light">
            <span className="text-zinc-900 tracking-wider text-xs font-medium uppercase mb-1">
              Servicii
            </span>
            <Link
              href="#"
              className="hover:text-zinc-900 transition-colors duration-300"
            >
              Industrial
            </Link>
            <Link
              href="#"
              className="hover:text-zinc-900 transition-colors duration-300"
            >
              Rezidențial
            </Link>
          </div>

          <div className="flex flex-col items-start gap-3 text-sm tracking-wide text-zinc-500 font-light">
            <span className="text-zinc-900 tracking-wider text-xs font-medium uppercase mb-1">
              Social
            </span>
            <div className="flex flex-col items-start gap-3">
              <a
                href="https://www.instagram.com/arkidavamobili/"
                className="hover:text-zinc-900 transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100089439472849"
                className="hover:text-zinc-900 transition-colors duration-300"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="w-full mt-8 pt-5 border-t border-zinc-100 flex justify-center items-center text-xs text-zinc-400 font-light tracking-wider">
          <p>
            © {new Date().getFullYear()} Arkidava. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}
