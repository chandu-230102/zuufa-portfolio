"use client"
import { motion } from "framer-motion"
import Skillcard from "./Skillcard"

const skills = [
    "/react.svg",
    "/nextjs.svg",
    "/azure.svg",
    "/redux.svg",
    "/php.svg",
    "/spring.svg",
    "/mongo.svg",
    "/docker.svg",
    "/aws.svg",
    "/firebase.svg",
    "/graphql.svg",
    "/github.svg",
    "/nginx.svg",
    "/mysql.svg",
    "/three.svg",
    "/vercel.svg",
    "/tensor.svg",
    "/kafka.svg",
    "/flutter.svg",
    "/gitlab.svg",
]

function Skill() {
    return (
        <motion.div
            className="min-h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center pt-36"
        >
            <div className="relative mb-10">
                <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">Skills Stack</h3>
                <h3 className="uppercase tracking-[3px] text-gray-500 text-sm mt-2">The Best in using Tech</h3>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5">
                {skills.map((skill, index) => (
                    <Skillcard key={index} imgSrc={skill} />
                ))}
            </div>
        </motion.div>
    )
}

export default Skill
