import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Header from "@/components/common/header";
import fetchPageData from "@/utils/fetchPageData";

export default function Home() {
  return (
    <>
      <main className="bg-background">
        <Header />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
}

export async function getStaticProps() {
  return await fetchPageData();
}
