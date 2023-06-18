import React from "react";
import { motion } from "framer-motion";

import projects from "../../data/projects.json";
import Contact from "@/components/contact";
import { wordsContainerNoDelay } from "@/utils/AnimationVarients";
import TextContainer from "@/components/common/TextContainer";
import ProjectCard from "@/components/projects/ProjectCard";
import Head from "next/head";
import Header from "@/components/common/header";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Sulav Giri</title>
      </Head>
      <main className="bg-background">
        <Header />
        <div className="flex flex-row items-center relative pt-[12rem]">
          <div className="text-center main-container flex flex-col">
            <motion.h2
              variants={wordsContainerNoDelay}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="heading2 z-10"
            >
              <TextContainer text="Projects" />
            </motion.h2>
            <p className="font-karla text-textDim font-light">
              Here are some of the projects that I have contributed to.
            </p>
          </div>
          <div className="h-[100px] w-[120px] absolute dots-background right-0 z-0"></div>
        </div>
        <div className="main-container pt-[2rem] px-[1.5rem]">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-12">
            {projects.map((data) => (
              <ProjectCard key={data.id} data={data} />
            ))}
          </div>
        </div>
        <Contact />
      </main>
    </>
  );
}
