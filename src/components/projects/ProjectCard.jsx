import Image from "next/image";

const ProjectCard = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      <a href={data.url} target="_blank" rel="noreferrer">
        <div className="w-full overflow-hidden rounded-xl">
          <Image
            src={data.featuredImage}
            className="object-cover rounded-xl hover:scale-110 duration-500 transition-all"
            alt=""
            height={380}
            width={380}
          />
        </div>
      </a>
      <div className="flex flex-col gap-3">
        <a href={data.url} target="_blank" rel="noreferrer">
          <h3 className="heading3 leading-tight">{data.title}</h3>
        </a>
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
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
