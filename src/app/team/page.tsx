"use client"
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Navigation from "@/components/nav/Navigation";
import Footer from "@/components/landing/Footer";
import { TeamMemberDetails } from "@/constants";

const TeamPage = () => {
  const [index, setIndex] = useState(0);
  const { name, designation, vision, image, twitter, linkedin } = TeamMemberDetails[index];

  const handleControl = (type: string) => {
    if (type === "prev") {
      setIndex(index <= 0 ? TeamMemberDetails.length - 1 : index - 1);
    } else {
      setIndex(index >= TeamMemberDetails.length - 1 ? 0 : index + 1);
    }
  };

  return (
    <div className="gradient-bg dotted-grid-mask min-h-screen grid grid-rows-[auto_1fr_auto] relative overflow-x-hidden">
      <Navigation />
      <main className="flex flex-col items-center justify-center py-16">
        <h1 className="text-white text-4xl font-bold mb-8 font-poppins">Meet Our Team</h1>
        <section className="ezy__team8 light bg-blue-100 dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden rounded-lg">
          <div>
            <div className="container px-8 mx-auto">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 md:order-2 my-2">
                  <img
                    src={image}
                    alt={`Portrait of ${name}`}
                    className="object-contain min-h-[250px] w-full md:w-[25vw] h-full mx-auto rounded-md"
                  />
                </div>
                <div className="w-full md:w-1/2 relative">
                  <div className="pt-12 pb-28 md:py-24 lg:py-48 lg:pr-24">
                    <h4 className="font-medium text-2xl sm:text-4xl mb-1 font-poppins">{name}</h4>
                    <p className="mb-6 sm:text-xl">{designation}</p>
                    <p className="opacity-50 mb-0 leading-7 text-xs sm:text-xl font-poppins">{vision}</p>
                    <div className="mt-6">
                      <a href={twitter} className="inline-block sm:text-2xl opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                      <a href={linkedin} className="inline-block sm:text-2xl opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    </div>
                  </div>
                  <div className="absolute w-10 text-right right-[13%] bottom-0 text-[120px] sm:text-[180px] text-purple-400 dark:text-slate-700 font-medium">
                    {index + 1}
                  </div>
                  <div className="-mt-10 -translate-y-7">
                    <button
                      className="w-10 h-10 text-[12px] bg-transparent rounded-full border border-slate-400 inline-flex justify-center items-center transition duration-300 hover:bg-slate-300 dark:hover:bg-slate-700 mr-3"
                      onClick={() => handleControl("prev")}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button
                      className="w-10 h-10 text-[12px] bg-transparent rounded-full border border-slate-400 inline-flex justify-center items-center transition duration-300 hover:bg-slate-300 dark:hover:bg-slate-700"
                      onClick={() => handleControl("next")}
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;