import React from "react";
import { motion } from "framer-motion";

import projects from "../../data/projects.json";
import Contact from "@/components/contact";
import SimpleHeader from "@/components/common/SimpleHeader";
import { wordsContainerNoDelay } from "@/utils/AnimationVarients";
import TextContainer from "@/components/common/TextContainer";
import ProjectCard from "@/components/projects/ProjectCard";
import MailIcon from "@/components/common/MailIcon";
import Head from "next/head";

const Projects = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Projects - Sulav Giri</title>
        <meta
          name="description"
          content="Sulav Giri is a software engineer from Nepal with expertise in web development using Node.js and React"
        />
        <meta property="og:site_name" content="Sulav Giri" />
        <meta property="og:locale" content="en-US" />
        <meta property="og:image" content="/WebsiteBanner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#1f1f1f" />
      </Head>
      <main className="bg-background">
        <SimpleHeader />
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
        <MailIcon />
      </main>
    </>
  );
};

export default Projects;
