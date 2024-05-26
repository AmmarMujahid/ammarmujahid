import React from "react";

const AboutCard = ({ icon, title }) => {
  return (
    <div className="w-[266px] h-[264px] bg-[#BDBDBD] hover:bg-primaryColor cursor-default flex items-end">
      <div className="flex flex-col p-6">
        <div>{icon}</div>
        <div className="text-3xl font-semibold text-white">{title}</div>
      </div>
    </div>
  );
};

export default AboutCard;
