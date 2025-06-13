import React from "react";
import { motion } from "framer-motion";
import Home from "./components/Home";
import Section2 from "./components/Section-2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Footer from "./components/Footer";
import FAQs from "./components/Faq";
import Spline from "@splinetool/react-spline";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const App = () => {
  return (
    <div className="font-primary">
      {/* Spline 3D on the right side, visible on all pages */}
      
      <div className="bg-gray-100">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Home />
        </motion.div>

        {/* Section 2, animate immediately */}
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

      <div className="bg-gray-100">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <FAQs />
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
