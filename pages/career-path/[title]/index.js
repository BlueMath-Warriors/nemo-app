import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../layout";
import StepBar from "@/components/steps/index";
import Graph from "@/components/graph/index";
import jsonData from "@/assets/data.json";
import PersonProfile from "@/components/person-profile/index";
import {
  EduUnderGradGraph,
  EduHighSchoolGraph,
  FirstJobFunction,
  FirstJobPromotion,
  MidCareerPreUnicorn,
  MidCareerFunction,
  UnicornRoleCompanyStageAtJoin,
  UnicornRoleLevelWhenJoining,
} from "@/assets/graph-data.js";
import Search from "@/components/search";

const CareerPath = () => {
  const router = useRouter();
  const [queryData, setQueryData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
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
    }
  }, [router.query.title]);

  useEffect(() => {
    if (stepActive === 0) {
      setData1(EduUnderGradGraph);
      setData2(EduHighSchoolGraph);
      setLabel1("Undergrad Institution");
      setLabel2("Highest Schooling Level");
    } else if (stepActive === 1) {
      setData1(FirstJobFunction);
      setData2(FirstJobPromotion);
      setLabel1("Function");
      setLabel2("Promotion");
    } else if (stepActive === 2) {
      setData1(MidCareerPreUnicorn);
      setData2(MidCareerFunction);
      setLabel1("# of Jobs Pre-Unicorn");
      setLabel2("Most Common Function");
    } else {
      setData1(UnicornRoleCompanyStageAtJoin);
      setData2(UnicornRoleLevelWhenJoining);
      setLabel1("Company Stage At Join");
      setLabel2("Level When Joining");
    }
  }, [stepActive]);

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
              <div className="flex flex-col justify-center items-center px-6 bg-nemo-blue-light gap-4 w-full h-[200px] rounded-lg mt-10">
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
                />
              </div>
              <div className="flex flex-col mt-12 mb-12">
                <h3 className="text-3xl font-medium mb-8 text-center">
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
