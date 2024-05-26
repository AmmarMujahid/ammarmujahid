import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="container mx-auto mb-28" id="projects">
      <div>
        <div className="mb-4">
          <h4 className="text-[32px] font-semibold text-primaryColor">
            Featured Projects:
          </h4>
        </div>

        <div className="mb-9">
          <p className="text-[18px] font-medium text-white">
            I have worked on many projects over the course of being a Web
            Developer, here are a few of my live, real-world projects
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-5 justify-center">
          <ProjectCard
            picture="/twinder.png"
            title="TWINDER"
            description="A live Geolocation app for finding tweets and twitter users around you."
          />
          <ProjectCard
            picture="/livents.png"
            title="LIVENTS"
            description="A video streaming app with live Geolocation, for streaming events."
          />
          <ProjectCard
            picture="/moove.png"
            title="MOOVE"
            description="Mobile app for booking instant pickup & dropoff accross major cities."
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
