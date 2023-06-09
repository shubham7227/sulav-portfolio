// eslint-disable-next-line react/prop-types
const SkillCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center bg-backgroundSecondary md:py-10 py-6 rounded-xl h-full">
      <div className="text-primary md:text-[3rem] text-[2rem]">{icon}</div>
      <span className="text-textDim font-light font-prompt sm:text-base text-sm text-center">
        {title}
      </span>
    </div>
  );
};

export default SkillCard;
