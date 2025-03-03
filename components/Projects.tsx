"use client"
import { motion } from "framer-motion"
import Image from "next/image";
import Link from "next/link";
function Projects() {
    const projects = [
        { id: 1, title: "Elisha Interiors", description: "An furniture online store with good UI and functionality.", imgSrc: "/elisa.png", link: "https://elishainterior.com/" },
        {
            id: 2, title: "An Ongoing Project ", description: "A complete restaurant management  solution.From online food ordering, billing, AI sales forecasting and delivery.we are building an all-in -one platform with a seamless user experience..",
            imgSrc: "/restuarntbill.png"
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
            className="h-screen flex relative flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-10 left-1/2 -translate-x-1/2 md:top-16 uppercase tracking-[4px] md:tracking-[20px] text-gray-500 text-lg md:text-2xl bg-white px-3 py-1 rounded-md">Projects</h3>
            <div className="relative w-full flex
           overflow-x-auto overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin">
                {projects.map((project) => (
                    <Link href={project.link ?? "/"} key={project.id} className="block">
                        <div key={project.id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44">
                            <Image
                                src={project.imgSrc} alt="elisha" width={300} height={300} className="rounded-lg" />
                            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                            <p className="text-gray-600
                        text-lg mt-2 leading-relaxed font-medium tracking-wide">{project.description}</p>
                        </div>
                    </Link>
                )
                )}

            </div>
            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12" />
        </motion.div>
    )
}

export default Projects