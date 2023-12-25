"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am a Full Stack Developer with a rich tapestry of experiences across a multitude of stacks, a dedication to customer satisfaction, and a passion for staying at the forefront of technological advancements. My journey in web development is marked by not just technical expertise but a commitment to teamwork, leadership, and continuous improvement. Looking forward, my goal is to continue pushing boundaries, embracing new challenges, and contributing to the evolution of digital landscapes.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Clean Architecture</span>. I'm also learning how to creating a business plan.
      </p>
    </motion.section>
  );
}
