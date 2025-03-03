"use client";
import { motion } from "framer-motion";
import Link from "next/link";

function Header() {
    return (
        <header
            className="sticky top-0 p-5 flex justify-between items-start max-w-7xl
        z-20 xl:items-center"
        >
            <div />
            <Link href="#contact">
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                        x: 500,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 1.5,
                    }}
                    className="flex flex-row items-center text-gray-300 cursor-pointer"
                >
                    <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
                        Get in touch with us
                    </p>
                </motion.div>
            </Link>
        </header>
    );
}

export default Header;
