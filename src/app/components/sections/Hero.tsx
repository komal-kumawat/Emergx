import React from 'react'
import Navbar from './Navbar';
import Link from 'next/link';
import Image from 'next/image';
import Marquee from "react-fast-marquee";

const TrustedMembers = [
    { name: "ISB", logo: "/Isb.svg" },
    { name: "Baylink", logo: "Baylink.svg" },
    { name: "Ressel.ai", logo: "/Ressel.svg" },
    { name: "triSys", logo: "/Trisys.svg" },
    { name: "DPIIT", logo: "/Gov.svg" },
    { name: "MEDIATEK", logo: "/MediaTek.svg" },

] as const;
const Hero = () => {

    return (
        <div className=' bg-[radial-gradient(ellipse_100%_100%_at_top,#3E165B_0%,#580B97_30%,#A96BDC_60%,#FFFFFF_100%)] flex flex-col mt-0 pt-0 h-[100vh] relative z-1 w-full items-center justify-between  text-center '>
            <div className='flex flex-col gap-3 mt-50'>
                <h1 className='text-6xl font-bold text-center my-2'>Your Team Deserves Better <br></br> Hiring Automation</h1>
                <p className='text-md'>AI recruiting agents built for quality. Scale your hiring without losing the <br />
                    human insight every great hire deserves.</p>
                <div className='flex justify-center gap-3'>
                    <Link
                        href="#request-demo"
                        className="bg-[#3e165b] hover:bg-[#580B97] hover:scale-105 text-white px-4 py-1 rounded-md transition-all duration-300 inline-block"
                    >
                        Request Demo
                    </Link>

                    <Link
                        href="#for-candidates"
                        className="border border-white/20 bg-white/10 backdrop-blur-md text-white px-4 py-1 rounded-md inline-block transition-all duration-300 hover:scale-105"
                    >
                        For Candidates
                    </Link>
                </div>
            </div>
            <div className="flex flex-col text-gray-900 mb-5 w-[95%]">
                <p>Trusted by teams that hire world-class talent</p>

                <div className="overflow-hidden w-full">


                    <Marquee speed={40} gradient={false}>
                        {TrustedMembers.map(({ name, logo }) => (
                            <div key={name} className="relative w-20 h-20 mx-18">
                                <Image
                                    src={logo}
                                    alt={name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>

        </div>
    )
}

export default Hero;