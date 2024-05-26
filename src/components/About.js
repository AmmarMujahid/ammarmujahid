import React from "react";
import AboutCard from "./AboutCard";
import { Mobile, UIUX, Web, WebScraping } from "./assets";

const About = () => {
  return (
    <section className="container mx-auto mb-[80px]" id="about">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-[32px] font-semibold text-primaryColor">
            About me:
          </h3>
          <p className="text-[18px] font-medium leading-1.1 text-white">
            Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer,
            UI designer, and Mobile developer. I jhave honed my skills in Web
            Development and advance i have core understanding of advance UI
            design principles. Here are the major skiills i have.{" "}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex items-center gap-[22px]">
            <span className="text-[96px] text-primaryColor font-semibold">
              1+
            </span>
            <p className="text-[24px] font-medium text-white">
              Years of experience. Specialised in building apps, while ensuring
              a seamless web experience for end users.
            </p>
          </div>
          <div className="flex items-center gap-[22px]">
            <span className="text-[96px] text-primaryColor font-semibold">
              5+
            </span>
            <p className="text-[24px] font-medium text-white">
              Years of experience. Specialised in building apps, while ensuring
              a seamless web experience for end users.
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-5 justify-between items-center">
          <AboutCard icon=<UIUX /> title="UI & UX DESIGNING" />
          <AboutCard icon=<Web /> title="WEB DEVELOPMENT" />
          <AboutCard icon=<Mobile /> title="MOBILE DEVELOPMENT" />
          <AboutCard icon=<WebScraping /> title="WEB SCRAPING WITH PYTHON" />
        </div>
      </div>
    </section>
  );
};

export default About;
