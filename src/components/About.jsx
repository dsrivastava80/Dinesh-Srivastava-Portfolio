import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { services, coreMetrics } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[255px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-slate-900 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain filter grayscale invert opacity-80"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const MetricCard = ({ title, subtitle, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700 shadow-lg min-w-[160px] flex-1"
  >
    <h4 className="text-cyan-400 text-4xl sm:text-5xl font-black mb-2">{title}</h4>
    <p className="text-slate-300 text-sm sm:text-base font-medium text-center uppercase tracking-wider">{subtitle}</p>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Executive Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-slate-300 text-[17px] max-w-4xl leading-[32px]"
      >
        I am an infrastructure and transformation leader with 24+ years of experience delivering large-scale IT modernization across enterprise network, cloud, hosting, storage, backup, datacenter, security, and operations. I have led global teams, built GCC capabilities, driven transition and transformation programs, and aligned infrastructure strategy with business outcomes through automation, governance, and cost optimization.
        <br /><br />
        My work spans service delivery, infrastructure architecture, business case development, vendor governance, transition planning, and AI-led operating model change. Across HCLTech, Koch, Syngenta, and earlier leadership roles, I have focused on building resilient, scalable, and business-aligned infrastructure organizations.
      </motion.p>
      
      {/* Core Metrics Strip */}
      <div className="mt-16 flex flex-wrap justify-between gap-4">
        {coreMetrics.map((metric, index) => (
          <MetricCard key={`metric-${index}`} index={index} {...metric} />
        ))}
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
