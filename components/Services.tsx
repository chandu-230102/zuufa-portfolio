"use client"
import ServiceCard from "./ServiceCard"
import ServiceCard1 from "./ServiceCard1"
import ServiceCard2 from "./ServiceCard2"
import ServiceCard3 from "./ServiceCard3"
import ServiceCard4 from "./ServiceCard4"
import ServiceCard5 from "./ServiceCard5"
import { motion } from "framer-motion"

function Services() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.5 }} className="min-h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-6 sm:px-10 justify-evenly mx-auto items-center space-y-10">
            <h3 className="uppercase tracking-[10px] sm:tracking-[15px] text-gray-700 text-xl sm:text-2xl font-semibold">Services</h3>

            <div className="w-full flex space-x-6 overflow-x-scroll snap-x snap-mandatory hide-scrollbar scroll-smooth">
                {[ServiceCard, ServiceCard1, ServiceCard2, ServiceCard3, ServiceCard4, ServiceCard5].map((Component, index) => (
                    <div key={index} className="snap-center">
                        <Component />
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Services
