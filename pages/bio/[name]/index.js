import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import HorizontalCard from "@/components/horizontal-card";
import Layout from "../../layout";
import styles from "./styles.module.css";
import jsonData from "@/assets/data.json";
import HorizontalTimeline from "@/components/horizontal-timeline";

const Bio = () => {
  const router = useRouter();
  const [filteredData, setFilteredData] = useState(null);
  const [educations, setEducations] = useState([]);
  const [skills, setSkills] = useState([
    {
      title: "Software Engineering",
      endorsements: 24,
    },
    {
      title: "Data Science",
      endorsements: 20,
    },
    {
      title: "Artificial Intelligence",
      endorsements: 16,
    },
    {
      title: "Web Developemnt",
      endorsements: 19,
    },
    {
      title: "DevOps",
      endorsements: 36,
    },
  ]);
  const [experiences, setExperiences] = useState([]);
  const [info, setInfo] = useState({});
  const dummyDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  useEffect(() => {
    if (router.query.name) {
      const filtered = jsonData.filter(
        (entry) => entry.Name === router.query.name
      );
      if (filtered.length > 0) {
        const data = filtered[0];
        setFilteredData(data);
        setEducations([...data.Education]);
        setExperiences([...data.Experiences]);
        setInfo({
          name: data.Name || "",
          tagline: (data.Job ? data.Job + ", " : "") + (data.Company || ""),
          location: data?.Location || "",
          description: data?.gpt_summary || dummyDescription,
          profileImg: data?.profile_img || "/images/default_image.png",
        });
      }
    }
  }, [router.query.name]);

  return (
    <Layout>
      <section className="w-full flex flex-col justify-center md:justify-start items-center">
        <div className="flex py-4 mb:py-6 lg:py-8 flex-col md:flex-row gap-6 lg:gap-12 xl:gap-16 items-start justify-center md:justify-start bg-nemo-dark max-w-[1200px] md:w-full px-6 lg:px-12 xl:px-16 mb-8">
          <div className="flex lg:gap-2 xl:gap-6 left-section shrink-0">
            <Image
              src={info.profileImg}
              width={260}
              height={260}
              className="mb:order-2 order-1 rounded-full md:w-[220px] md:h-[220px] lg:w-[240px] lg:h-[240px] xl:w-[300px] xl:h-[300px] mb:w-[260px] mb:h-[260px]"
              priority
              alt="profile Image"
            />
          </div>
          <div className="flex flex-col items-start justify-start right-section w-full md:pt-4">
            <div className="flex gap-6 mb:gap-4">
              <h1 className="name text-4xl font-bold mb-2">{info.name}</h1>
            </div>
            <p className="text-2xl mb-1/2">{info.tagline}</p>
            <p className="text-lg tracking-wide mb-1">{info.location}</p>
            <hr className="w-36 mb-2 border-t-4" />
            <p className="text-lg tracking-wide">{info.description}</p>
          </div>
        </div>
        {/* Experience Detail
        <div className="relative w-full flex flex-col items-center justify-center border-t-8 border-black px-6 lg:px-12 xl:px-16 pt-8 pb-28 bg-[#265073]">
          <h2
            className={
              "relative drop-shadow-2xl text-nemo-dark bg-nemo-light px-8 py-4 rounded-lg text-5xl top-[-75px] border-2 border-black " +
              styles.customShadow
            }
          >
            Careers
          </h2>

          {experiences?.map((experience, index) => (
            <HorizontalCard
              experience={experience}
              dark={index === 0}
              key={index + "_experiences"}
            />
          ))}
        </div> */}

        {/* Career TimeLine */}
        <div className="relative w-full flex flex-col items-center justify-center border-t-8 border-black px-6 lg:px-12 xl:px-16  pt-8 pb-28 bg-[#424769]">
          <h2
            className={
              "relative drop-shadow-2xl text-nemo-dark bg-nemo-light px-8 py-4 rounded-lg text-5xl top-[-75px] border-2 border-black " +
              styles.customShadow
            }
          >
            Career
          </h2>
          <div className="flex mt-56 mb-36 w-full">
            <HorizontalTimeline careers={experiences.slice(0, 6)} />
          </div>
        </div>

        {/* Education Details */}
        <div className="relative w-full flex flex-col items-center justify-center border-t-8 border-black px-6 lg:px-12 xl:px-16 pt-8 pb-28 bg-[#7468b6]">
          <h2
            className={
              "relative text-nemo-dark bg-nemo-light px-8 py-4 rounded-lg text-5xl top-[-75px]  border-2 border-black " +
              styles.customShadow
            }
          >
            Education
          </h2>
          <div className="flex flex-col w-full items-center gap-2">
            {educations?.map((education, index) => (
              <div
                className="flex flex-wrap flex-row items-center justify-between rounded-lg w-full bg-nemo-light px-6 py-3 max-w-[1200px]"
                key={index + "_educations"}
              >
                <div>
                  <p className="text-nemo-dark text-3xl font-bold">
                    {education.School}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-nemo-dark text-2xl font-bold">
                    {education.Degree},{" "}
                    <span className="text-xl">{education.Major}</span>
                  </p>
                  <p className="text-nemo-dark text-lg font-bold">
                    <p className="text-nemo-dark text-lg font-bold">
                      {(education.Start || education.End) !== "NA"
                        ? `${education.Start} - ${education.End}`
                        : ""}
                    </p>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        {/* {skills.length > 0 && (
          <div className="relative w-full flex flex-col items-center justify-center border-t-8 border-black px-6 lg:px-12 xl:px-16 pt-8 pb-28 bg-[#124076]">
            <h2
              className={
                "relative text-nemo-dark bg-nemo-light px-8 py-4 rounded-lg text-5xl top-[-75px]  border-2 border-black " +
                styles.customShadow
              }
            >
              Skills
            </h2>
            <div className="flex flex-row flex-wrap w-full items-center justify-center gap-2 max-w-[1200px]">
              {skills?.map((skill, index) => (
                <div
                  key={index + "_skills"}
                  className="bg-nemo-light flex flex-col flex-row items-center justify-center rounded-lg w-1/4 bg-nemo-light max-w-1/3 h-[80px]">
                  <p className="text-nemo-dark text-xl font-bold">{skill.title}</p>
                  <p className="text-nemo-dark text-xl "> Endorsments: <span className="text-2xl font-bold">{skill.endorsements}</span></p>

                </div>
              ))}
            </div>
          </div>
        )} */}
      </section>
    </Layout>
  );
};

export default Bio;
