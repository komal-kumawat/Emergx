import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/data/site.data";

const navLinks = [
  { label: "PLATFORM", href: "#Platform" },
  { label: "FEATURES", href: "#Features" },
  { label: "FAQ", href: "#FAQ" },
  { label: "CONTACT", href: "#Contact" },
] as const;

export default function Navbar() {
  return (
    <header className=" fixed flex items-center justify-between w-[90%] mt-5 mx-auto p-2 px-7 rounded-xl border-zinc-200/80 bg-white/25 shadow-lg shadow-zinc-900/5 backdrop-blur-md z-100">
      <div>
        <Link href="/">
          <Image src="/icon.svg" alt="logo" width={150} height={100} />
        </Link>

      </div>
      <div className="flex items-center gap-4 ">
        {navLinks.map(({ label, href }) => (

          <Link key={href} href={href}>
            <button className="hover:bg-[#FFFFFF] hover:text-[#3e165b] transition-colors text-xs p-2 rounded-md">
              {label}
            </button>
          </Link>
        ))}
      </div>
      <div className="flex items-center">
        <Link
          href="#reques-demo"
          className="bg-[#3e165b] hover:bg-[#580B97] hover:scale-105 text-white px-4 py-1 rounded-md transition-all duration-300 inline-block"
        >
          Request Demo
        </Link>

      </div>
    </header>
  );
}
