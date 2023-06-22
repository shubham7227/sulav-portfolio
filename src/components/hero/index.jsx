import Image from "next/image";
import Info from "./Info";

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-[80px] main-container relative z-10 w-full"
    >
      <div className="sm:py-[6rem] py-[3rem] lg:px-16 lg:gap-16 px-6 gap-12 relative flex sm:flex-row flex-col justify-between items-center w-full">
        <Info />
        <div className="basis-5/12 flex items-center justify-center">
          <Image
            src="/name.svg"
            className="lg:max-h-[400px] sm:max-h-[300px] max-h-[200px]"
            alt=""
            height={400}
            width={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
