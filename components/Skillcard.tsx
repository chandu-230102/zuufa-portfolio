"use client"
import { motion } from "framer-motion"

type Props = {
    imgSrc: string;
}

function Skillcard({ imgSrc }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, rotateY: -90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{
                duration: 1.2,
                ease: "easeOut"
            }}
            viewport={{ once: false, amount: 0.2 }}
            className="group relative flex cursor-pointer"
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.img
                src={imgSrc}
                alt="Skill"
                loading="lazy"
                className="rounded-full border border-gray-500 object-contain flex-shrink-0 aspect-[1/1] w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out bg-black bg-opacity-60 rounded-full flex items-center justify-center w-full h-full"></div>
        </motion.div>
    )
}

export default Skillcard
