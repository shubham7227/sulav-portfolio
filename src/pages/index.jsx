import About from "@/components/about";
import MailIcon from "@/components/common/MailIcon";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Header from "@/components/hero/Header";
import Navbar from "@/components/hero/Navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Full-Stack Software Engineer - Sulav Giri</title>
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
      <main className="bg-background ">
        <Header />
        <Hero />
        <Navbar />
        <Experience />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <MailIcon />
      </main>
    </>
  );
}
