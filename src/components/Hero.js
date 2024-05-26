import React from "react";
import Image from "next/image";
import Button from "./Button";
import { Aboutme, Projects } from "./assets";

const Hero = () => {
  return (
    <section className="relative mb-40" id="home">
      <div className="container mx-auto flex flex-col md:flex-row  justify-between items-center">
        <div className="flex flex-col items-center md:items-start gap-5">
          <h4 className="text-white text-[32px] font-semibold">Hi, I am</h4>

          <h2 className="text-lightColor text-[52px] font-semibold">
            Ammar Mujahid
          </h2>

          <p className="text-white text-[18px] font-medium max-w-[435px]">
            Freelance UI designer, Fullstack developer, & Data Miner. I create
            seamless web experiences for end-users.
          </p>

          <div className="flex gap-8 items-center">
            <Button
              title="About me"
              icon=<Aboutme />
              primary
              className="px-6"
            />
            <Button
              title="Projects"
              icon=<Projects />
              secondary
              className="px-8"
            />
          </div>
        </div>

        <div className="shrink-0">
          <Image src="/hero.png" alt="hero" width={400} height={400} />
        </div>
      </div>
      <div className="bg-[#181824] w-full h-[90px] md:h-[128px] absolute"></div>
    </section>
  );
};

export default Hero;
