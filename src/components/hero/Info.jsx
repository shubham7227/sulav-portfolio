import Image from "next/image";
import { profile } from "../../assets";

const Info = () => {
  return (
    <div className="flex flex-col sm:gap-12 gap-8 items-center justify-center">
      <div className="sm:h-[150px] sm:w-[150px] rounded-full h-[120px] w-[120px]">
        <Image
          src={profile}
          className="h-full w-full object-cover rounded-full"
          alt="profile"
        />
      </div>
      <div className="text-center">
        <p className="uppercase sm:tracking-[6px] tracking-[5px] sm:text-[20px] text-textSecondary font-karla">
          SOFTWARE ENGINEER
        </p>
        <h1 className="uppercase font-prompt font-semibold sm:text-[64px] text-[52px] text-primary leading-tight">
          SULAV GIRI
        </h1>
      </div>
    </div>
  );
};

export default Info;
