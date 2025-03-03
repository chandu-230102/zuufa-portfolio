"use client"
import { motion } from "framer-motion"

function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col relative text-center md:text-left md:flex-row max-w-6xl px-4 sm:px-8 md:px-16 justify-evenly mx-auto min-h-screen pb-20 items-center md:items-start"
        >
            <h3 className="absolute top-10 md:top-12 uppercase tracking-[8px] sm:tracking-[12px] md:tracking-[16px] text-gray-600 font-semibold text-lg sm:text-xl">
                About Us
            </h3>
            <div className="space-y-10 px-4 sm:px-8 md:px-14 mt-5 flex flex-col items-center md:items-start">
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-16 md:mt-24 text-gray-900">
                    Founded in <span className="underline decoration-yellow-500/70">2023</span>
                </h4>
                <p className="text-sm sm:text-base leading-[1.7] text-gray-700 max-w-[95%] sm:max-w-[90%] md:max-w-[700px]">
                    **Zuufa** is a next-generation **Technology Solution firm** that is rapidly emerging itself working into cutting-edge technology solutions.
                    <br /><br />
                    With **two projects completed** and **two high-profile custom major projects in development**, we specialize in:
                    **Cloud Computing, Mobile Applications, Enterprise Content Management (ECM), CMS, and ERP solutions**.
                    <br /><br />
                    Our mission is to build **high-performance, scalable, and innovative software** that empowers businesses to thrive in the digital age.
                    <br /><br />
                    Whether its cloud-based platforms or custom-built hardware, we ensure scalability, security, and innovation in every solution we create.
                    <br /><br />
                    <span className="font-semibold text-gray-800 text-base sm:text-lg text-center sm:text-left block"> Lets Build the Future Together</span>
                    <br />
                    If youre looking for a **trusted technology partner** to bring your ideas to life, **Zuufa** is ready to deliver excellence. Lets collaborate and create something remarkable.
                </p>
            </div>
        </motion.div>
    )
}

export default About
