import { link } from "fs"
import Image from "next/image";
import Link from "next/link";

const navLinks = [
    { label: "HOME", href: "/" },
    { label: "FAQ", href: "#FAQ" },
    { label: "PLATFORM", href: "#Platform" },
    { label: "CONTACT", href: "#CTA" },
    { label: "FEATURES", href: "#Features" },
] as const;
export default function Footer() {
    return <div  className="scroll-mt-24 flex justify-between w-full p-20  pb-10">
        <div className="flex flex-col gap-5">
            <Link href="/">
                <Image src="/icon.svg" alt="logo" width={150} height={100} />
            </Link>
            <a href="mailto:hello@emergx.ai">
                hello@emergx.com
            </a>
            <a href="tel:+911234556945">
                +91 9123455694
            </a>

        </div>
        <div className="grid grid-cols-2 gap-5">
            {navLinks.map(({label , href})=>(
                <Link href={href}>{label}</Link>
            ))}

        </div>
    </div>
}