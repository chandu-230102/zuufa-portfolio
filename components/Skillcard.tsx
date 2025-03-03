"use client"
import { motion } from "framer-motion"

type Props = {
    imgSrc: string;
}

function Skillcard({ imgSrc }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 120 }}
            viewport={{ once: false, amount: 0.3 }}
            className="group relative flex cursor-pointer"
            whileTap={{ scale: 0.9 }}
        >
            <motion.img
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                src={imgSrc}
                alt="Skill"
                loading="lazy"
                className="rounded-full border border-gray-500 object-contain flex-shrink-0 aspect-[1/1] w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 
                           filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out 
                bg-black bg-opacity-60 rounded-full flex items-center justify-center w-full h-full">
            </div>
        </motion.div>
    )
}

export default Skillcard
