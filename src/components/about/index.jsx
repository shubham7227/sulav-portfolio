import { BsBoxArrowInUpRight } from "react-icons/bs";
import Image from "next/image";
import { profile } from "@/assets";

const About = () => {
  return (
    <section id="about" className="pt-[7rem]">
      <div className="bg-backgroundSecondary">
        <div className="main-container relative py-[3rem]">
          <div className="h-[150px] w-[150px] absolute dots-background right-0 z-0"></div>
          <div className="sm:py-[4rem] py-[2rem] md:px-[2rem] sm:px-0 px-[1.5rem] flex sm:flex-row flex-col items-center md:gap-[4rem] gap-[2rem] sm:gap-[1rem] z-10">
            <div className="flex flex-col gap-4 z-10 flex-1">
              <h2 className="sm:hidden block heading2 text-center">About</h2>
              <div className="md:px-[2rem] px-[1rem] w-full z-10">
                <Image
                  src={profile}
                  className="rounded-xl h-full w-full object-cover z-10"
                  alt="Profile"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 basis-1/2 z-10">
              <h2 className="heading2 sm:block hidden">About</h2>
              <div className="flex flex-col gap-2">
                <p className="text-primary font-karla font-light">
                  Hey, I am Sulav Giri, an avid Software Developer from Nepal
                  with a strong foundation in computer science. My expertise
                  lies in web development using the MERN stack. However,
                  I&apos;m equally enthusiastic about Machine Learning and
                  Blockchain Technologies. I intent to dive deeper into web
                  development and constantly strive to integrate modern
                  technologies into web development to enhance user experience,
                  improve performance and ensure reliability.
                  <br />
                  I&apos;m looking forward to connect with fellow developers and
                  industry professionals to exchange ideas, share knowledge, and
                  embark on an incredible journey of growth and innovation.
                </p>
                <div>
                  <h3 className="heading3">Education</h3>
                  <div className="">
                    <p className="font-karla text-primary text-[20px]">
                      Vellore Institute of Technology - Vellore, TN, India
                    </p>
                    <p className="font-karla font-light text-primary">
                      B. Tech. Computer Science and Engineering, CGPA:
                      9.51/10.00
                    </p>
                    <ul className="list-disc font-karla text-primary font-extralight list-inside pt-2">
                      <li className="">COMPEX Scholarship</li>
                      <li className="">Merit Scholarship 2021, 2022, 2023</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-max">
                <a
                  href="https://drive.google.com/file/d/1UXDc7cyS6_gwEzkHbQaEYnbg82IRLg6e/view?usp=sharing"
                  target="_blank"
                  className="flex flex-row gap-3 items-center text-primary rounded-xl py-2 pl-4 pr-5 bg-backgroundLight duration-150 transition-all font-light font-karla"
                  rel="noreferrer"
                >
                  <BsBoxArrowInUpRight />
                  <span className="">Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
