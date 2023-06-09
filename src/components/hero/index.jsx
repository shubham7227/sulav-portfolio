import Info from "./Info";
import Pattern from "./Pattern";

const Hero = () => {
  return (
    <section id="hero" className="relative z-10">
      <Pattern />
      <div className="sm:pt-[12rem] pt-[6rem] relative">
        <Info />
      </div>
    </section>
  );
};

export default Hero;
