import About from "@/components/about";
import MailIcon from "@/components/common/MailIcon";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Header from "@/components/hero/Header";
import Navbar from "@/components/hero/Navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home({ data }) {
  return (
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
  );
}

export async function getServerSideProps() {
  return {
    props: {
      data: "",
    },
  };
}
