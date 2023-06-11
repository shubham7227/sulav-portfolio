import Image from "next/image";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const ProjectCard = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      <a href={data.url} target="_blank" rel="noreferrer">
        <div className="w-full overflow-hidden rounded-xl">
          <Image
            src={data.featuredImage}
            className="object-cover rounded-xl hover:scale-110 duration-500 transition-all"
            alt=""
            height={379}
            width={379}
          />
        </div>
      </a>
      <div className="flex flex-col gap-3">
        <h3 className="heading3 leading-tight">{data.title}</h3>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-2 flex-wrap">
            {data.stack.map((entry, key) => (
              <div
                className="py-1 px-3 bg-backgroundSecondary text-sm rounded-xl"
                key={key}
              >
                <span className="text-primary font-extralight font-karla">
                  {entry}
                </span>
              </div>
            ))}
          </div>
          {/* <div className="h-[150px] overflow-y-auto scrollbar"> */}
          <div
            className="text-primary font-light font-karla"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          <div>
            <a
              href={data.url}
              target="_blank"
              rel="noreferrer"
              className="w-max flex flex-row gap-3 items-center text-primary rounded-xl py-2 pl-3 pr-4 bg-backgroundSecondary border border-backgroundLight duration-150 transition-all font-light font-karla text-sm hover:bg-backgroundLight"
            >
              <BsBoxArrowInUpRight />
              <span className="">View Project</span>
            </a>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
