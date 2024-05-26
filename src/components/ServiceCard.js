import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="w-[348px] h-[360px] border-4 border-primaryColor rounded-xl flex items-center">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div>{icon}</div>
        <div className="text-2xl font-semibold leading-1.5 text-white mt-2 mb-4">
          {title}
        </div>
        <div className="text-[17px] font-medium px-[23px] leading-1.1 text-center text-white">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
