"use client";
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skill from "@/components/Skill";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const handlesmalllogoClick = () => {
    const element = document.getElementById("hero");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

  }
  return (
    <div className="bg-#f9f9f9 text-black h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
    scrollbar">
      <Header />
      <section id="hero" className="snap-start" >
        < Hero />
      </section >
      <section id="aboutus" className="snap-center mt-20">
        <About />
      </section>

      <section id="services" className="snap-center">
        <Services />
      </section>

      <section id="techandtools" className="snap-start">
        <Skill />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start mt-20">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-3 w-full cursor-pointer">
          <div className="flex items-center justify-center   ">
            <Image src="zuufalogo.svg" width={0} height={50} className="w-12 h-12 rounded-full filter grayscale hover:grayscale-0 bg-black cursor-pointer" alt="logo" onClick={handlesmalllogoClick} />
          </div>

        </footer>

      </Link>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="fixed bottom-5 left-5 flex flex-col space-y-2 z-50"
      >
        <SocialIcon
          url="https://www.instagram.com/zuufatech/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.facebook.com/zuufatech/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

    </div >
  );
}
