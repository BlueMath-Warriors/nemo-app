import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import HorizontalCard from "@/components/horizontal-card";
import Layout from "../../layout";
import styles from "./styles.module.css";
import jsonData from "@/assets/data.json";

const Bio = () => {
  const router = useRouter();
  const [filteredData, setFilteredData] = useState(null);
  const [educations, setEducations] = useState([]);
  const [skills, setSkills] = useState([
    {
      "title": "Software Engineering",
      "endorsements": 24
    },
    {
      "title": "Data Science",
      "endorsements": 20
    },
    {
      "title": "Artificial Intelligence",
      "endorsements": 16
    },
    {
      "title": "Web Developemnt",
      "endorsements": 19
    },
    {
      "title": "DevOps",
      "endorsements": 36
    }

  ]);
  const [experiences, setExperiences] = useState([]);
  const [info, setInfo] = useState({});

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
          tagline: (data.Job || "") + " " + (data.Company || ""),
          description: data?.Description
            ? data?.Description
            : data?.Location,
          profileImg: data?.profile_img || "",
        });
      }
    }
  }, [router.query.name]);


  return (
    <Layout>
      <section className="w-full flex flex-col justify-center md:justify-start items-center mt-16">
        <div className="flex py-6 mb:py-8 lg:py-12 xl:py-16 flex-col md:flex-row gap-6 lg:gap-12 xl:gap-16 items-center justify-center bg-nemo-dark max-w-[1200px] mx-6 lg:mx-12 xl:mx-16 mb-8">
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
              src={info.profileImg}
              width={350}
              height={350}
              className="mb:order-2 order-1 rounded-full md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] mb:w-[300px] mb:h-[300px]"
              priority
              alt="profile Image"
            />
          </div>
          <div className="flex flex-col items-start justify-start right-section w-full md:w-1/2">
            <div className="flex gap-6 mb:gap-4">
              <h1 className="name text-6xl font-bold mb-4">{info.name}</h1>
            </div>
            <p className="text-3xl mb-4">{info.tagline}</p>
            <hr className="w-36 mb-3 border-t-4" />
            <p className="text-xl tracking-wide">{info.description}</p>
          </div>
        </div>
        {/* Experience Detail */}
        <div className="relative w-full flex flex-col items-center justify-center border-t-8 border-black px-6 lg:px-12 xl:px-16 pt-8 pb-28 bg-[#265073]">
          <h2
            className={
              "relative drop-shadow-2xl text-nemo-dark bg-nemo-light px-8 py-4 rounded-lg text-5xl top-[-75px] border-2 border-black " +
              styles.customShadow
            }
          >
            Experiences
          </h2>

          {experiences?.map((experience, index) => (
            <HorizontalCard
              experience={experience}
              dark={index === 0}
              key={index + "_experiences"}
            />
          ))}
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
        {skills.length > 0 && (
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
        )}
      </section>
    </Layout>
  );
};

export default Bio;
