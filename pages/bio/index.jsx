import React, { useState } from "react";
import Image from "next/image";

const Circle = (props) => {};
const Bio = () => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [educations, setEducations] = useState([1, 2, 3]);
  const [skills, setSkills] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [experiences, setExperiences] = useState([1, 2, 3, 4, 5]);
  const [info, setInfo] = useState({
    name: "Ben",
    tagline: "Stanford '26",
    description:
      "Software engineering madman, lover of big rocks and bigger worlds. Always curious to learn more, I thrive on the thrill of tackling complex challenges head-on while constantly seeking new horizons to explore and conquer.",
  });
  return (
    <section className="w-full flex items-center md:items-start justify-center">
      <div className="flex min-h-screen flex-col md:flex-row gap-6 lg:gap-12 xl:gap-16 items-center justify-center bg-nemo-dark max-w-[1200px] mx-6 lg:mx-12 xl:mx-16">
        <div className="flex flex-col mb:flex-row items-center justify-center md:justify-end lg:gap-2 xl:gap-6 left-section">
          <div className="flex items-center justify-between mb:justify-center mb:flex-col w-full mb:w-full mb:gap-4 mb:order-1 order-2 mt-4 mb:mt-0">
            <div className="flex flex-col aspect-square items-center justify-center rounded-full bg-nemo-light md:w-24 md:h-24 xl:w-32 xl:h-32 mb:w-28 mb:h-28 mb:ml-10 w-24 h-24">
              <p className="text-nemo-dark text-2xl xl:text-3xl font-black">
                {experiences.length}
              </p>
              <h3 className="text-nemo-dark text-xl xl:text-2xl font-bold mt-[-3px]">
                Careers
              </h3>
            </div>

            <div className="flex flex-col aspect-square items-center justify-center rounded-full bg-nemo-light md:w-24 md:h-24 xl:w-32 xl:h-32 mb:w-28 mb:h-28 w-24 h-24">
              <p className="text-nemo-dark text-2xl xl:text-3xl font-black">
                {skills.length}
              </p>
              <h3 className="text-nemo-dark text-xl xl:text-2xl font-bold mt-[-3px]">
                Skills
              </h3>
            </div>

            <div className="flex flex-col aspect-square items-center justify-center rounded-full bg-nemo-light md:w-24 md:h-24 xl:w-32 xl:h-32 mb:w-28 mb:h-28 mb:ml-10 w-24 h-24">
              <p className="text-nemo-dark text-2xl xl:text-3xl font-black">
                {educations.length}
              </p>
              <h3 className="text-nemo-dark text-lg xl:text-xl font-bold mt-[-3px]">
                Education
              </h3>
            </div>
          </div>
          <Image
            src={"/images/profile-pic.jpg"}
            width={350}
            height={350}
            className="mb:order-2 order-1 rounded-full md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] mb:w-[300px] mb:h-[300px]"
          />
        </div>
        <div className="flex flex-col items-start justify-start right-section w-full md:w-1/2">
          <div className="flex gap-6 mb:gap-4">
            <h1 className="name text-6xl font-bold">{info.name}</h1>
            <Image
              src={
                isFavourite
                  ? "/images/star-on-icon.svg"
                  : "/images/star-off-icon.svg"
              }
              width={24}
              height={24}
            />
          </div>
          <p className="text-3xl mb-2">{info.tagline}</p>
          <hr className="w-16 mb-3" />
          <p className="text-lg">{info.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Bio;
