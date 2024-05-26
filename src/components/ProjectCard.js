import React from "react";
import Image from "next/image";
import Button from "./Button";

const ProjectCard = ({ picture, title, description }) => {
  return (
    <div className="w-[343px] h-[420px] px-5 py-5 bg-[#31313F] rounded-lg flex flex-col justify-between">
      <div className="mb-[18px]">
        <Image src="/twinder.png" alt={picture} width={311} height={173} />
      </div>

      <div className="mb-[8px]">
        <h4 className="text-[24px] font-semibold text-primaryColor">{title}</h4>
      </div>

      <div className="mb-5">
        <p className="text-[18px] font-medium text-white">{description}</p>
      </div>

      <div className="flex items-center gap-[18px]">
        <Button title="View Live" primary className="px-[35px]" />
        <Button title="Github Repo" secondary className="px-[22px]" />
      </div>
    </div>
  );
};

export default ProjectCard;
