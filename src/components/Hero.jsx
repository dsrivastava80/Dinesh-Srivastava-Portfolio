import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import useParallax from "../reactbits/hooks/useParallax";
import { styles } from "../styles";
import useMediaQuery from "../utils/useMediaQuery";
import { profile } from "../assets";

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { style: parallaxStyle } = useParallax({
    strength: 0.03,
    maxOffset: 15,
    enabled: !isMobile,
  });

  return (
    <section className={`relative w-full h-screen mx-auto`} id="hero">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center justify-between gap-10`}
      >
        {/* Left Side: Text and Timeline line */}
        <div className="flex flex-row items-start gap-5 w-full md:w-3/5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-cyan-600" />
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-cyan-600 to-transparent" />
          </div>

          <div style={parallaxStyle} className="z-10">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Dinesh Kumar <br className="lg:hidden" />
              <span className="text-cyan-500">Srivastava</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 font-semibold tracking-wide`}>
              Global Infrastructure Transformation Leader
            </p>
            <p className="mt-1 text-teal-400 text-[18px] sm:text-[22px] font-medium tracking-wide">
              Automation | Cloud Network | GCC | Agentic AI
            </p>
            <p className="mt-4 text-slate-300 text-[15px] sm:text-[16px] max-w-2xl leading-[28px] hidden sm:block">
              I help enterprises modernize infrastructure operations across network, cloud, hosting, datacenter, backup, security, and service delivery through automation, governance, and transformation-led execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#experience" className="px-6 py-3 rounded-md bg-cyan-600 text-white font-medium hover:bg-cyan-700 transition shadow-lg shadow-cyan-500/20">
                View Experience
              </a>
              <a href="#transformation-highlights" className="px-6 py-3 rounded-md bg-slate-800 border border-slate-700 text-slate-200 font-medium hover:bg-slate-700 transition shadow-lg shadow-slate-900">
                Key Transformations
              </a>
              <a href="#contact" className="px-6 py-3 rounded-md bg-transparent border border-slate-600 text-slate-400 font-medium hover:border-slate-400 hover:text-slate-200 transition">
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Profile Picture */}
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:flex justify-center items-center w-full md:w-2/5 z-10"
        >
          <img 
            src={profile} 
            alt="Dinesh Srivastava" 
            className="w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] rounded-full object-cover border-4 border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.4)] relative" 
          />
        </motion.div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-slate-500 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-slate-400 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
