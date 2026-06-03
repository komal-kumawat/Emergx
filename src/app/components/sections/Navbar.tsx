import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/data/site.data";

const navLinks = [
  { label: "For Candidates", href: "#for-candidates" },
] as const;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 font-primary backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 font-primary"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2.5 font-primary">
          <Image
            src="/icon.svg"
            alt={`${siteConfig.name} logo`}
            width={32}
            height={32}
            priority
          />
          <span className="font-primary text-lg font-medium tracking-tight text-zinc-900 dark:text-zinc-50">
            {siteConfig.name}
          </span>
        </Link>

        <div className="flex items-center gap-6 font-primary">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="hidden font-primary text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 sm:inline dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {label}
            </Link>
          ))}

          <Link
            href="#request-demo"
            className="font-primary rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Request Demo
          </Link>
        </div>
      </nav>
    </header>
  );
}
