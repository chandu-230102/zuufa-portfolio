"use client"
import { motion } from "framer-motion"

function BackgroundCircle() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                scale: [1, 1.5, 2, 2.5, 1.2, 1],
                opacity: [0.1, 0.3, 0.5, 0.7, 0.2, 1.0],
                borderRadius: ["20%", "30%", "50%", "70%", "40%", "20%"]
            }}
            transition={{ duration: 2.5 }}
            className="relative flex items-center justify-center"
        >
            <div className="absolute border border-gray-300 rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
            <div className="absolute border border-gray-400 rounded-full h-[300px] w-[300px] mt-52 " />
            <div className="absolute border border-gray-500 rounded-full h-[500px] w-[500px] mt-52 " />
            <div className="rounded-full border border-yellow-400 opacity-40 h-[650px] w-[650px] absolute mt-52 animate-pulse shadow-[0_0_15px_rgba(250,204,21,0.4)] " />
            <div className="rounded-full border border-gray-600 h-[800px] w-[800px] absolute mt-52 " />
        </motion.div>
    )
}

export default BackgroundCircle
