import React from "react";
import { motion } from "framer-motion";
import Home from "./HomePage";
import Section2 from "./Section-2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const HomeRender = () => {
  console.log("HomeRender component rendered");
  return (
    <div className="font-primary ">
      <div className="">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Home />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <Section2 />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Section3 />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Section4 />
        </motion.div>
      </div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Section5 />
      </motion.div>
    </div>
  );
};

export default HomeRender;
