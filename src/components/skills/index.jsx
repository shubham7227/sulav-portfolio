import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaJs,
  FaNode,
  FaPython,
  FaReact,
  FaSass,
  FaStripe,
  FaWordpressSimple,
} from "react-icons/fa";
import {
  SiFirebase,
  SiFlask,
  SiGraphql,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import SkillCard from "./SkillCard";

const data = [
  {
    icon: <FaReact />,
    title: "React JS",
  },
  {
    icon: <FaNode />,
    title: "Node JS",
  },
  {
    icon: <SiMongodb />,
    title: "MongoDB",
  },
  {
    icon: <SiFirebase />,
    title: "Firebase",
  },
  {
    icon: <FaHtml5 />,
    title: "HTML",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS",
  },
  {
    icon: <FaJs />,
    title: "JavaScript",
  },
  {
    icon: <FaSass />,
    title: "SASS",
  },
  {
    icon: <FaBootstrap />,
    title: "Bootstrap",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
  },
  {
    icon: <FaWordpressSimple />,
    title: "WordPress",
  },
  {
    icon: <SiGraphql />,
    title: "GraphQL",
  },
  {
    icon: <SiRedux />,
    title: "Redux",
  },
  {
    icon: <FaStripe />,
    title: "Stripe",
  },
  {
    icon: <FaPython />,
    title: "Python",
  },
  {
    icon: <SiFlask />,
    title: "Flask",
  },
  {
    icon: <FaJava />,
    title: "Java",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="pt-[10rem]">
      <div className="py-[2rem}">
        <div className="flex flex-row items-center relative">
          <div className="h-[130px] w-[60px] absolute dots-background left-2 z-0" />
          <h2 className="heading2 z-10 main-container sm:px-0 px-[1rem]">
            Skills
          </h2>
        </div>
        <div className="main-container pt-[3rem] sm:px-[3rem] px-[1.5rem]">
          <div className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-3 md:gap-x-12 md:gap-y-8 gap-x-4 gap-y-4 text-primary">
            {data.map((entry, key) => (
              <div className="col-span-1" key={key}>
                <SkillCard icon={entry.icon} title={entry.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
