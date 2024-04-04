import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../layout";
import StepBar from "@/components/steps/index";
import Graph from "@/components/graph/index";
import jsonData from "@/assets/data.json";
import PersonProfile from "@/components/person-profile/index";
import { EduUnderGradGraph, EduHighSchoolGraph } from "@/assets/graph-data.js";
import Search from "@/components/search";
import { GraphIntroText } from "@/assets/graph-intro-text.js";

const CareerPath = () => {
  const router = useRouter();
  const [queryData, setQueryData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [graphTextData, setGraphTextData] = useState({});
  const [stepActive, setStepActive] = useState(0);
  const [data1, setData1] = useState(EduUnderGradGraph);
  const [data2, setData2] = useState(EduHighSchoolGraph);
  const [label1, setLabel1] = useState("% vs. Undergrad Institution");
  const [label2, setLabel2] = useState("% vs. Highest Schooling Level");

  useEffect(() => {
    if (router.query.title) {
      setQueryData(router.query.title);
      const filtered = jsonData.filter(
        (entry) => entry.Job.toLowerCase() === router.query.title.toLowerCase()
      );
      setFilteredData(filtered);

      const item = GraphIntroText.find(
        (item) => item.id === router.query.title
      );

      setGraphTextData(item.data);

      if (item) {
        if (stepActive === 0) {
          setData1(item.GraphData.EduUnderGrad);
          setData2(item.GraphData.EduHighSchool);
          setLabel1("Undergrad Institution");
          setLabel2("Highest Schooling Level");
        } else if (stepActive === 1) {
          setData1(item.GraphData.FirstJobFunction);
          setData2(item.GraphData.YearsInJob);
          setLabel1("First Job Function");
          setLabel2("Years Spent At First Job");
        } else if (stepActive === 2) {
          setData1(item.GraphData.MidCareerPreUnicorn);
          setData2(item.GraphData.MidCareerFunction);
          setLabel1("Number of Roles Before Joining Unicorn");
          setLabel2("Most Common Function");
        } else {
          setData1(item.GraphData.PriorCompaniesFounded);
          setData2(item.GraphData.YearsPostCollege);
          setLabel1(
            router.query.title === "CEO"
              ? "Companies Founded Before Unicorn"
              : "Unicorn Stage When They Joined"
          );
          setLabel2(
            router.query.title === "CEO"
              ? "Years Between Ending College and Founding Unicorn"
              : "Level When Joining"
          );
        }
      }
    }
  }, [router.query.title, stepActive]);

  const handleUserBioRoute = (name) => {
    const encodedName = encodeURIComponent(name);
    router.push(`/bio/${encodedName}`);
  };

  return (
    <Layout>
      <section
        className="px-8 w-full"
        style={{ minHeight: "calc(100vh - 56px)" }}
      >
        <div className="flex w-full px-6">
          {/* Left Section */}
          <div className="flex flex-col justify-start left-10 w-[20%] border-r-4 pt-[40px]">
            <div className="sticky top-10 mr-4">
              <h1 className="text-3xl font-semibold leading">
                {`How to become a ${queryData
                  .toString()
                  .toUpperCase()} of a Unicorn.`}
              </h1>
              <p className="text-xl font-normal mt-3 text-gray-200">
                We studied dozens of their careers to map their path to the top.
              </p>
              <div className="flex flex-col justify-center items-center px-6 bg-nemo-blue-light gap-4 w-full lg:h-[130px] xl:h-[140px] rounded-lg mt-10">
                <h2 className="text-sm font-normal lg:text-[16px] xl:text-[20px] lg:font-normal text-nemo-dark text-center">
                  Browse other roles
                </h2>
                <Search isSearchFromMain={false} />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center items-center w-[80%] px-6 pt-[40px]">
            <div className="w-[100%]">
              <div>
                <h3 className="text-3xl font-medium text-center">
                  Here's how they do it
                </h3>
                <StepBar setStepActive={setStepActive} />
                <Graph
                  data1={data1}
                  data2={data2}
                  label1={label1}
                  label2={label2}
                  stepActive={stepActive}
                  graphTextData={graphTextData}
                />
              </div>
              <div className="flex flex-col mt-20 mb-12">
                <h3 className="text-3xl font-medium mb-10 text-center">
                  Study How They Got Here
                </h3>
                <div className="grid grid-cols-6 gap-2 items-center">
                  {filteredData.map((data, index) => (
                    <PersonProfile
                      key={index + "_profile"}
                      data={data}
                      handleUserBioRoute={handleUserBioRoute}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CareerPath;
