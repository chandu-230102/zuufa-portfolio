"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";
import Image from "next/image";

function Hero() {
    const [text] = useTypewriter({
        words: [
            "Welcome to Zuufa",
            "Your Partner in Building Cutting-Edge Software Solutions",
            "We Transform Your Ideas into Powerful Applications",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden bg-white px-4 sm:px-8">

            <BackgroundCircle />

            <Image
                src="/zuufalogo.svg"
                alt="Zuufa Logo"
                width={128}
                height={128}
                className="rounded-full object-cover w-24 h-24 sm:w-32 sm:h-32
                md:w-40 md:h-40 xl:w-52 xl:h-52"
                priority
            />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-600 pb-2 tracking-[12px]">
                    Software Company
                </h2>

                <h1 className="text-xl sm:text-2xl font-semibold px-4 sm:px-5 text-black leading-tight">
                    <span className="mr-2">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
                <div className="pt-5 flex flex-wrap justify-center gap-2 sm:gap-3">
                    {[
                        { label: "About Us", href: "#aboutus" },
                        { label: "Services", href: "#services" },
                        { label: "Tech & Tools", href: "#techandtools" },
                        { label: "Projects", href: "#projects" },
                    ].map((item) => (
                        <Link key={item.label} href={item.href}>
                            <button className="heroButton bg-black text-white border-black hover:bg-gray-700">
                                {item.label}
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hero;
