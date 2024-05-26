import React from "react";
import ServiceCard from "./ServiceCard";
import { UIUX } from "./assets";

const Services = () => {
  return (
    <section className="container mx-auto mb-[80px]">
      <div className="flex flex-col gap-[32px]">
        <div className="text-4xl text-primaryColor font-semibold">
          The services I offer:
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 items-center gap-x-6 gap-y-4 ">
          <ServiceCard
            icon=<UIUX />
            title="UI & UX DESIGNING"
            description="I design beautiful web iterfaces with Figma and Adove XD"
          />
          <ServiceCard
            icon=<UIUX />
            title="UI & UX DESIGNING"
            description="I design beautiful web iterfaces with Figma and Adove XD"
          />
          <ServiceCard
            icon=<UIUX />
            title="UI & UX DESIGNING"
            description="I design beautiful web iterfaces with Figma and Adove XD"
          />
          <ServiceCard
            icon=<UIUX />
            title="UI & UX DESIGNING"
            description="I design beautiful web iterfaces with Figma and Adove XD"
          />
          <ServiceCard
            icon=<UIUX />
            title="UI & UX DESIGNING"
            description="I design beautiful web iterfaces with Figma and Adove XD"
          />
          <ServiceCard
            icon=<UIUX />
            title="UI & UX DESIGNING"
            description="I design beautiful web iterfaces with Figma and Adove XD"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
