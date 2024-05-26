import React from "react";

const Contact = () => {
  return (
    <section className="container mx-auto" id="contact">
      <div className="flex flex-col md:flow-row justify-between items-start">
        <div>
          <div className="mb-4">
            <h4 className="text-[32px] font-semibold text-primaryColor">
              Featured Projects:
            </h4>
          </div>
        </div>

        <div>
          <div>
            <h4 className="text-[24px] font-medium text-white">
              Contact me, lets make magic together
            </h4>
          </div>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-5 rounded-lg bg-[#F5F5F5] opacity-20 placeholder:text-lightColor"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-5 rounded-lg bg-[#F5F5F5] opacity-20 placeholder:text-lightColor"
            />
            <input
              type="text"
              placeholder="Message"
              className="px-4 py-5 rounded-lg bg-[#F5F5F5] opacity-20 placeholder:text-lightColor"
            />
            <button
              type="submit"
              className="bg-primaryColor px-10 py-4 rounded-lg whitespace-nowrap text-white font-medium"
            >
              Send
            </button>
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
